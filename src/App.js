import React from "react";
import "./App.css";

import Counter from "./counter/counter";
import SimpleTodoList from "./simpleTodoList/simpleTodoList";

function App() {
  return (
    <div className="App">
      <h1>Testing reference</h1>
      <Counter />
      <SimpleTodoList />
    </div>
  );
}

export default App;
