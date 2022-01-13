import React, { useCallback, useState } from "react";
import Todos from "./Todos";

const CallbackExample: React.FC = () => {
  const [count, setCount] = useState(0);
  const [todos, setTodos] = useState([""]);

  const increment = () => {
    setCount((c) => c + 1);
  };

  // const addTodo = () => {
  //   setTodos((t) => {
  //     return [...t, "New Todo"];
  //   });
  // };

  const addTodo = useCallback(() => {
    setTodos((t) => {
      return [...t, "New Todo"];
    });
  }, [todos]);
  return (
    <div>
      <label>Callback Example -- Todo</label>
      <Todos todos={todos} addTodo={addTodo} />
      <hr />
      <div>
        Count: {count}
        <button onClick={increment}>+</button>
      </div>
    </div>
  );
};

export default CallbackExample;
