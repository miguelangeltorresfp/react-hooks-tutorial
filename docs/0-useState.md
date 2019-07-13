# useState Hook

* Para inicializar el valor se puede usar una función que solo se llamaría la primera vez y no cada vez que el componente sea renderizado

```bash
function expensiveInitialState() {
  return 10;
}
const App = () => {
  const [count, setCount] = useState(() => expensiveInitialState());
}
```

* As in states, you can define setCount in two different form:
The second way is a good way to avoid Race Condition things having two updates at the same time and the updates get overwitten.

```bash
<button onClick={() => setCount(count + 1)}>+</button>
<button onClick={() => setCount(currentCount => currentCount + 1)}>+</button>
```

* In hooks is a little bit different from states, if you modify only one property in an object state, the other properties don't keep the old value. It doesn't merge the old state into the new one. You have to include the other values using `...`
  
```bash
const App = () => {
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
```

* Es una buena constumbre asociar los estados en un mismo objeto si se van a actualizar todos al mismo tiempo, con la misma función, y por otro lado, es mejor dividirlos en estados separados si cada uno se va a actualizar de manera independiente.

Así serían separados:

```bash
const App = () => {
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
```

* We can create a custom hook to simplify for example the creation of input fields in a form:

```bash
import { useState } from "react";

export const useForm = initialValues => {
  const [values, setValues] = useState(initialValues);

  return [
    values,
    e => {
      setValues({
        ...values,
        [e.target.name]: e.target.value
      });
    }
  ];
};
```
