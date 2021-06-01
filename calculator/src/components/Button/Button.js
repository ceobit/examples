import React, { useContext } from "react";

import { AppContext } from "../../context/appContext";
import classes from "./button.module.css";
import initialState from "../../data/initialState";

const Button = ({ number, className }) => {
  const [state, setState] = useContext(AppContext);

  const handleClick = (e) => {
    const { textContent: value } = e.target;

    // RESET ALL
    if (value === "C") {
      setState(initialState);
    }

    // CALCULATE
    if (value === "=") {
      setState((prev) => ({
        ...prev,
        ...{ ["result"]: eval(state["expression"].join("")) },
      }));
    }

    console.log(eval("5-5+2*10"));

    // ADD NUMBERS AND SIGNS TO STATE
    if (value !== "=" && value !== "C") {
      setState((prev) => ({
        ...prev,
        ...{ expression: [...prev["expression"], value] },
      }));
    }
  };

  let classNames = [classes.btn, classes[`${className}`]]
    .filter(Boolean)
    .join(" ")
    .trim();

  return (
    <div className={classNames} onClick={handleClick}>
      {number}
    </div>
  );
};

export default Button;
