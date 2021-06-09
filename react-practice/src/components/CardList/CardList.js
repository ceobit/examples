import React, { useContext, useEffect } from "react";

import { AppContext } from "../../context/appContext";
import Card from "../Card/Card";
import classes from "./cardlist.module.css";
import axios from "axios";
import { URL } from "../../constants";

const CardList = () => {
  const [state, setState] = useContext(AppContext);

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
    <div className={classes.cards}>
      {state["countries"].length > 0 &&
        state["countries"].map(({ name, flag, population, capital }) => (
          <Card
            key={name}
            title={name}
            img={flag}
            population={population}
            capital={capital}
          />
        ))}
    </div>
  );
};

export default CardList;
