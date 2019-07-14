import { useRef } from "react";

export const useCountRenders = () => {
  let renders = useRef(0);
  console.log("renders: ", renders.current++);
};
