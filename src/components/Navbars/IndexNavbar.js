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
// nodejs library that concatenates strings
import classnames from "classnames";

// reactstrap components
import {
  Button,
  Collapse,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container
} from "reactstrap";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";


function IndexNavbar() {
  
  const [toCourse, setToCourse] = React.useState(false);
  const [toUs, setToUs] = React.useState(false);
  const [navbarColor, setNavbarColor] = React.useState("navbar-transparent");
  const [navbarCollapse, setNavbarCollapse] = React.useState(false);

  const toggleNavbarCollapse = () => {
    setNavbarCollapse(!navbarCollapse);
    document.documentElement.classList.toggle("nav-open");
  };
  const routeChange =()=> {
    setToCourse(!toCourse);
  };
  const usChange =()=> {
    setToUs(!toUs);
  };
  

  React.useEffect(() => {
    
    const updateNavbarColor = () => {
      if (
        document.documentElement.scrollTop > 299 ||
        document.body.scrollTop > 299
      ) {
        setNavbarColor("");
      } else if (
        document.documentElement.scrollTop < 300 ||
        document.body.scrollTop < 300
      ) {
        setNavbarColor("navbar-transparent");
      }
    };

    window.addEventListener("scroll", updateNavbarColor);

    return function cleanup() {
      window.removeEventListener("scroll", updateNavbarColor);
    };
  });
  return (
    
    <Navbar className={classnames("fixed-top", navbarColor)} expand="lg">
      {toCourse ? <Redirect to="/course-page"/> :null}
      
      <Container>
      {toUs ? <Redirect to="/about-us"/> :null}
        <div className="navbar-translate">
          <NavbarBrand
            data-placement="bottom"
            title="Compass Education"
          >
            
            <div className="ml-auto mr-auto" md="8">
                <img alt="..." src={require("assets/img/compass.png")} />
            </div>
          </NavbarBrand>
          <button
            aria-expanded={navbarCollapse}
            className={classnames("navbar-toggler navbar-toggler", {
              toggled: navbarCollapse
            })}
            onClick={toggleNavbarCollapse}
          >
            <span className="navbar-toggler-bar bar1" />
            <span className="navbar-toggler-bar bar2" />
            <span className="navbar-toggler-bar bar3" />
          </button>
        </div>
        <Collapse
          className="justify-content-end"
          navbar
          isOpen={navbarCollapse}
        >
          <Nav navbar>  
          <NavItem>
          
            </NavItem>         
            <NavItem>
              <NavLink
                data-placement="bottom"
                href="https://www.facebook.com/compasseducationNL"
                target="_blank"
                title="Like us on Facebook"
              >
                <i className="fa fa-facebook-square" />
                <p className="d-lg-none">Facebook</p>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                data-placement="bottom"
                href="https://www.instagram.com/compasseducationthenetherlands/?utm_source=ig_profile_share&igshid=193vx2m8jk49u"
                target="_blank"
                title="Follow us on Instagram"
              >
                <i className="fa fa-instagram" />
                <p className="d-lg-none">Instagram</p>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                data-placement="bottom"
                href="https://www.schooleducationgateway.eu/en/pub/profile.cfm?do=organisation&id=31045"
                target="_blank"
                title="School Education Gateway"
              >
                <i className="fa fa-graduation-cap" />
                <p className="d-lg-none">schooleducationgateway</p>
              </NavLink>
            </NavItem>
            <NavItem>
              {
                //Buraya yeni component yazılıp redirect yapılacak
              }
              
            <Button color="info" outline type="button" className="px-4"
                onClick={routeChange}
                  >
                <i className="nc-icon nc-book-bookmark" color="info"  /> Course & Trainings
              </Button>
            </NavItem>
            <NavItem>
              {
                //Buraya yeni component yazılıp redirect yapılacak
              }
            <Button outline type="button" className="mr-1" color="info" 
                onClick={usChange}
                  >
                <i className="nc-icon nc-alert-circle-i" color="info" /> About Us
              </Button>
            </NavItem>
            
          </Nav>
        </Collapse>
      </Container>
    </Navbar>
  );
}

export default IndexNavbar;
