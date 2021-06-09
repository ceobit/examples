import React, { useContext, useEffect } from "react";
import axios from "axios";
import { Router } from "react-router-dom";

import "./App.css";
import Header from "./components/Header/Header";
import { AppContext } from "./context/appContext";
import { URL } from "./constants";
import { useRoutes } from "./routes";
import { history } from "./history";

function App() {
  const [state, setState] = useContext(AppContext);
  const routes = useRoutes();

  useEffect(() => {
    (async () => {
      const res = await axios.get(URL);
      const { data } = await res;

      setState({
        countries: data,
        currentCountry: "",
      });
    })();
  }, []);

  return (
    <>
      <Header />
      <Router history={history}>{routes}</Router>
      {/*<CardList />*/}
    </>
  );
}

export default App;
