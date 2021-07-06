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
    }
  };

  completeTask = (id) => {
    //to finish task

    const { list } = this.state;
    const newTodoItems = list.map((item) => {
      if (item.id === id) {
        return {
          ...item,
          isDone: !item.isDone,
        };
      }
      return item;
    });
    this.setState({ list: newTodoItems });
  };

  removeTask = (id) => {
    const { list } = this.state;
    const newTodoItems = list.filter((item) => {
      return item.id !== id;
    });
    this.setState({ list: newTodoItems });
  };

  render() {
    return (
      <div className="container">
        <Input createTask={this.createTask} />
        <TaskList
          tasks={this.state.list}
          completeTask={this.completeTask}
          removeTask={this.removeTask}
        />
      </div>
    );
  }
}
