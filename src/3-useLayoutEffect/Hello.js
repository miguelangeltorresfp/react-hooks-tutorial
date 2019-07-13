import React, { useEffect, useState } from "react";
import { useFetch } from "./useFetch";
import { useMeasure } from "./useMeasure";

export const Hello = () => {
  //const renders = useRef(0);
  //console.log("hello renders: ", renders.current++);

  const [count, setCount] = useState(() =>
    JSON.parse(localStorage.getItem("count"))
  );
  const url = `http://numbersapi.com/${count}/trivia`;
  const { data, loading } = useFetch(url);
  useEffect(() => {
    localStorage.setItem("count", JSON.stringify(count));
  }, [count]);

  // const [rect, setRect] = useState({});
  // const divRef = useRef();

  // useLayoutEffect(() => {
  //   //console.log(divRef.current.getBoundingClientRect());
  //   setRect(divRef.current.getBoundingClientRect());
  // }, [data]);

  const [rect, divRef] = useMeasure(data);

  return (
    <div>
      <div style={{ display: "flex" }}>
        <div ref={divRef}>{!data ? "loading..." : data}</div>
      </div>
      <pre>{JSON.stringify(rect, null, 2)}</pre>
      <div>count: {count}</div>
      <button onClick={() => setCount(c => c + 1)}>Increment count</button>
    </div>
  );
};
