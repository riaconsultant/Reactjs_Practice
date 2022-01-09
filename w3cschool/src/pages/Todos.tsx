import React, { useState } from "react";
import Todo from "../components/Todo";
import styles from "./../styles/style.module.css";
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
        <button className={styles.bigBtn} onClick={increment}>
          +
        </button>
      </div>
    </div>
  );
};

export default Todos;
