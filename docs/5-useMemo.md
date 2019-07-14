# useMemo Hook

* It's useful to cache functions that are computationally expensive.

* It's recommended start without using it and then if try it if something is being slow or recomputed too many times.

* Below, the function computeLongestWord is going to be recomputed in every rendered.
  We can put the function outside of the App component or make use of useCallback hook.

```bash
import React, { useMemo, useState } from "react";
import { useFetch } from "./useFetch";

const App = () => {
  const [count, setCount] = useState(0);
  const { data } = useFetch(
    "https://raw.githubusercontent.com/ajzbc/kanye.rest/master/quotes.json"
  );

  function computeLongestWord(arr) {
    if (!arr) {
      return [];
    }
    console.log("computing logest word");

    let longestWord = "";

    JSON.parse(arr).forEach(sentence =>
      sentence.split(" ").forEach(word => {
        if (word.length > longestWord.length) {
          longestWord = word;
        }
      })
    );

    return longestWord;
  }

  const longestWord = useMemo(() => computeLongestWord(data), [
    data,
    computeLongestWord
  ]);

  return (
    <div>
      <div>Count: {count}</div>
      <button onClick={() => setCount(count + 1)}>increment</button>
      <div>LongestWord : {longestWord}</div>
    </div>
  );
};

export default App;
```

* Solution 1 : This is the recommend solution if it is possible.

```bash
import React, { useMemo, useState } from "react";
import { useFetch } from "./useFetch";

function computeLongestWord(arr) {
  if (!arr) {
    return [];
  }
  console.log("computing logest word");

  let longestWord = "";

  JSON.parse(arr).forEach(sentence =>
    sentence.split(" ").forEach(word => {
      if (word.length > longestWord.length) {
        longestWord = word;
      }
    })
  );

  return longestWord;
}

const App = () => {
  const [count, setCount] = useState(0);
  const { data } = useFetch(
    "https://raw.githubusercontent.com/ajzbc/kanye.rest/master/quotes.json"
  );

  const longestWord = useMemo(() => computeLongestWord(data), [data]);

  return (
    <div>
      <div>Count: {count}</div>
      <button onClick={() => setCount(count + 1)}>increment</button>
      <div>LongestWord : {longestWord}</div>
    </div>
  );
};

export default App;
```

* Solution 2: But in this case as there are no dependencies is recommended to use solution 1 and put the function outside de component.

```bash
  const computeLongestWord = useCallback(arr => {
    if (!arr) {
      return [];
    }
    console.log("computing longest word");

    let longestWord = "";

    JSON.parse(arr).forEach(sentence =>
      sentence.split(" ").forEach(word => {
        if (word.length > longestWord.length) {
          longestWord = word;
        }
      })
    );

    return longestWord;
  }, []);
```
