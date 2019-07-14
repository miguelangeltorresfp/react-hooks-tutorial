import React from "react";
import { useCountRenders } from "./useCountRenders";

const Square = React.memo(({ n, increment }) => {
  useCountRenders();

  return (
    <div>
      <button onClick={() => increment(n)}>{n}</button>
    </div>
  );
});

export default Square;
