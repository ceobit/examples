import React from "react";
import {
  MdCheck,
  MdCheckBoxOutlineBlank,
  MdDeleteForever,
} from "react-icons/md";

import Task from "../Task/Task";

const TaskList = ({ tasks, completeTask }) => {
  return (
    <ul>
      {tasks.map((el, i) =>
        el.task ? (
          <li key={i}>
            <Task task={el.task} />
            {el.isDone ? (
              <div onClick={completeTask(el.id)}>
                <MdCheck />
              </div>
            ) : (
              <MdCheckBoxOutlineBlank />
            )}
            <MdDeleteForever />
          </li>
        ) : null
      )}
    </ul>
  );
};

export default TaskList;
