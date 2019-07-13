import React, { useRef, useState } from "react";
import { Hello } from "./Hello";
import { useForm } from "./userForm";

const App = () => {
  const [values, hadleChange] = useForm({
    email: "",
    password: "",
    firstName: ""
  });

  const [showHello, setShowHello] = useState(true);

  const inputRef = useRef();

  // useEffect(() => {
  //   const onMouseMove = e => {
  //     console.log(e);
  //   };
  //   window.addEventListener("mousemove", onMouseMove);
  //   return () => {
  //     window.removeEventListener("mousemove", onMouseMove);
  //   };
  // }, []);

  // useLayoutEffect(() => {
  //   console.log(inputRef.current.getBoundingClientRect());
  // }, []);

  return (
    <div>
      <button
        onClick={() => {
          setShowHello(!showHello);
        }}
      >
        toggle
      </button>
      {showHello && <Hello />}
      <input
        ref={inputRef}
        name="email"
        placeholder="email"
        value={values.email}
        onChange={hadleChange}
      />
      <button
        onClick={() => {
          //console.log(inputRef.current);
          inputRef.current.focus();
        }}
      >
        focus
      </button>
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
