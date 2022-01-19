import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Dishes from "./Components/Dishes"

function Routes() {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/login">
        <Login />
      </Route>
      <Route exact path="/Dishes">
        <Dishes/>
        </Route>
    </Switch>
  );
}
export default Routes;
