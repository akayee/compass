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
import ReactDOM from "react-dom";
import { HashRouter, Route, Redirect, Switch } from "react-router-dom";

// styles
import "assets/css/bootstrap.min.css";
import "assets/scss/paper-kit.scss";
import "assets/demo/demo.css";
// pages
import Index from "views/Index.js";
import NucleoIcons from "views/NucleoIcons.js";
import LandingPage from "views/examples/LandingPage.js";
import ProfilePage from "views/examples/ProfilePage.js";
import RegisterPage from "views/examples/RegisterPage.js";
import AdminPage from "views/examples/AdminPage";
// others

ReactDOM.render(
  <HashRouter basename="/" >
    <Switch>
      <Route exact  path="/home" render={props => <Index {...props} />} />
      <Route
      exact
        path="/course-page"
        render={props => <LandingPage {...props} />}
      />
      <Route
      exact
        path="/about-us"
        render={props => <ProfilePage {...props} />}
      />
      <Route
      exact
        path="/register-page"
        render={props => <RegisterPage {...props} />}
      />
      <Route
      exact
        path="/admin-page"
        render={props => <AdminPage {...props} />}
      />
      <Redirect from="/" to="/home" />
    </Switch>
  </HashRouter>,
  document.getElementById("root")
);
