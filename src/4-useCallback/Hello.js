import React from "react";
import { useCountRenders } from "./useCountRenders";

export const Hello = React.memo(({ increment }) => {
  useCountRenders();
  return (
    <div>
      <button onClick={() => increment(5)}>+</button>
    </div>
  );
});
