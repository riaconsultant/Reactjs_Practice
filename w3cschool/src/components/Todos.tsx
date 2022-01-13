import { memo } from "react";

const Todos: React.FC<any> = ({ todos, addTodo }) => {
  return (
    <div>
      <label>Todos</label>
      {todos.map((todo: any, index: number) => {
        return <p key={index}>{todo}</p>;
      })}
      <button onClick={addTodo}>Add Todo</button>
    </div>
  );
};

export default memo(Todos);
