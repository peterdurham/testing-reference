import React from "react";

function TodoInput(props) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const { todo } = event.target;
    let todos = [...props.todos];

    const newTodo = {
      id: todos.length,
      text: todo.value,
    };

    todos.push(newTodo);
    props.setTodos(todos);
    todo.value = "";
  };

  return (
    <form onSubmit={(event) => handleSubmit(event)}>
      <label htmlFor="todo">Add Todo</label>
      <input id="todo" type="text" aria-label="todo-input" />
      <button type="submit">Submit</button>
    </form>
  );
}
export default TodoInput;
