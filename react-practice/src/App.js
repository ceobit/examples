import React from "react";
import { Router } from "react-router-dom";

import "./App.css";
import Header from "./components/Header/Header";
import { useRoutes } from "./routes";
import { history } from "./history";

function App() {
  const routes = useRoutes();

  return (
    <>
      <Header />
      <Router history={history}>{routes}</Router>
    </>
  );
}

export default App;
