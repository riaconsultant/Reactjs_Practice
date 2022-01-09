import React, { memo } from "react";
const Todo = (props: any) => {
  console.log("Child Component", props.todoc);
  return (
    <div>
      <h1>My Todo</h1>
      {props.todoc.map((todo: string, index: number) => {
        return <p key={index}>{todo}</p>;
      })}
    </div>
  );
};

export default memo(Todo);
