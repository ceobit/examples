import React, { useContext } from "react";

import { AppContext } from "../../context/appContext";
import Card from "../Card/Card";
import classes from "./cardlist.module.css";

const CardList = () => {
  const [state, setState] = useContext(AppContext);

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
