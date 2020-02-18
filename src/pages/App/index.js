import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import * as ROUTE from "../../constants/routes";

import LandingPage from "../Landing";
import LoginPage from "../Login";
import RegisterPage from "../Register";
import HomePage from "../Home";
import AccountPage from "../Account";
import ForgotPasswordPage from "../ForgotPassword";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path={ROUTE.LANDING} component={LandingPage} />
        <Route path={ROUTE.LOGIN} component={LoginPage} />
        <Route path={ROUTE.REGISTER} component={RegisterPage} />
        <Route path={ROUTE.HOME} component={HomePage} />
        <Route path={ROUTE.ACCOUNT} component={AccountPage} />
        <Route path={ROUTE.FORGET_PASSWORD} component={ForgotPasswordPage} />
      </Switch>
    </Router>
  );
};

export default App;
