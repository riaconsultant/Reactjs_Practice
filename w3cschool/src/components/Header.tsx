import React from "react";
import { Condition, EventCom, List, Form } from "./";

const Header: React.FC = (props: any) => {
  console.log("Props", props);
  // props.message = "hello world";
  const data = "hello world message";
  return (
    <header className="">
      <p>Hello React App</p>
      Learn React
      <EventCom message={data} />
      <Condition isGoal={false} />
      <hr />
      <List />
      <Form />
    </header>
  );
};

export default Header;
