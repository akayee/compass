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

import SectionCarousel from "./SectionCarousel";


// reactstrap components
import {
    Modal,
    Container,
    Row,
    Col,
    Card,
    CardImg,
    CardBody
  } from "reactstrap";
import ProfilePageHeader from "components/Headers/ProfilePageHeader";
import ReactCardCarousel from "react-card-carousel";
 




 
// core components

const itemsAmsterdam=[
  {
      id:0,
      src: require("assets/img/Culture/amsterdam/1.jpg"),
      altText: "Amsterdam",
      caption: "Amsterdam"
  },
  {
      id:1,
      src: require("assets/img/Culture/amsterdam/2.jpg"),
      altText: "Amsterdam",
      caption: "Amsterdam"
  },
  {
      id:2,
      src: require("assets/img/Culture/amsterdam/3.jpg"),
      altText: "Amsterdam",
      caption: "Amsterdam"
  },
  {
      id:3,
      src: require("assets/img/Culture/amsterdam/4.jpg"),
      altText: "Amsterdam",
      caption: "Amsterdam"
  },
  {
      id:4,
      src: require("assets/img/Culture/amsterdam/5.jpg"),
      altText: "Amsterdam",
      caption: "Amsterdam"
  },
  {
      id:5,
      src: require("assets/img/Culture/amsterdam/6.jpg"),
      altText: "Amsterdam",
      caption: "Amsterdam"
  }
];
const itemsBruges=[{
  id:0,
  src: require("assets/img/Culture/Bruges/1.jpg"),
  altText: "Bruges",
  caption: "Bruges"
},
{
  id:1,
  src: require("assets/img/Culture/Bruges/2.jpg"),
  altText: "Bruges",
  caption: "Bruges"
},
{
  id:2,
  src: require("assets/img/Culture/Bruges/3.jpg"),
  altText: "Bruges",
  caption: "Bruges"
},
{
  id:3,
  src: require("assets/img/Culture/Bruges/4.jpg"),
  altText: "Bruges",
  caption: "Bruges"
},
{
  id:4,
  src: require("assets/img/Culture/Bruges/5.jpg"),
  altText: "Bruges",
  caption: "Bruges"
},
{
  id:5,
  src: require("assets/img/Culture/Bruges/6.jpg"),
  altText: "Bruges",
  caption: "Bruges"
}
];
const itemsBrussels=[{
  id:0,
  src: require("assets/img/Culture/Brussels/1.jpg"),
  altText: "Brussels",
  caption: "Brussels"
},
{
  id:1,
  src: require("assets/img/Culture/Brussels/2.jpg"),
  altText: "Brussels",
  caption: "Brussels"
},
{
  id:2,
  src: require("assets/img/Culture/Brussels/3.jpg"),
  altText: "Brussels",
  caption: "Brussels"
},
{
  id:3,
  src: require("assets/img/Culture/Brussels/4.jpg"),
  altText: "Brussels",
  caption: "Brussels"
},
{
  id:4,
  src: require("assets/img/Culture/Brussels/5.jpg"),
  altText: "Brussels",
  caption: "Brussels"
},
{
  id:5,
  src: require("assets/img/Culture/Brussels/6.jpg"),
  altText: "Brussels",
  caption: "Brussels"
}
];
const itemsGiethoorn=[{
  id:0,
  src: require("assets/img/Culture/Giethoorn/1.jpg"),
  altText: "Giethoorn",
  caption: "Giethoorn"
},
{
  id:1,
  src: require("assets/img/Culture/Giethoorn/2.jpg"),
  altText: "Giethoorn",
  caption: "Giethoorn"
},
{
  id:2,
  src: require("assets/img/Culture/Giethoorn/3.jpg"),
  altText: "Giethoorn",
  caption: "Giethoorn"
},
{
  id:3,
  src: require("assets/img/Culture/Giethoorn/4.jpg"),
  altText: "Giethoorn",
  caption: "Giethoorn"
},
{
  id:4,
  src: require("assets/img/Culture/Giethoorn/5.jpg"),
  altText: "Giethoorn",
  caption: "Giethoorn"
},
{
  id:5,
  src: require("assets/img/Culture/Giethoorn/6.jpg"),
  altText: "Giethoorn",
  caption: "Giethoorn"
}
];
const itemsCologne=[{
  id:0,
  src: require("assets/img/Culture/Cologne/1.jpg"),
  altText: "Cologne",
  caption: "Cologne"
},
{
  id:1,
  src: require("assets/img/Culture/Cologne/2.jpg"),
  altText: "Cologne",
  caption: "Cologne"
},
{
  id:2,
  src: require("assets/img/Culture/Cologne/3.jpg"),
  altText: "Cologne",
  caption: "Cologne"
},
{
  id:3,
  src: require("assets/img/Culture/Cologne/4.jpg"),
  altText: "Cologne",
  caption: "Cologne"
},
{
  id:4,
  src: require("assets/img/Culture/Cologne/5.jpg"),
  altText: "Cologne",
  caption: "Cologne"
},
{
  id:5,
  src: require("assets/img/Culture/Cologne/6.jpg"),
  altText: "Cologne",
  caption: "Cologne"
}
];
const itemsLahey=[{
  id:0,
  src: require("assets/img/Culture/Lahey/1.jpg"),
  altText: "Lahey",
  caption: "Lahey"
},
{
  id:1,
  src: require("assets/img/Culture/Lahey/2.jpg"),
  altText: "Lahey",
  caption: "Lahey"
},
{
  id:2,
  src: require("assets/img/Culture/Lahey/3.jpg"),
  altText: "Lahey",
  caption: "Lahey"
},
{
  id:3,
  src: require("assets/img/Culture/Lahey/4.jpg"),
  altText: "Lahey",
  caption: "Lahey"
},
{
  id:4,
  src: require("assets/img/Culture/Lahey/5.jpg"),
  altText: "Lahey",
  caption: "Lahey"
},
{
  id:5,
  src: require("assets/img/Culture/Lahey/6.jpg"),
  altText: "Lahey",
  caption: "Lahey"
}
];
const itemsParis=[{
  id:0,
  src: require("assets/img/Culture/Paris/1.jpg"),
  altText: "Paris",
  caption: "Paris"
},
{
  id:1,
  src: require("assets/img/Culture/Paris/2.jpg"),
  altText: "Paris",
  caption: "Paris"
},
{
  id:2,
  src: require("assets/img/Culture/Paris/3.jpg"),
  altText: "Paris",
  caption: "Paris"
},
{
  id:3,
  src: require("assets/img/Culture/Paris/4.jpg"),
  altText: "Paris",
  caption: "Paris"
},
{
  id:4,
  src: require("assets/img/Culture/Paris/5.jpg"),
  altText: "Paris",
  caption: "Paris"
},
{
  id:5,
  src: require("assets/img/Culture/Paris/6.jpg"),
  altText: "Paris",
  caption: "Paris"
}
];
const itemsRotterdam=[{
  id:0,
  src: require("assets/img/Culture/Rotterdam/1.jpg"),
  altText: "Rotterdam",
  caption: "Rotterdam"
},
{
  id:1,
  src: require("assets/img/Culture/Rotterdam/2.jpg"),
  altText: "Rotterdam",
  caption: "Rotterdam"
},
{
  id:2,
  src: require("assets/img/Culture/Rotterdam/3.jpg"),
  altText: "Rotterdam",
  caption: "Rotterdam"
},
{
  id:3,
  src: require("assets/img/Culture/Rotterdam/4.jpg"),
  altText: "Rotterdam",
  caption: "Rotterdam"
},
{
  id:4,
  src: require("assets/img/Culture/Rotterdam/5.jpg"),
  altText: "Rotterdam",
  caption: "Rotterdam"
},
{
  id:5,
  src: require("assets/img/Culture/Rotterdam/6.jpg"),
  altText: "Rotterdam",
  caption: "Rotterdam"
}
];
const itemsVolendam=[{
  id:0,
  src: require("assets/img/Culture/Volendam/1.jpg"),
  altText: "Volendam",
  caption: "Volendam"
},
{
  id:1,
  src: require("assets/img/Culture/Volendam/2.jpg"),
  altText: "Volendam",
  caption: "Volendam"
},
{
  id:2,
  src: require("assets/img/Culture/Volendam/3.jpg"),
  altText: "Volendam",
  caption: "Volendam"
},
{
  id:3,
  src: require("assets/img/Culture/Volendam/4.jpg"),
  altText: "Volendam",
  caption: "Volendam"
},
{
  id:4,
  src: require("assets/img/Culture/Volendam/5.jpg"),
  altText: "Volendam",
  caption: "Volendam"
},
{
  id:5,
  src: require("assets/img/Culture/Volendam/6.jpg"),
  altText: "Volendam",
  caption: "Volendam"
}
];
const itemsZaanseSchans=[{
  id:0,
  src: require("assets/img/Culture/ZaanseSchans/1.jpg"),
  altText: "Zaanse Schans",
  caption: "Zaanse Schans"
},
{
  id:1,
  src: require("assets/img/Culture/ZaanseSchans/2.jpg"),
  altText: "Zaanse Schans",
  caption: "Zaanse Schans"
},
{
  id:2,
  src: require("assets/img/Culture/ZaanseSchans/3.jpg"),
  altText: "Zaanse Schans",
  caption: "Zaanse Schans"
},
{
  id:3,
  src: require("assets/img/Culture/ZaanseSchans/4.jpg"),
  altText: "Zaanse Schans",
  caption: "Zaanse Schans"
},
{
  id:4,
  src: require("assets/img/Culture/ZaanseSchans/5.jpg"),
  altText: "Zaanse Schans",
  caption: "Zaanse Schans"
},
{
  id:5,
  src: require("assets/img/Culture/ZaanseSchans/6.jpg"),
  altText: "Zaanse Schans",
  caption: "Zaanse Schans"
}
];

