import React, { useState } from "react";

function expensiveInitialState() {
  return 10;
}
const App = () => {
  //const [count, setCount] = useState(() => expensiveInitialState());
  const [count, setCount] = useState(5);

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>+</button>
      <button onClick={() => setCount(currentCount => currentCount + 1)}>
        +
      </button>
      <div>{count}</div>
    </div>
  );
};

export default App;
