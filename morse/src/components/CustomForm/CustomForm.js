import React, { useContext } from "react";
import { Form, Formik } from "formik";

import TextArea from "../TextArea/TextArea";
import { AppContext } from "../../context/appContext";

const CustomForm = () => {
  const [state, setState] = useContext(AppContext);

  return (
    <Formik
      initialValues={{
        text: "",
        morse: "",
      }}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 500);
      }}
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
      </Form>
    </Formik>
  );
};

export default CustomForm;
