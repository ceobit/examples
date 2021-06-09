import React from "react";
import { Route, Switch } from "react-router-dom";
import CountryDescription from "./components/CountryDescription/CountryDescription";
import CardList from "./components/CardList/CardList";

export const useRoutes = () => {
  console.log("here");
  return (
    <Switch>
      <Route path="/" exact component={CardList} />
      <Route
        path="country/:id"
        render={(props) => {
          return <CountryDescription {...props} />;
        }}
      />
      />
    </Switch>
  );
};
