import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";

export const useRoutes = () => {
  return (
    <Switch>
      <Route path="/" exact component={} />
      <Route path="/main" component={} />
      <Route path="/register" component={} />
      <Redirect from="*" to="/" />
    </Switch>
  );
};
