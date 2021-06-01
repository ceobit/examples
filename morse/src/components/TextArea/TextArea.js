import React, { useContext } from "react";
import { useField } from "formik";

import classes from "./textArea.module.css";
import { AppContext } from "../../context/appContext";
import { MORSE_TABLE } from "../../constants";

const TextArea = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  const [state, setState] = useContext(AppContext);

  const getCodeByLetter = (object, value) => {
    return Object.keys(object).find((key) => object[key] === value);
  };

  const handleChange = (e) => {
    const { value } = e.target;

    setState((prev) => ({
      ...prev,
      ...{ text: [...prev["text"], value] },
      ...{
        codedText: [...prev["codedText"], getCodeByLetter(MORSE_TABLE, value)],
      },
    }));
  };

  console.log(state);

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
