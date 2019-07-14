import React, { useCallback, useState } from "react";
import Square from "./Square";

const App = () => {
  const [count, setCount] = useState(0);
  const favoriteNums = [7, 21, 37];

  const increment = useCallback(
    n => {
      setCount(c => c + n);
    },
    [setCount]
  );

  return (
    <div>
      {/* <Hello increment={increment} /> */}
      <div>Count: {count}</div>
      {favoriteNums.map(n => {
        return <Square increment={increment} n={n} key={n} />;
      })}
    </div>
  );
};

export default App;
