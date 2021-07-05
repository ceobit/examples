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

  render() {
    return <Input />;
  }
}
