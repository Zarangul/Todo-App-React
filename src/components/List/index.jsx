import React from "react";

function List({ setTodos, todos }) {
  const handleDelete = (id) => {
    setTodos(todos.filter((item) => item.id !== id));
  };
  return (
    <div>
      {todos.map((todo) => {
        return (
          <h2 key={todo.id}>
            {todo.title} <span onClick={() => handleDelete(todo.id)}>Delete</span>
          </h2>
        );
      })}
    </div>
  );
}

export default List;
