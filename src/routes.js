import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login";
import Preference from "./components/Preference";
import RestReg from "./components/RestaurantRegister";
import UserHome from "./components/UserHome";
import UserRegister from "./components/UserRegister";

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/login" exact component={Login} />
        <Route path="/user/register" exact component={UserRegister} />
        <Route path="/user/preference" exact component={Preference} />
        <Route path="/rest/register" exact component={RestReg}/>
        <Route path="/user/home" exact component={UserHome}/>
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;