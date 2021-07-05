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
        <button
          type="submit"
          onClick={(e) => this.props.createTask(this.state.text, e)}
        >
          Create task
        </button>
      </form>
    );
  }
}

Input.propTypes = {};

export default Input;
