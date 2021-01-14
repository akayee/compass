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
import { Container, Row, Col,Card,CardImg,CardTitle,CardFooter } from "reactstrap";
import ShowMoreText from 'react-show-more-text';
import { Component } from "react";
const sunum = require('../../assets/img/food.jpeg');
const car = require('../../assets/img/car.jpg');
const support = require('../../assets/img/support.jpeg');
const okul = require('../../assets/img/okul.jpeg');

const metin=["During your stay we provide the transportation with our vehicles. This  includes airport transfers, transfers between accommodation to the course  center and to the cultural activities.",
"We also provide luxe high quality chalets in the calm and safe area ina nature reserve just 10 km from the centre of Amsterdam and 15 km from the Airport of Amsterdam. The chalets are fully furnished and complete with everything a group could need during their stay. Here you can discover de Dutch polder landscape, go cycling or swim in the pool. We provide breakfast and dinner.",
"Compass Education collaborates with many schools and businesses so we can arrange technical visits during your projects.",
"We help you to prepare all the documents needed before, during and after the project and make sure all host organization documents are correct. Our courses can be given in English, Dutch and Turkish.For the groups from Turkey, if needed, we can provide an interpreter during the project.During the project we give 24-hour emergency support, final report,Erasmus certificate of attendance and Europasses. We can organize everything for you, from you land in the Netherlands until your departure.We are flexible to your needs. Tel us what you want and we can start working together and make all the necessary arrangements."]

// core components

class SectionServices extends Component {
  
  render(){
    return (
      <>
     
        <div className="section">
          <Container className="text-center">
         
          
          <Row> 
          <Col md="6"> <Card>
            <CardTitle>
            <h4 className="info-title my-0 py-0">Transportation</h4>
            </CardTitle>
            <CardImg src={car}   />
            <CardFooter>
            <ShowMoreText
                        /* Default options */
                        lines={5}
                        more='Show more'
                        less='Show less'
                        anchorClass=''
                        onClick={this.executeOnClick}
                        expanded={false}
                        width={280}
                    >            
            {metin[0]}
            </ShowMoreText>
            </CardFooter>
          </Card></Col>
            <Col md="6"> <Card>
            <CardTitle>
            <h4 className="info-title my-0 py-0">Accommodation & Meals</h4>
            </CardTitle>
            <CardImg src={sunum}   />
            <CardFooter>
            <ShowMoreText
                        /* Default options */
                        lines={5}
                        more='Show more'
                        less='Show less'
                        anchorClass=''
                        onClick={this.executeOnClick}
                        expanded={false}
                        width={280}
                    >
            {metin[1]}
           </ShowMoreText>
            </CardFooter>
          </Card></Col>
        
          </Row>
          <Row> <Col md="6"> <Card>
            <CardTitle>
            <h4 className="info-title my-0 py-0">Thecnical & School Visits</h4>
            </CardTitle>
            <CardImg src={okul}   />
            <CardFooter>
            <ShowMoreText
                        /* Default options */
                        lines={5}
                        more='Show more'
                        less='Show less'
                        anchorClass=''
                        onClick={this.executeOnClick}
                        expanded={false}
                        width={280}
                    >
            {metin[2]}</ShowMoreText>
            </CardFooter>
          </Card></Col>
        
          <Col md="6"> <Card>
            <CardTitle>
            <h4 className="info-title my-0 py-0">Support Services</h4>
            </CardTitle>
            <CardImg src={support}   />
            <CardFooter>
            <ShowMoreText
                        /* Default options */
                        lines={5}
                        more='Show more'
                        less='Show less'
                        anchorClass=''
                        onClick={this.executeOnClick}
                        expanded={false}
                        width={280}
                    >
            {metin[3]}</ShowMoreText>
            </CardFooter>
          </Card></Col></Row>
         
          
          
          
          

         
            
          </Container>
        </div>
      </>
    );
  }
  
}

export default SectionServices;
