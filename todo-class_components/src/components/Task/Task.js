import React from "react";
import {
  MdCheck,
  MdCheckBoxOutlineBlank,
  MdDeleteForever,
} from "react-icons/md";
import classnames from "classnames";

import style from "./task.module.css";

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
      <div
        className={
          this.props.el.isDone
            ? classnames(style.task, style.completeTask)
            : [style.task]
        }
      >
        {this.props.el.task}
        <div>
          {this.props.el.isDone ? (
            <span onClick={this.onDone} className={style.icon}>
              <MdCheck />
            </span>
          ) : (
            <span onClick={this.onDone} className={style.icon}>
              {" "}
              <MdCheckBoxOutlineBlank />
            </span>
          )}
          <span onClick={this.onRemove} className={style.icon}>
            <MdDeleteForever />
          </span>
        </div>
      </div>
    );
  }
}

export default Task;
