import React from "react";
import { useForm } from "../userForm";

const App = () => {
  const [values, hadleChange] = useForm({ email: "", password: "" });

  return (
    <div>
      <input name="email" value={values.email} onChange={hadleChange} />
      <input
        type="password"
        name="password"
        value={values.password}
        onChange={hadleChange}
      />
    </div>
  );
};

export default App;
