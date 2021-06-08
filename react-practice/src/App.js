import React, { useContext, useEffect } from "react";
import axios from "axios";

import "./App.css";
import Header from "./components/Header/Header";
import { AppContext } from "./context/appContext";
import { URL } from "./constants";
import CardList from "./components/CardList/CardList";

function App() {
  const [state, setState] = useContext(AppContext);

  useEffect(() => {
    (async () => {
      const res = await axios.get(URL);
      const { data } = await res;

      setState({
        countries: [...data],
        currentCountry: "",
      });
    })();
  }, []);

  return (
    <>
      <Header />
      <CardList />
    </>
  );
}

export default App;
