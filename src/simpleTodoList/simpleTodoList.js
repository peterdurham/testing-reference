import React, { useState } from "react";

function SimpleTodoList() {
  const [todos, setTodos] = useState([]);
  const [todo, setTodo] = useState("");

  function handleSubmit(event) {
    event.preventDefault();

    const newTodo = {
      id: new Date().getTime(),
      text: todo,
    };

    setTodos(todos.concat(newTodo));
    setTodo("");
  }
  return (
    <div>
      <h2>Simple Todo List</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="todo">Add Todo</label>
        <input
          type="text"
          id="todo"
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
      <div data-testid="todo-output">
        {todos.map((todo) => (
          <div aria-label="todo" key={todo.id}>
            {todo.text}
          </div>
        ))}
      </div>
    </div>
  );
}
export default SimpleTodoList;
