import React, { useEffect, useState } from "react";
import { useFetch } from "./0-useState/useFetch";
import { Hello } from "./Hello";
import { useForm } from "./userForm";

const App = () => {
  const [values, hadleChange] = useForm({
    email: "",
    password: "",
    firstName: ""
  });

  const [showHello, setShowHello] = useState(true);

  const [count, setCount] = useState(() =>
    JSON.parse(localStorage.getItem("count"))
  );
  const url = `http://numbersapi.com/${count}/trivia`;
  const { data, loading } = useFetch(url);

  useEffect(() => {
    localStorage.setItem("count", JSON.stringify(count));
  }, [count]);

  // useEffect(() => {
  //   const onMouseMove = e => {
  //     console.log(e);
  //   };
  //   window.addEventListener("mousemove", onMouseMove);
  //   return () => {
  //     window.removeEventListener("mousemove", onMouseMove);
  //   };
  // }, []);

  return (
    <div>
      <div>{!data ? "loading..." : data}</div>
      <div>count: {count}</div>
      <button onClick={() => setCount(c => c + 1)}>Increment count</button>
      <button
        onClick={() => {
          setShowHello(!showHello);
        }}
      >
        toggle
      </button>
      {showHello && <Hello />}
      <input
        name="email"
        placeholder="email"
        value={values.email}
        onChange={hadleChange}
      />
      <input
        name="firstName"
        placeholder="firstName"
        value={values.firstName}
        onChange={hadleChange}
      />
      <input
        type="password"
        name="password"
        placeholder="password"
        value={values.password}
        onChange={hadleChange}
      />
    </div>
  );
};

export default App;
