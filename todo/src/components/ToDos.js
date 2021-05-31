import React, {useState} from 'react';

import style from './ToDos.module.css';
import List from './List';

const ToDos = (props) => {

  console.log(props);

  const { list, check, setList } = props;

  const remove = (itemToRemove) => {
    // itemToRemove has the id for that specific item
    const newArr = list.filter((item) => item.id !== itemToRemove);
    setList(newArr);
  };

  const userTodos = list.map((toDo, i) => (
    <li key={i} className={toDo.done ? style.opacity : null}>
      <input
        type="checkbox"
        defaultChecked={toDo.done}
        onChange={() => {
          check(toDo.id);
        }}
      />
      {toDo.title}
      <i
        onClick={() => {
          console.log(toDo.id);
          remove(toDo.id);
        }}
      >
        🗑
      </i>
    </li>
  ));
  return <ul>{userTodos}</ul>;
};


export default ToDos;