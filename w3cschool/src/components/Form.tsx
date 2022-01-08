import React from "react";
const Form: React.FC<any> = (props: any) => {
  return (
    <div>
      <label>React Form</label>
      <form>
        <label>Enter your name:</label>
        <input type="text" />
      </form>
    </div>
  );
};

export default Form;
