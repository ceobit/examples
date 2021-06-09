import React from "react";
import { Route, Switch } from "react-router-dom";
import CardList from "./components/CardList/CardList";
import CountryDescription from "./components/CountryDescription/CountryDescription";

export const useRoutes = () => {
  return (
    <Switch>
      <Route path="/" exact component={CardList} />
      <Route path="/country/:name" component={CountryDescription} />
    </Switch>
  );
};
