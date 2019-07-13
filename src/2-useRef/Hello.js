import React, { useEffect, useState } from "react";
import { useFetch } from "./useFetch";

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

  return (
    <div>
      <div>{!data ? "loading..." : data}</div>
      <div>count: {count}</div>
      <button onClick={() => setCount(c => c + 1)}>Increment count</button>
    </div>
  );
};
