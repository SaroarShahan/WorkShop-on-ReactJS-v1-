import React from "react";
import { TodoItem, TodoTitle, Button } from "../styles/TodoItemStyle";

const Todo = ({ id, title, status, onHandleDelete, onHandleUpdate }) => {
  return (
    <TodoItem>
      <div>
        <TodoTitle>{status ? <del>{title}</del> : title}</TodoTitle>
      </div>
      <div>
        <Button delete onClick={() => onHandleDelete(id)}>
          X
        </Button>
        <Button onClick={() => onHandleUpdate(id)}>Toggle Done</Button>
      </div>
    </TodoItem>
  );
};

export default Todo;
