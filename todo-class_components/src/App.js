import React from "react";
import "./App.css";
import Input from "./components/Input/input";

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      list: [],
    };
  }

  createTask = (text, e) => {
    e.preventDefault();
    this.setState((prev) => ({
      list: [...prev.list, text],
    }));

  };

  render() {
    return <Input createTask={this.createTask} />;
  }
}
