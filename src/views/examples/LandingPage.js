/*!

=========================================================
* Paper Kit React - v1.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/paper-kit-react

* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/paper-kit-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";

import {takeData} from "components/firebase/auth";
import ShowMoreText from 'react-show-more-text';

// reactstrap components
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardImg,
  CardHeader,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col
} from "reactstrap";

// core components
import ExamplesNavbar from "components/Navbars/ExamplesNavbar.js";
import CourseHeader from "components/Headers/CourseHeader.js";
import DemoFooter from "components/Footers/DemoFooter.js";
class LandingPage extends React.Component {
  constructor(...args) {
    super(...args);
    this.state = {       
      Courses:[]
     
    };
  }
  componentDidMount(){
    
    
    this.takeDat();
    console.log(this.state.downloadURLs);
    window.scrollTo(0, 0);
  }

  takeDat=()=>{
    var that=this;
    
    takeData("Dersler").on('value',(snapshot)=>{
      let data =snapshot.val();
      that.setState({
        Courses:data
      })
    } );
    
  }
  executeOnClick(isExpanded) {
    console.log(isExpanded);
}
  render(){

    const{Courses}=this.state;
   
    return (
      <>
        <ExamplesNavbar />
        <div className="main">
          <CourseHeader/>
          <div className="section text-center">
            <Container>
              <Row>
                <Col className="ml-auto mr-auto" md="8">
                  <h2 className="title">Let's talk about courses</h2>
                  <h5 className="description">
                    There are several courses we have.
                  </h5>
                  <br />
                  
                </Col>
              </Row>
              <br />
              <br />
              <Row>
                {Courses?Object.keys(Courses).map((key, index)=> (
                  
                  <Col md="6" key={Courses[key].id}>
                  <Card>
                    <CardImg src={Courses[key].src} />
                    <CardHeader>
                      {Courses[key].KursBaslik}
                    </CardHeader>
                    <CardBody>
                    <h4 className="info-title my-0 py-0">
                    <ShowMoreText
                        /* Default options */
                        lines={4}
                        more='Show more'
                        less='Show less'
                        anchorClass=''
                        onClick={this.executeOnClick}
                        expanded={false}
                        width={280}
                    >
                      {Courses[key].KursAciklama}
                    </ShowMoreText>
                    </h4>
                    </CardBody>
                    <CardFooter>
                    <Button
                        className="btn-just-icon btn-black"
                        color="link"
                        href={Courses[key].KursLink}
                      >
                        
                        <i className="nc-icon nc-atom" />
                      </Button>
                      <p>School Education Gateway</p>
                    </CardFooter>
                  </Card>
                  </Col>
                )):null
                }
                
                
              </Row>
            </Container>
          </div>
         
          <div className="section landing-section">
            <Container>
              <Row>
                <Col className="ml-auto mr-auto" md="8">
                  <h2 className="text-center">Keep in touch?</h2>
                  <Form className="contact-form">
                    <Row>
                      <Col md="6">
                        <label>Name</label>
                        <InputGroup>
                          <InputGroupAddon addonType="prepend">
                            <InputGroupText>
                              <i className="nc-icon nc-single-02" />
                            </InputGroupText>
                          </InputGroupAddon>
                          <Input placeholder="Name" type="text" />
                        </InputGroup>
                      </Col>
                      <Col md="6">
                        <label>Email</label>
                        <InputGroup>
                          <InputGroupAddon addonType="prepend">
                            <InputGroupText>
                              <i className="nc-icon nc-email-85" />
                            </InputGroupText>
                          </InputGroupAddon>
                          <Input placeholder="Email" type="text" />
                        </InputGroup>
                      </Col>
                    </Row>
                    <label>Message</label>
                    <Input
                      placeholder="Tell us your thoughts and feelings..."
                      type="textarea"
                      rows="4"
                    />
                    <Row>
                      <Col className="ml-auto mr-auto" md="4">
                        <Button className="btn-fill" color="danger" size="lg">
                          Send Message
                        </Button>
                      </Col>
                    </Row>
                  </Form>
                </Col>
              </Row>
            </Container>
          </div>
        </div>
        <DemoFooter />
      </>
    );
  }
  }
  

export default LandingPage;
