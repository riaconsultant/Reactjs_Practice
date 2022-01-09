import React, { memo } from "react";
import "./../styles/my-sass.scss";
const Todo = (props: any) => {
  console.log("Child Component", props.todoc);
  const style = {
    color: "white",
    backgroundColor: "DodgerBlue",
    padding: "5px",
    cursor: "pointer",
  };

  const clickHandler = (e: any) => {
    console.log("Para", e.target.textContent);
  };
  return (
    <div>
      <h1
        style={{
          backgroundColor: "lightblue",
          border: "1px solid #ccc",
        }}
      >
        My Todo
      </h1>
      {props.todoc.map((todo: string, index: number) => {
        return (
          <p style={style} key={index} onClick={clickHandler}>
            {todo}
          </p>
        );
      })}
    </div>
  );
};

export default memo(Todo);
