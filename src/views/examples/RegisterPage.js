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
import { Button, Card, Form, Input, Container, Row, Col} from "reactstrap";
import AdminPage from './AdminPage'

// core components
import ExamplesNavbar from "components/Navbars/ExamplesNavbar.js";
import {login,currentUser} from "components/firebase/auth.js"
import firebase from "components/firebase/firebase"

class RegisterPage extends React.Component {
  constructor(...args) {
    super(...args);
    this.state = { 
      email:null,
      password:null,
      admin:false,
      user:currentUser()
    };
  }

componentDidMount() {
  this.register();
}
register =()=>{


     var that=this;
    firebase.auth().onAuthStateChanged(function(user){
      if(user){
        that.setState({
          admin:true
        });
      }else{
        that.setState({
          admin:false
        });
      }
    }); 
  

}

signup=()=>{
    login(this.state.email, this.state.password).catch(e =>alert(e.message)).then(this.setState({admin:true}))
   
      
  }
onChange = event=>{
  this.setState({
    [event.target.name]:event.target.value
  });

}
  render(){
    

    return (
      <>
      {this.state.admin? <AdminPage/> :
      <div> 
      <ExamplesNavbar />
        <div
          className="page-header"
          style={{
            backgroundImage: "url(" + require("assets/img/login-image.jpg") + ")"
          }}
        >
          <div className="filter" />
          <Container>
            <Row>
              <Col className="ml-auto mr-auto" lg="4">
                <Card className="card-register ml-auto mr-auto">
                  <h3 className="title mx-auto">Welcome</h3>
                 
                  <Form className="register-form" onSubmit={this.signup}>
                    <label>Email</label>
                    <Input placeholder="Email" name="email" id="email" type="text" onChange={this.onChange} />
                    <label>Password</label>
                    <Input placeholder="Password" name="password" id="password" type="password" onChange={this.onChange} />
                    <Button block className="btn-round" color="danger" >
                      Login
                    </Button>
                  </Form>
                  
                </Card>
              </Col>
            </Row>
          </Container>
          <div className="footer register-footer text-center">
            <h6>
              © {new Date().getFullYear()}, made with{" "}
              <i className="fa fa-heart heart" /> by Creative Tim
            </h6>
          </div>
        </div>
      </div>}
      
       
      </>
    );
  }

  
}

export default RegisterPage;
