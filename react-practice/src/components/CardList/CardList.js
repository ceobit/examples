import React, { useContext } from "react";

import { AppContext } from "../../context/appContext";
import Card from "../Card/Card";

const CardList = () => {
  const [state, setState] = useContext(AppContext);

  console.log(state);
  return (
    <div>
      {state["countries"].length > 0 &&
        state["countries"].map(({ name, flag, population, capital }) => (
          <Card
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
