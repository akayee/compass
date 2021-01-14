import React from "react";
// react plugin used to create datetimepicker
import ReactDatetime from "react-datetime";

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
import SectionCarousel from "./SectionCarousel";

// core components

function CaroselModal(props) {
    const items = React.useState(props);

      
  const [modal, setModal] = React.useState(false);
  const [city, setCity] = React.useState(null);
  const toggleModal = (e) => {
    setCity(e.currentTarget.getAttribute('data-column'));
    setModal(!modal);
    
  };
  return (
      <div>
            <Container>          
          <Row id="modals" >
              
            <div className="title">
              </div>
              {/* Button trigger modal */}
                    <Col md="12">
                    <Card key={items[0].props[0].id}> 
                    <CardImg src={items[0].props[0].src} value={items[0].props[0].id} data-column={items[0].props[0].caption} onClick={((e) => toggleModal(e,items))} />
                    
                    
                    <CardBody>
                      
                      {items[0].props[0].altText}
                    </CardBody>
                
                    </Card>
                    </Col>
            
            
              
              {/* Modal */}
              <Modal size="lg" isOpen={modal} toggle={toggleModal} >
                
                <div className="modal-body section section-gray ">
                  <SectionCarousel props={items[0].props}></SectionCarousel>
                </div>                
              </Modal>
            </Row>
            </Container>
      </div>
  );
}
export default CaroselModal;