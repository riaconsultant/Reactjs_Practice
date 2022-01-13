import { useReducer } from "react";

const initTodos = [
  {
    id: 1,
    title: "Todo 1",
    complete: false,
  },
  {
    id: 2,
    title: "Todo 2",
    complete: false,
  },
];

const reducer = (state: any, action: any) => {
  switch (action.type) {
    case "COMPLETE":
      return state.map((todo: any) => {
        if (todo.id === action.id) {
          return { ...todo, complete: !todo.complete };
        } else {
          return todo;
        }
      });

    default:
      return state;
  }
};

const ReducerExample = () => {
  const [todos, dispatch] = useReducer(reducer, initTodos);
  const handlercomplete = (todo: any) => {
    dispatch({ type: "COMPLETE", id: todo.id });
  };
  return (
    <div>
      <label>Todo </label>
      {todos.map((todo: any) => (
        <div>
          <label>
            <input
              type="checkbox"
              checked={todo.complete}
              onChange={() => handlercomplete(todo)}
            />
            {todo.title}
          </label>
        </div>
      ))}
    </div>
  );
};

export default ReducerExample;
