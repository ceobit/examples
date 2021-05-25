import React from 'react';

import classes from './button.module.css';

const Button = ({ name, handleTask }) => {

  return <button className={classes.Button} onClick={handleTask}>{name}</button>;
};

export default Button;

