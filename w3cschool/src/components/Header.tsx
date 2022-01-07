import React from "react";
import EventCom from "./EventCom";
const Header: React.FC = (props: any) => {
  console.log("Props", props);
  // props.message = "hello world";
  const data = "hello world message";
  return (
    <header className="">
      <p>Hello React App</p>
      Learn React
      <EventCom message={data}></EventCom>
    </header>
  );
};

export default Header;
