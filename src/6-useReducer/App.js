import React, { useReducer, useState } from "react";

function reducer(state, action) {
  switch (action.type) {
    case "add-todo":
      return {
        todos: [...state.todos, { text: action.text, completed: false }],
        todosCount: state.todosCount + 1
      };
    case "toggle-todo":
      return {
        todos: state.todos.map((t, idx) =>
          idx === action.idx ? { ...t, completed: !t.completed } : t
        ),
        todosCount: state.todosCount
      };
    default:
      return state;
  }
}

const App = () => {
  const [{ todos, todosCount }, dispatch] = useReducer(reducer, {
    todos: [],
    todosCount: 0
  });
  const [text, setText] = useState("");

  return (
    <div>
      <form
        onSubmit={e => {
          e.preventDefault();
          dispatch({ type: "add-todo", text });
          setText("");
        }}
      >
        <input value={text} onChange={e => setText(e.target.value)} />
      </form>
      {/* <pre>{JSON.stringify(todos, null, 2)}</pre> */}
      <div>number of todos: {todosCount}</div>
      {todos.map((t, idx) => (
        <div
          key={idx}
          onClick={() => dispatch({ type: "toggle-todo", idx })}
          style={{ textDecoration: t.completed ? "line-through" : "" }}
        >
          {t.text}
        </div>
      ))}
    </div>
  );
};

export default App;
