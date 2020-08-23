import React, { useState } from "react";
import TodoInput from "./todoInput";
import TodoOutput from "./todoOutput";

function TodoList() {
  const [todos, setTodos] = useState([]);

  return (
    <div id="TodoList">
      <h2>Todo List</h2>
      <TodoInput todos={todos} setTodos={setTodos} />
      <TodoOutput todos={todos} />
    </div>
  );
}
export default TodoList;
