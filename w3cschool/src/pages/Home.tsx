import useFetch from "../hooks/useFecth";

const Home = () => {
  const [data] = useFetch("https://jsonplaceholder.typicode.com/todos");

  const changeHandler = (todo: any) => {
    console.log("todo app", todo);
  };
  return (
    <div>
      <h1>Home</h1>
      {data &&
        data.map((todo: any) => {
          return (
            <div key={todo.id}>
              <label>
                <input
                  type="checkbox"
                  checked={todo.completed}
                  onChange={(todo) => changeHandler(todo)}
                />
                {todo.completed ? <b>{todo.title}</b> : <u>{todo.title}</u>}
              </label>
            </div>
          );
        })}
    </div>
  );
};

export default Home;
