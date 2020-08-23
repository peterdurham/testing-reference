import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);
  const increment = (count) => {
    setCount((count) => count + 1);
  };
  const decrement = (count) => {
    setCount((count) => count - 1);
  };

  return (
    <div>
      <h2>Counter</h2>
      <button onClick={decrement}>-</button>
      <p>{count}</p>
      <button onClick={increment}>+</button>
    </div>
  );
}
export default Counter;
