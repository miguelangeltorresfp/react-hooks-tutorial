# useCallback Hook

* Prevent a function for being created on every single render.
  Every time the component is redered the lambda increment function is recreated:

```bash
const App = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Hello increment={() => setCount(count + 1)} />
    </div>
  );
};
```

* It causes a problem when we use React.memo.
Memo compares props. The component is render only if them change.
We only want this component to render when increment changes, but this function is recreated on every single render.

```bash
export const Hello = React.memo(({ increment }) => {
  return (
    <div>
      <button onClick={increment}>+</button>
    </div>
  );
});
```

* We use useCallback for preventing the function pass down to change:

```bash
  const increment = useCallback(() => {
    setCount(c => c + 1);
  }, [setCount]);

  return (
    <div>
      <Hello increment={increment} />
      <div>Count: {count}</div>
    </div>
  );
```

* It's useful too when we call a useEffect hook that depends on a function:
  
```bash
  useEffect(() => {
    
  }, [increment]);
```

* We can pass parameters:
  
```bash
  const increment = useCallback(
    n => {
      setCount(c => c + n);
    },
    [setCount]
  );
```

* We can return something but it is not usual

* Loop over an array of numbers:

```bash
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
      <div>Count: {count}</div>
      {favoriteNums.map(n => {
        return <Square onClick={() => increment(n)} n={n} key={n} />;
      })}
    </div>
  );
};

export default App;
```

```bash
import React from "react";
import { useCountRenders } from "./useCountRenders";

const Square = React.memo(({ n, onClick }) => {
  useCountRenders();
  return (
    <div>
      <button onClick={onClick}>{n}</button>
    </div>
  );
});

export default Square;
```

* In this situation is better to move down the call of the increment function
  
```bash
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
```

```bash
import React from "react";
import { useCountRenders } from "./useCountRenders";

const Square = React.memo(({ n, increment }) => {
  useCountRenders();

  return (
    <div>
      <button onClick={() => increment(n)}>{n}</button>
    </div>
  );
});

export default Square;
```
