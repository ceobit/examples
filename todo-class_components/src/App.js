import React from "react";
import "./App.css";
import Input from "./components/Input/input";
import TaskList from "./components/TaskList/TaskList";

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      list: [
        {
          id: 0,
          task: "",
          isDone: false,
        },
      ],
    };
  }

  createTask = (text, e) => {
    e.preventDefault();

    //add new task to list
    if (text) {
      this.setState((prev) => ({
        list: [
          ...prev.list,
          { id: prev.list.length, task: text.trim(), isDone: false },
        ],
      }));
      console.log(this.state);
    }
  };

  completeTask = (itemToCheck) => {
    //to finish task

    console.log(itemToCheck);
    const newArr = this.list.filter((item) => {
      if (item.id === itemToCheck) {
        // revers done
        item.isdone = !item.isdone;
      }
      return item;
    });
    this.setState(newArr);
  };

  render() {
    return (
      <>
        <Input createTask={this.createTask} />
        <TaskList tasks={this.state.list} completeTask={this.completeTask} />
      </>
    );
  }
}
