import React from "react";
import { Switch, Route } from "react-router-dom";
import Settings from "./Settings";
import Notification from "./Notification";
import Mytask from "./Mytask";
import Typography from "@material-ui/core/Typography";

const Home = () => {
  return (
    <>
      <Typography variant="h4">
        Use the Side Navigations to go to a page
      </Typography>
    </>
  );
};

const MainContent = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route exact path="/profile/settings" component={Settings}></Route>
        <Route
          exact
          path="/profile/notification"
          component={Notification}
        ></Route>
        <Route exact path="/mytask/:id" component={Mytask}></Route>
      </Switch>
    </div>
  );
};

export default MainContent;
