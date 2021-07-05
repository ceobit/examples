import React from "react";
import { MdDelete, IoMdDoneAll } from "react-icons/fa";

class Task extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <div>{this.props.task}</div>;
  }
}

export default Task;
