import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "routes/Home";
import Recruit from "routes/Recruit";
import About from "routes/About";
import Awards from "routes/Awards";
import ClubOfficers from "routes/ClubOfficers";
import Alumni from "routes/Alumni";
import ScrollToTop from "components/ScrollToTop";
import Admin from "routes/Admin";

const AppRouter = ({ userObj }) => {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <ScrollToTop />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/recruit">
          <Recruit />
        </Route>
        <Route exact path="/about">
          <About />
        </Route>
        <Route exact path="/awards">
          <Awards />
        </Route>
        <Route exact path="/clubofficers">
          <ClubOfficers />
        </Route>
        <Route exact path="/alumni">
          <Alumni />
        </Route>
        <Route exact path="/admin">
          <Admin userObj={userObj} />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default AppRouter;
