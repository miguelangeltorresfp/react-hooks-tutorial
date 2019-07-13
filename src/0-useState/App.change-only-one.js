import React, { useState } from "react";

function expensiveInitialState() {
  return 10;
}
const App = () => {
  //const [count, setCount] = useState(() => expensiveInitialState());
  // const [count, setCount] = useState(10);
  const [{ count, count2 }, setCount] = useState({ count: 10, count2: 20 });

  return (
    <div>
      <button onClick={() => setCount({ count: count + 1, count2: count2 })}>
        +
      </button>
      <button
        onClick={() =>
          setCount(currentState => ({
            ...currentState,
            count: currentState.count + 1
          }))
        }
      >
        +
      </button>
      <div>count 1: {count}</div>
      <div>count 1: {count2}</div>
    </div>
  );
};

export default App;
