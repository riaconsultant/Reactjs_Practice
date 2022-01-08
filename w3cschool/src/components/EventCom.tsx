import React, { useState } from "react";

const EventCom: React.FC<any> = ({ children, message }) => {
  const [msg, setMsg] = useState("test message");
  console.log("Event Com", message);
  const clickme = () => {
    console.log("Static message");
  };

  const clickParam = (arg: any) => {
    console.log(" Param Value", arg);
  };
  const clickParamObj = (a: any, arg: any) => {
    // console.log(" Param Value", a, "Event", arg);
    const aa = "Screen X - " + arg.screenX + " Screen Y - " + arg.screenY;
    console.log(aa);
    setMsg(aa);
  };
  return (
    <div>
      <label>{message}</label> -- {msg} <br />
      <button onClick={clickme}>Click Static</button>
      <br />
      <button onClick={() => clickParam("param")}>
        Click Dynamic Parameter
      </button>
      <br />
      <button onClick={(event) => clickParamObj("param", event)}>
        Click Dynamic Parameter Object
      </button>
    </div>
  );
};

export default EventCom;
