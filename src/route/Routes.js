import React from "react";
import Login from "../container/Login";
import Home from "../container/Home";
import Product from "../container/Product";
import Events from "../container/Events";
import Users from "../container/Users";
import Profile from "../container/Profile";
import ViewResult from "../container/ViewResult";
import AddEvent from "../container/AddEvent";
import Notification from "../container/Notification";
import News from "../container/News";
import AddNews from "../container/AddNews";

import AddNotification from "../container/AddNotification";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
const Routes = () => {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/" exact component={Login} />
          <Route path="/home" exact component={Home} />
          <Route path="/product" component={Product} />
          <Route path="/events" component={Events} />
          <Route path="/users" component={Users} />
          <Route path="/profile" component={Profile} />
          <Route path="/viewresult/:id" component={ViewResult} />
          <Route path="/addevent" component={AddEvent} />
          <Route path="/notification" component={Notification} />
          <Route path="/addnotification" component={AddNotification} />
          <Route path="/news" component={News} />
          <Route path="/addnews" component={AddNews} />
        </Switch>
      </Router>
    </>
  );
};

export default Routes;
