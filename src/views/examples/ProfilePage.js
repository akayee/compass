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

// reactstrap components
import {
  Button,
  Input,
  Form,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Row,
  Container,
  Col
} from "reactstrap";

// core components
import ExamplesNavbar from "components/Navbars/ExamplesNavbar.js";
import ProfilePageHeader from "components/Headers/ProfilePageHeader.js";
import DemoFooter from "components/Footers/DemoFooter.js";
import {addData} from "components/firebase/auth"

function ProfilePage() {
  const [name, setName] = React.useState(null);
  const [email, setEmail] = React.useState(null);  
  const [message, setMessage] = React.useState(null);

 
  const add=()=>{
    let data={
      name:name,
      email:email,
      message:message
    }
    addData(data,"Mesajlar");
    
  }

  document.documentElement.classList.remove("nav-open");
  React.useEffect(() => {
    window.scrollTo(0, 0);
    document.body.classList.add("landing-page");
    return function cleanup() {
      document.body.classList.remove("landing-page");
    };
  });
  return (
    <>
      <ExamplesNavbar />
      <ProfilePageHeader />
      <div className="section profile-content">
        <Container>
        <Row>
              <Col className="ml-auto mr-auto text-center my-3" md="4">
              <div className="ml-auto mr-auto" md="4">
                  <img alt="..." src={require("assets/img/cap.png")} />
              </div>
              
                <h2 className="title">Compass</h2>
                
                
                  
                  <h6>Compass Education is an organization that participates in national and international education projects in especially EU Erasmus Plus projects.
                 With 15 years of work experience in the education we have founded the company in 2016. Since 2016 we have provided many courses to teachers and
                  students from differents countries. Compass Education is registered as a course provider at the participant portal of the European Commission and
                   the School Education Gateway. We provide courses by current instructors or instructors of partner Dutch institutions and also provides 
                   additional services such as cathering, lodging, airport transfer, organizing technical and cultural activities, transport etc.</h6>
                
               
              </Col>            
              <Col className="ml-auto mr-auto text-center my-3" md="4">
              <div className="ml-auto mr-auto" md="4">
                  <img alt="..." src={require("assets/img/mission.png")} />
              </div>
                <h2 className="title">Mission</h2>
               
                  
                 <h6>Compass Education aims to provide education, research, and international service activities in universal standards to provide services for the access, generation and dissemination of information for the educational, social, cultural, artistic and economic development of individuals.
  
  ​</h6>
                  
               
                
              </Col>            
              <Col className="ml-auto mr-auto text-center my-3" md="4">
              <div className="ml-auto mr-auto" md="4">
                  <img alt="..." src={require("assets/img/vision.png")} />
              </div>
                <h2 className="title">Vision</h2>
              
                 <h6>To support education projects aiming at increasing social solidarity, to create social awareness and culture with national and international cultural and 
                social activities, to make all kinds of works and projects to be made in order to make individuals, families and society active in economic, social and 
                cultural areas and to raise the level of education, to develop strategies in these issues, to create plans and programs and to contribute to the determination
                 of basic policies</h6>
                
  ​           
  
  
  
               
                  <h6>We are located in Amsterdam, the Dutch capital, is known for the artistic heritage, the extensive canal network and the narrow gable houses, a legacy from the 
                Golden Age. In the Musem Quarter are the famous museums and cycling is inextricably linked to the character of the city and there are many cycle paths. In less
                 then 30 minutes from Amsterdam you will find the Dutch cultural heritage Zaanse Schans known for it's famous windmills, the Fishingman village Volendam, the 
                 Cheese market of Alkmaar and many other beautiful places.</h6>
                
  ​
              
                
              </Col>            
            </Row>
        </Container>
      </div>
      <div className="section landing-section">
          <Container>
            <Row>
              <Col className="ml-auto mr-auto" md="8">
                <h2 className="text-center">Keep in touch?</h2>
                <Form className="contact-form"onSubmit={()=>add()}>
                  <Row>
                    <Col md="6">
                      <label>Name</label>
                      <InputGroup>
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="nc-icon nc-single-02" />
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input placeholder="Name" type="text" value={name} onChange={e=>setName(e.target.value)} />
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
                        <Input placeholder="Email" value={email} type="text" onChange={e=>setEmail(e.target.value)}/>
                      </InputGroup>
                    </Col>
                  </Row>
                  <label>Message</label>
                  <Input
                    placeholder="Tell us your thoughts and feelings..."
                    type="textarea"
                    rows="4"
                    value={message}
                    onChange={e=>setMessage(e.target.value)}
                  />
                  <Row>
                    <Col className="ml-auto mr-auto" md="4">
                      <Button className="btn-fill" color="danger" size="lg" >
                        Send Message
                      </Button>
                    </Col>
                  </Row>
                </Form>
              </Col>
            </Row>
          </Container>
        </div>
      <DemoFooter />
    </>
  );
}

export default ProfilePage;
