import React from "react";
import Todo from "./todo";

function TodoOutput(props) {
  return (
    <div data-testid="todo-output">
      {props.todos.map((todo) => (
        <Todo key={todo.id} todo={todo} />
      ))}
    </div>
  );
}
export default TodoOutput;
