import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login";
import RestReg from "./components/RestaurantRegister";
import UserRegister from "./components/UserRegister";

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/login" exact component={Login} />
        <Route path="/user/register" exact component={UserRegister} />
        <Route path="/rest/register" exact component={RestReg}/>
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;