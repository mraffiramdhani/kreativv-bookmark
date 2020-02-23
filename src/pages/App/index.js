import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import * as ROUTE from "../../constants/routes";

import LandingPage from "../Landing";
import LoginPage from "../Login";
import RegisterPage from "../Register";
import ForgotPasswordPage from "../ForgotPassword";

import Dashboard from "../../container/Dashboard";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path={ROUTE.LANDING} component={LandingPage} />
        <Route path={ROUTE.LOGIN} component={LoginPage} />
        <Route path={ROUTE.REGISTER} component={RegisterPage} />
        <Route path={ROUTE.FORGET_PASSWORD} component={ForgotPasswordPage} />
        <Dashboard />
      </Switch>
    </Router>
  );
};

export default App;
