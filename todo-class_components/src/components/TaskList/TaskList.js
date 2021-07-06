import React from "react";

import Task from "../Task/Task";
import style from "./taskList.module.css";

const TaskList = ({ tasks, completeTask, removeTask }) => {
  return (
    <ul className={style.list}>
      {tasks.map((el, i) =>
        el.task ? (
          <li key={i}>
            <Task el={el} completeTask={completeTask} removeTask={removeTask} />
          </li>
        ) : null
      )}
    </ul>
  );
};

export default TaskList;
