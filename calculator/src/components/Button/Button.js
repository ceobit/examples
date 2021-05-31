import React, { useContext } from "react";

import { AppContext } from "../../context/AppContext";
import classes from "./button.module.css";

const Button = ({ number, className }) => {
  const [state, setState] = useContext(AppContext);

  const handleClick = (e) => {};

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
