import React, { useContext } from "react";
import { Form, Formik } from "formik";
import * as Yup from "yup";

import TextArea from "../TextArea/TextArea";
import { AppContext } from "../../context/appContext";
import classes from "./customForm.module.css";
import play from "../../aux/playMorse";
import { MORSE_TABLE } from "../../constants";

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
          name="text"
          rows="6"
          value={state.text}
          placeholder="Enter the text you want to encode here"
        />
        <TextArea
          readOnly={true}
          label="Morse text"
          name="codedText"
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
