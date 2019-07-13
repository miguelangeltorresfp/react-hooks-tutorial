# useLayoutEffect Hook

* Key : The signature is identical to useEffect, but it fires synchronously after all Dom mutations
* key : It's recommended starting with useEffect first and only trying useLayoutEffect if that causes a problem.

* It's useful por example to measure the size of an Dom element.
  
```bash
  useLayoutEffect(() => {
    console.log(inputRef.current.getBoundingClientRect());
  }, []);
```

Even dynamic ones:

```bash
  const [rect, setRect] = useState({});
  const divRef = useRef();

  useLayoutEffect(() => {
    //console.log(divRef.current.getBoundingClientRect());
    setRect(divRef.current.getBoundingClientRect());
  }, [data]);

  return (
    <div>
      <div style={{ display: "flex" }}>
        <div ref={divRef}>{!data ? "loading..." : data}</div>
      </div>
      <pre>{JSON.stringify(rect, null, 2)}</pre>
    </div>
  );
```

* We can create a custom hook to measure the elements

```bash
import { useLayoutEffect, useRef, useState } from "react";

export const useMeasure = deps => {
  const [rect, setRect] = useState({});
  const myRef = useRef();

  useLayoutEffect(() => {
    //console.log(divRef.current.getBoundingClientRect());
    setRect(myRef.current.getBoundingClientRect());
  }, [myRef, deps]);

  return [rect, myRef];
};

```

