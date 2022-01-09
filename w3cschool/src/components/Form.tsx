import React, { useState } from "react";
const Form: React.FC<any> = (props: any) => {
  const [name, setName] = useState("Manoj");

  const changeMe = (evt: any) => {
    setName(evt.target.value);
    console.log(evt.target.value);
  };

  const formSubmitHandler = (e: any) => {
    e.preventDefault();
    console.log("Form Submit", e, name);
  };
  return (
    <div>
      <h2>React Form</h2>
      <form onSubmit={formSubmitHandler}>
        <label>Enter your name:</label>
        <input type="text" value={name} onChange={(e) => changeMe(e)} />
        <input type="submit" />
      </form>
      <MultiForm />
    </div>
  );
};

const MultiForm = () => {
  const [inputs, setInputs] = useState({
    username: "",
    age: "",
    address: "",
    car: "",
  });
  const cars = ["BMW", "AUdi", "Bench", "Hyundai", "Tata"];
  const submitHandler = (e: any) => {
    e.preventDefault();
    console.log("Multiple Form", e.target, inputs);
    // setInputs(e.target.value);
  };

  const changeHandler = (e: any) => {
    const name = e.target.name;
    const value = e.target.value;
    console.log(name, value);
    setInputs((values) => ({ ...values, [name]: value }));
  };
  return (
    <form onSubmit={submitHandler}>
      <label>Enter your name</label>
      <input
        type="text"
        name="username"
        value={inputs.username || ""}
        onChange={changeHandler}
      />
      <br />
      <label>Age</label>
      <input
        type="number"
        name="age"
        value={inputs.age || ""}
        onChange={changeHandler}
      />
      <label>Address</label>
      <textarea
        name="address"
        value={inputs.address || ""}
        onChange={changeHandler}
      />
      <label>My Car</label>
      <select name="car" value={inputs.car} onChange={changeHandler}>
        <option></option>
        {cars.map((car) => (
          <option key={car}>{car}</option>
        ))}
      </select>
      <input type="submit" />
    </form>
  );
};

export default Form;
