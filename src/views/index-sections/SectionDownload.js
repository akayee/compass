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
import { Container, Row, Col,Card,CardHeader,CardBody,CardImg,CardTitle } from "reactstrap";
import {takeData} from "components/firebase/auth";
import { Component } from "react";
import ReactPlayer from 'react-player'
const sunum = require('../../assets/img/arrow.png');

class SectionDownload extends Component {
  constructor(...args) {
    super(...args);
    this.state = {       
      Activities:[]
     
    };
  }
  componentDidMount(){
    
    this.takeDat();
    console.log(this.state.downloadURLs);
    window.scrollTo(0, 0);
  }

  takeDat=()=>{
    var that=this;
    
    takeData("Aktivite").on('value',(snapshot)=>{
      let data =snapshot.val();
      that.setState({
        Activities:data
      })
    } );
    
  }
  render(){
    const{Activities}=this.state;
    return (
      <>
     
        <div className="section">
          <Container className="text-center">
            <h2 className="title">Biz Ne Yaparız?</h2>
         
          <img  src={sunum} />
          <Row> <Col md="6"> <Card>
            <CardHeader>
              Turkish
            </CardHeader>
            <CardBody>
            <div class="embed-responsive ">
             <ReactPlayer  url='https://www.youtube.com/watch?v=Emw7GjHDsKU' />
              
            </div>
            </CardBody>
          </Card></Col>
        
          <Col md="6"><Card>
            <CardHeader>
              English
            </CardHeader>
            <CardBody>
            <div class="embed-responsive ">
             <ReactPlayer  url='https://www.youtube.com/watch?v=h-foa6LCV7c' />
              
            </div>
            </CardBody>
          </Card></Col></Row>
         
          
          
          
          

          <h2 className="title">Anlık İş Akışı</h2>
            <Row>
              {
           Activities?Object.keys(Activities).map((key, index)=> (
              <Col className="ml-auto mr-auto text-center" md="6">
                
              <Card key={Activities[key].id}>
              <Row>
              {Activities[key].src[0]?<Col className="ml-auto" ><img src={Activities[key].src[0]} /></Col>:null}
                
                {Activities[key].src[1]?<Col className="ml-auto"><img src={Activities[key].src[1]} /></Col>:null}
                  </Row>
                  {Activities[key].src[2]?<img src={Activities[key].src[2]} />:null}
                
                
                <h6>{Activities[key].Baslik}</h6>
                <CardBody>
                {Activities[key].Aciklama}
                </CardBody>
              </Card>
              </Col>  
            )):null }        
              
            </Row>
            
          </Container>
        </div>
      </>
    );
  }
  
}

export default SectionDownload;
