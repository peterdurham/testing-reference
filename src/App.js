import React from "react";
import "./App.css";

import Counter from "./counter/counter";
import TodoList from "./todoList/todoList";

function App() {
  return (
    <div className="App">
      <h1>Testing reference</h1>
      <Counter />
      <TodoList />
    </div>
  );
}

export default App;
