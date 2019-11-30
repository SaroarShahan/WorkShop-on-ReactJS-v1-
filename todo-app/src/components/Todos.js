import React, { Component } from "react";
import Todo from "./Todo";

class Todos extends Component {
  state = {
    todo: "",
    todos: [
      { id: 1, title: "You have to learn React", status: false },
      { id: 2, title: "You have to learn JS Basic", status: false }
    ]
  };

  handleChange = e => {
    const { value, name } = e.target;
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();

    const { todo, todos } = this.state;
    const newTodos = [
      ...todos,
      { id: todos.length + 1, title: todo, status: false }
    ];

    this.setState({ todos: newTodos, todo: "" });
  };

  handleDelete = id => {
    const { todos } = this.state;
    const filteredTodos = todos.filter(todo => todo.id !== id);

    this.setState({ todos: filteredTodos });
  };

  handleUpdate = id => {
    const { todos } = this.state;

    const newTodos = todos.map(todo => {
      if (todo.id === id) {
        return {
          ...todo,
          status: !todo.status
        };
      } else {
        return todo;
      }
    });

    this.setState({ todos: newTodos });
  };

  render() {
    const { todos, todo } = this.state;

    console.log(todos);

    return (
      <div>
        <form>
          <input
            placeholder="Enter the task"
            name="todo"
            value={todo}
            onChange={this.handleChange}
          />
          <button onClick={this.handleSubmit}>Add</button>
        </form>

        {todos.map(todo => (
          <Todo
            key={todo.id}
            id={todo.id}
            title={todo.title}
            status={todo.status}
            onHandleDelete={this.handleDelete}
            onHandleUpdate={this.handleUpdate}
          />
        ))}
      </div>
    );
  }
}

export default Todos;
