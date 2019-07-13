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
