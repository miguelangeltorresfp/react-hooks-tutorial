# REACT HOOKS TUTORIAL BY BEN AWAD

[youtube-link](https://www.youtube.com/watch?v=9xhKH43llhU&list=PLN3n1USn4xlmyw3ebYuZmGp60mcENitdM)

## 1 - USESTATE

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


---------------------------------------------------------------------------------

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
