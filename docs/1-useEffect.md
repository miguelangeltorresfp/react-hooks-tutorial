# useEffect Hook

* Cuándo se ejecuta la función ?
  useEffect hace una comparación Shallow de las dependencias, de tal forma que si por ejemplo pasamos un objeto, siempre se modifica la referencia con lo que la función se ejecutará continuamente. En el segundo ejemplo sin embargo solo se llamará la función cuando cambien el valor de email y de password. En el tercer ejemplo solo se llamará la función la primera vez ya que no hay ninguna dependencia que varíe. En el último ejemplo de nuevo se llamaría siempre la función ya que no pasamos dependencias.
  
```bash
  useEffect(() => {
    console.log("render");
  }, values);

  useEffect(() => {
    console.log("render");
  }, [values.email, values.password]);

  useEffect(() => {
    console.log("render");
  }, []);

  useEffect(() => {
    console.log("render");
  });
```

* The clean up function:
  Se llama cada vez que el componente en el que esté definido se elimine del renderizado ( unmount ) o cada vez que una de las dependencias varíe. 

* Event Listener:

```bash
  useEffect(() => {
    const onMouseMove = e => {
      console.log(e);
    };
    window.addEventListener("mousemove", onMouseMove);
    return () => {
      window.removeEventListener("mousemove", onMouseMove);
    };
  }, []);
```

* Se pueden incluir todos los useEffect que se quiera y se llamarán en orden.

* Fetch from an API using custom hooks:

```bash
import { useEffect, useState } from "react";

export const useFetch = url => {
  const [state, setState] = useState({ data: null, loading: true });
  useEffect(() => {
    setState(state => ({ data: state.data, loading: true }));
    fetch(url)
      .then(x => x.text())
      .then(y => {
        setState({ data: y, loading: false });
      });
  }, [url]);

  return state;
};
```

* Persist the state using local storage

```bash
  const [count, setCount] = useState(() =>
    JSON.parse(localStorage.getItem("count"))
  );

  useEffect(() => {
    localStorage.setItem("count", JSON.stringify(count));
  }, [count]);
```
