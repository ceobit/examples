import React from "react";

import style from "./input.module.css";

class Input extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      text: "",
    };
  }

  // local state for Form
  handleInput = (e) => {
    const { value } = e.target;
    this.setState({ text: value });
  };

  render() {
    return (
      <form
        className={style.form}
        onSubmit={(e) => {
          this.props.createTask(this.state.text, e);
          this.setState({ text: "" });
        }}
      >
        <input
          className={style.input}
          type="text"
          value={this.state.text}
          onChange={this.handleInput}
        />
        <button type="submit">Create task</button>
      </form>
    );
  }
}

Input.propTypes = {};

export default Input;
