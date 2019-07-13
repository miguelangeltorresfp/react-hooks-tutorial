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
        }, 10);
      });
  }, [url]);

  return state;
};
