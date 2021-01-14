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
/*eslint-disable*/
import React from "react";

// reactstrap components
import { Row, Container } from "reactstrap";

function DemoFooter() {
  return (
    <footer className="footer footer-black footer-white">
      <Container>
        <Row>
          <nav className="footer-nav">
            <ul>
              <li>
                <p> Our Social Media Accounts:</p>
                <a
                  href="https://www.facebook.com/compasseducationNL"
                  target="_blank"
                >
                 Facebook
                </a>
                <a
                  href="https://www.instagram.com/compasseducationthenetherlands/?utm_source=ig_profile_share&igshid=193vx2m8jk49u"
                  target="_blank"
                >
                  Instagram
                </a>
                <a
                  href="https://www.schooleducationgateway.eu/en/pub/profile.cfm?do=organisation&id=31045"
                  target="_blank"
                >
                  SchoolEducationGateway
                </a>
              </li>
              <li>
              <p>Compass Education</p>

              <p>The Netherlands</p>
              <p>Phone</p>
              <p>+31 6 11405870</p>
              <p>Email</p>
              <p>info@compasseducation.eu</p>

              <p>Training Course, Technical/Cultural Activities, Organisation</p>

              <p>   </p>
              </li>
              
            </ul>
          </nav>
          <div className="credits ml-auto">
            <span className="copyright">
              © {new Date().getFullYear()}, made with{" "}
              <i className="fa fa-heart heart" /> by Creative Tim
            </span>
          </div>
        </Row>
      </Container>
    </footer>
  );
}

export default DemoFooter;
