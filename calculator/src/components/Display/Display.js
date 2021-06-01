import React, { useContext } from "react";

import { AppContext } from "../../context/appContext";
import classes from "./display.module.css";

const Display = () => {
  const [state, setState] = useContext(AppContext);
  return (
    <div className={classes.monitor}>
      <div className={classes.expression}>{state.expression}</div>
      <div className={classes.result}>{state.result}</div>
    </div>
  );
};

export default Display;
