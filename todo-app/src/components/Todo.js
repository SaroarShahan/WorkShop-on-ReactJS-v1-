import React from "react";

const Todo = ({ id, title, onHandleDelete }) => {
  return (
    <div style={{ display: "flex" }}>
      <h2>{title}</h2>
      <button onClick={() => onHandleDelete(id)}>X</button>
    </div>
  );
};

export default Todo;
