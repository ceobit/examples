import React, { useContext } from "react";
import { Form, Formik } from "formik";

import TextArea from "../TextArea/TextArea";
import { AppContext } from "../../context/appContext";
import classes from "./customForm.module.css";
import play from "../../aux/playMorse";

const CustomForm = () => {
  const [state, setState] = useContext(AppContext);

  return (
    <Formik
      initialValues={{
        text: "",
        codedText: "",
      }}
      onSubmit={() => play(state.codedText)}
    >
      <Form>
        <TextArea
          label="Your text"
          name="yourText"
          rows="6"
          placeholder="Enter the text you want to encode here"
        />
        <TextArea
          label="Morse text"
          name="morseText"
          rows="6"
          placeholder={state.codedText ? state.codedText : "Encoded text"}
        />
        <button className={classes.btn} type="submit">
          Play
        </button>
      </Form>
    </Formik>
  );
};

export default CustomForm;
