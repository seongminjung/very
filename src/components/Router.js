import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "routes/Home";
import Recruit from "routes/Recruit";
import About from "routes/About";
import Alumni from "routes/Alumni";

const AppRouter = ({ userObj, refreshUser }) => {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
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
        <Route exact path="/alumni">
          <Alumni />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default AppRouter;
