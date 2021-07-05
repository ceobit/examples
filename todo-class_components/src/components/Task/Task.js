import React from "react";
import {
  MdCheck,
  MdCheckBoxOutlineBlank,
  MdDeleteForever,
} from "react-icons/md";

class Task extends React.Component {
  constructor(props) {
    super(props);
  }

  onDone = () => {
    this.props.completeTask(this.props.el.id);
  };

  onRemove = () => {
    this.props.removeTask(this.props.el.id);
  };

  render() {
    return (
      <div>
        {this.props.el.task}
        {this.props.el.isDone ? (
          <MdCheck />
        ) : (
          <div onClick={this.onDone}>
            {" "}
            <MdCheckBoxOutlineBlank />
          </div>
        )}
        <div onClick={this.onRemove}>
          <MdDeleteForever />
        </div>
      </div>
    );
  }
}

export default Task;
