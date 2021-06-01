import React, { useContext } from "react";
import { useField } from "formik";

import classes from "./textArea.module.css";
import { AppContext } from "../../context/appContext";
import { MORSE_TABLE } from "../../constants";

const TextArea = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  const [state, setState] = useContext(AppContext);

  const getCodeByLetter = (object, value) => {
    let codedString = "";
    for (let letter of value) {
      codedString +=
        " " + Object.keys(object).find((key) => object[key] === letter);
    }
    return codedString.trim();
  };

  const handleChange = (e) => {
    const { value } = e.target;

    setState((prev) => ({
      ...prev,
      ...{ text: value },
      ...{ codedText: getCodeByLetter(MORSE_TABLE, value) },
    }));

    console.log("value", value);

    console.log(state);
  };

  return (
    <>
      <label htmlFor={props.name}>{label}</label>
      <textarea
        className={classes.textArea}
        {...field}
        {...props}
        onChange={handleChange}
      />
    </>
  );
};

export default TextArea;
