import React, { useState } from "react";
import Todo from "../components/Todo";

const Todos = () => {
  const [todos, setTodos] = useState(["Todo 1", "Todo 2"]);
  const [count, setCount] = useState(0);
  const increment = () => {
    setCount((c) => c + 1);
    setTodos((c: any) => {
      return [...c, `Todo ${count}`];
    });
  };
  return (
    <div>
      <label>Todo</label>
      <Todo todoc={todos} />
      <hr />
      <div>
        Count: {count}
        <button onClick={increment}>+</button>
      </div>
    </div>
  );
};

export default Todos;
