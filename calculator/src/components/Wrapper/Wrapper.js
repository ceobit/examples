import React from "react";

import classes from "./wrapper.module.css";

const Wrapper = ({ children }) => {
  return (
    <>
      <header className={classes.header} />
      {children}
      <footer className={classes.footer} />
    </>
  );
};

export default Wrapper;
