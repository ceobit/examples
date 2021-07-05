import React from "react";

class Input extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      text: "",
    };
  }

  handleInput = (e) => {
    const { value } = e.target;
    this.setState({ text: value });
  };

  render() {
    return (
      <form>
        <input
          type="text"
          value={this.state.text}
          onChange={this.handleInput}
        />
      </form>
    );
  }
}

Input.propTypes = {};

export default Input;
