import React, { useState } from "react";

function expensiveInitialState() {
  return 10;
}
const App = () => {
  //const [count, setCount] = useState(() => expensiveInitialState());
  // const [count, setCount] = useState(10);
  const [count, setCount] = useState(10);
  const [count2, setCount2] = useState(10);

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>+</button>
      <button onClick={() => setCount2(count2 + 1)}>+</button>
      <button onClick={() => setCount(currentState => currentState + 1)}>
        +
      </button>
      <button onClick={() => setCount2(currentState => currentState + 1)}>
        +
      </button>
      <div>count 1: {count}</div>
      <div>count 1: {count2}</div>
    </div>
  );
};

export default App;
