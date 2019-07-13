import React, { useEffect, useState } from "react";
import { Hello } from "./Hello";
import { useForm } from "./userForm";

const App = () => {
  const [values, hadleChange] = useForm({
    email: "",
    password: "",
    firstName: ""
  });

  const [showHello, setShowHello] = useState(true);

  useEffect(() => {
    console.log("render");
    return () => {
      console.log("unmount");
    };
  }, [values.password]);

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
