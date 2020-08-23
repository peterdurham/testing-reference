import React, { useState } from "react";

function TodoList() {
  const [todos, setTodos] = useState([]);

  function handleSubmit(event) {
    event.preventDefault();
    const { todo } = event.target;
    let currentTodos = [...todos];

    currentTodos.push({
      text: todo.value,
      id: new Date().getTime(),
    });
    setTodos(currentTodos);
    todo.value = "";
  }
  return (
    <div>
      <h2>Todo List</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="todo">Add Todo</label>
        <input type="text" id="todo" />
        <button type="submit">Submit</button>
      </form>
      <div>
        {todos.map((todo) => (
          <div key={todo.id}>{todo.text}</div>
        ))}
      </div>
    </div>
  );
}
export default TodoList;
