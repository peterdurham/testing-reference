import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);
  function increment(count) {
    setCount((count) => count + 1);
  }
  function decrement(count) {
    setCount((count) => count - 1);
  }

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