function SectionExamples() {
    const [modal, setModal] = React.useState(false);
  const [city, setCity] = React.useState(null);
  
  const [play, setPlay] = React.useState(true);
  const toggleModal = (e) => {
    setPlay(!play);
    setModal(!modal);
    switch(e.currentTarget.getAttribute('data-column')){
      case "Amsterdam":
        setCity(itemsAmsterdam);
        break;
      case "Bruges":
          setCity(itemsBruges);
          break;
      case "Brussels":
        setCity(itemsBrussels);
        break;
      case "Giethoorn":
        setCity(itemsGiethoorn);
        break;
      case "Cologne":
        setCity(itemsCologne);
        break;
      case "Lahey":
        setCity(itemsLahey);
        break;
      case "Paris":
        setCity(itemsParis);
        break;
      case "Rotterdam":
        setCity(itemsRotterdam);
        break;
      case "Volendam":
        setCity(itemsVolendam);
        break;
      case "Zaanse Schans":
        setCity(itemsZaanseSchans);
        break;
      default:
        setCity(null);
  
  
    }
    
  };
  
  
  return (
      <div className="section section-gray">
        <ProfilePageHeader></ProfilePageHeader>
        <Container>
          <Row className="example-page">
            <Col className="text-center" md="12">
            <h2 className="title">CULTURAL ACTIVITIES</h2>
              <p className="description ">
              <h6 >During your project we can offer you a wide range of cultural activities in the Netherlands like:</h6>
              <h6>
              <p><h6>- Amsterdam Damplein, Museum plein, Leidseplein, Rembrandplein</h6></p>
              
              <p> <h6>- Zaanse Schans (Windmill village)</h6></p>
             
              <p><h6>- Volendam (Fisherman village)</h6></p>
              
              <p><h6>- Haarlem</h6></p>

              <p><h6>- Alkmaar</h6></p>

              <p><h6>- Rotterdam</h6></p>

              <p> <h6>- The Hague</h6></p>

              <p><h6>- Giethoorn</h6></p>

              ​

              <h6>We can also organize cultural activities to the following city's abroad:</h6>

              <p><h6>- Cologne in Germany</h6></p>

              <p><h6>- Brugge, Antwerpen and Bruxelles in Belgium</h6></p>

              <p><h6>- Paris in France</h6></p>
              </h6>
             
              </p>
            </Col>
            <Col  md="12">
            <div className="section section-gray" style={{
                position: "relative",
                height: "50vh",
                width: "100%",
                justifyContent: "center",
                alignItems: "middle"}}>
            <ReactCardCarousel disable_box_shadow="false" spread="wide" autoplay={play} autoplay_speed={3500}>
            <div className="section section-gray" style={{
                        height: "400px",
                        width: "400px",
                        paddingTop: "50px",
                        textAlign: "center",
                        
                        color: "#FFF",
                        fontFamily: "sans-serif",
                        fontSize: "12px",
                        textTransform: "uppercase",
                        borderRadius: "10px",
                        boxSizing: "border-box"}}> 
            <Col >
                    
            <Card key={itemsAmsterdam[0].id}> 
            <CardImg src={itemsAmsterdam[0].src} value={itemsAmsterdam[0].id} data-column={itemsAmsterdam[0].caption} onClick={toggleModal} />
                    
                    
            <CardBody>
                      
                {itemsAmsterdam[0].altText}
            </CardBody>
                
            </Card>
            </Col>
           
            </div>
            <div className="section section-gray" style={{
               height: "400px",
               width: "400px",
               paddingTop: "50px",
               textAlign: "center",
               
               color: "#FFF",
               fontFamily: "sans-serif",
               fontSize: "12px",
               textTransform: "uppercase",
               borderRadius: "10px",
               boxSizing: "border-box"}}> <Col md="12">
                    
                    <Card key={itemsBruges[0].id}> 
                    <CardImg src={itemsBruges[0].src} value={itemsBruges[0].id} data-column={itemsBruges[0].caption} onClick={toggleModal} />
                            
                            
                    <CardBody>
                              
                        {itemsBruges[0].altText}
                    </CardBody>
                        
                    </Card>
                    </Col>
                   
                    </div>
                    <div className="section section-gray" style={{
               height: "400px",
               width: "400px",
               paddingTop: "50px",
               textAlign: "center",
               
               color: "#FFF",
               fontFamily: "sans-serif",
               fontSize: "12px",
               textTransform: "uppercase",
               borderRadius: "10px",
               boxSizing: "border-box"}}> <Col md="12">
                    
                    <Card key={itemsBrussels[0].id}> 
                    <CardImg src={itemsBrussels[0].src} value={itemsBrussels[0].id} data-column={itemsBrussels[0].caption} onClick={toggleModal} />
                            
                            
                    <CardBody>
                              
                        {itemsBrussels[0].altText}
                    </CardBody>
                        
                    </Card>
                    </Col>
                    </div>
            <div className="section section-gray" style={{
                height: "400px",
                width: "400px",
                paddingTop: "50px",
                textAlign: "center",
                
                color: "#FFF",
                fontFamily: "sans-serif",
                fontSize: "12px",
                textTransform: "uppercase",
                borderRadius: "10px",
                boxSizing: "border-box"}}> <Col md="12">
                    
                    <Card key={itemsGiethoorn[0].id}> 
                    <CardImg src={itemsGiethoorn[0].src} value={itemsGiethoorn[0].id} data-column={itemsGiethoorn[0].caption} onClick={toggleModal} />
                            
                            
                    <CardBody>
                              
                        {itemsGiethoorn[0].altText}
                    </CardBody>
                        
                    </Card>
                    </Col>
                    </div>
                    <div className="section section-gray" style={{
               height: "400px",
               width: "400px",
               paddingTop: "50px",
               textAlign: "center",
               
               color: "#FFF",
               fontFamily: "sans-serif",
               fontSize: "12px",
               textTransform: "uppercase",
               borderRadius: "10px",
               boxSizing: "border-box"}}> <Col md="12">
                    
                    <Card key={itemsCologne[0].id}> 
                    <CardImg src={itemsCologne[0].src} value={itemsCologne[0].id} data-column={itemsCologne[0].caption} onClick={toggleModal} />
                            
                            
                    <CardBody>
                              
                        {itemsCologne[0].altText}
                    </CardBody>
                        
                    </Card>
                    </Col>
                    </div>
                    <div className="section section-gray" style={{
              height: "400px",
              width: "400px",
              paddingTop: "50px",
              textAlign: "center",
              
              color: "#FFF",
              fontFamily: "sans-serif",
              fontSize: "12px",
              textTransform: "uppercase",
              borderRadius: "10px",
              boxSizing: "border-box"}}> 
            <Col md="12">
                    
            <Card key={itemsLahey[0].id}> 
            <CardImg src={itemsLahey[0].src} value={itemsLahey[0].id} data-column={itemsLahey[0].caption} onClick={toggleModal} />
                    
                    
            <CardBody>
                      
                {itemsLahey[0].altText}
            </CardBody>
                
            </Card>
            </Col>
            
            </div>
            <div className="section section-gray" style={{
              height: "400px",
              width: "400px",
              paddingTop: "50px",
              textAlign: "center",
              
              color: "#FFF",
              fontFamily: "sans-serif",
              fontSize: "12px",
              textTransform: "uppercase",
              borderRadius: "10px",
              boxSizing: "border-box"}}> <Col md="12">
                    
                    <Card key={itemsParis[0].id}> 
                    <CardImg src={itemsParis[0].src} value={itemsParis[0].id} data-column={itemsParis[0].caption} onClick={toggleModal} />
                            
                            
                    <CardBody>
                              
                        {itemsParis[0].altText}
                    </CardBody>
                        
                    </Card>
                    </Col>
                    
                    </div>
                    <div className="section section-gray" style={{
               height: "400px",
               width: "400px",
               paddingTop: "50px",
               textAlign: "center",
               
               color: "#FFF",
               fontFamily: "sans-serif",
               fontSize: "12px",
               textTransform: "uppercase",
               borderRadius: "10px",
               boxSizing: "border-box"}}> <Col md="12">
                    
                    <Card key={itemsRotterdam[0].id}> 
                    <CardImg src={itemsRotterdam[0].src} value={itemsRotterdam[0].id} data-column={itemsRotterdam[0].caption} onClick={toggleModal} />
                            
                            
                    <CardBody>
                              
                        {itemsRotterdam[0].altText}
                    </CardBody>
                        
                    </Card>
                    </Col>
                    </div>
                    <div className="section section-gray" style={{
               height: "400px",
               width: "400px",
               paddingTop: "50px",
               textAlign: "center",
               
               color: "#FFF",
               fontFamily: "sans-serif",
               fontSize: "12px",
               textTransform: "uppercase",
               borderRadius: "10px",
               boxSizing: "border-box"}}> <Col md="12">
                    
                    <Card key={itemsVolendam[0].id}> 
                    <CardImg src={itemsVolendam[0].src} value={itemsVolendam[0].id} data-column={itemsVolendam[0].caption} onClick={toggleModal} />
                            
                            
                    <CardBody>
                              
                        {itemsVolendam[0].altText}
                    </CardBody>
                        
                    </Card>
                    </Col>
                    </div>
                    <div className="section section-gray" style={{
              height: "400px",
              width: "400px",
              paddingTop: "50px",
              textAlign: "center",
              
              color: "#FFF",
              fontFamily: "sans-serif",
              fontSize: "12px",
              textTransform: "uppercase",
              borderRadius: "10px",
              boxSizing: "border-box"}}> <Col md="12">
                    
                    <Card key={itemsZaanseSchans[0].id}> 
                    <CardImg src={itemsZaanseSchans[0].src} value={itemsZaanseSchans[0].id} data-column={itemsZaanseSchans[0].caption} onClick={toggleModal} />
                            
                            
                    <CardBody>
                              
                        {itemsZaanseSchans[0].altText}
                    </CardBody>
                        
                    </Card>
                    </Col>
                    </div>
                    <Modal size="lg" isOpen={modal} toggle={toggleModal} >
                
                <div className="modal-body section section-gray ">
                <SectionCarousel props={city}></SectionCarousel>
                </div>                
            </Modal>
            </ReactCardCarousel>
            </div>
            </Col>
            
            
            
              
            
                
          
           
          </Row>
        </Container>
      </div>
  );
}


export default SectionExamples;
