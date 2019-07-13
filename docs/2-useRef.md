# useRef Hook

* Se puede guardar una referencia a cualquier cosa que queramos, objetos, funciones, enteros, et...

* Cuando se actualiza una referencia no se produce una re-renderización.

* Esto sería similar a usar instance variables in a class, que no harían que se llamara al método render. [link](https://stackoverflow.com/questions/25207703/instance-v-state-variables-in-react-js).

* El uso más importante de este hook es para asignar una referencia a un nodo de nuestros componentes y poder interactuar con ellos. Por ejemplo, para poner el foco en un campo determinado de un formulario.

* Otro uso es para checkear cuando se renderiza un componente.

```bash
  const renders = useRef(0);
  console.log("hello renders:", renders.current++);
```

* Another usecase is for preventing after fetch being called that change state in an unmounted component.
  
```bash
import { useEffect, useRef, useState } from "react";

export const useFetch = url => {
  const isCurrent = useRef(true);

  useEffect(() => {
    return () => {
      // Called when the component is going to unmount
      isCurrent.current = false;
    };
  }, []);

  const [state, setState] = useState({ data: null, loading: true });
  useEffect(() => {
    setState(state => ({ data: state.data, loading: true }));
    fetch(url)
      .then(x => x.text())
      .then(y => {
        setTimeout(() => {
          if (isCurrent.current) {
            setState({ data: y, loading: false });
          }
        }, 2000);
      });
  }, [url]);

  return state;
};
```

* We can store a reference to a function and call it wherever we like:

`const hello = useRef(() => console.log("hello"));`
