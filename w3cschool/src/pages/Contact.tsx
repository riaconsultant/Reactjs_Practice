import { useState, useEffect } from "react";

const Contact = () => {
  const [car, setCar] = useState({
    brand: "Ford",
    model: "Kite",
    year: 1968,
    color: "red",
  });

  const [count, setCount] = useState(0);
  const [counter, setCounter] = useState(0);
  const [calculation, setCalculation] = useState(0);
  /**
   * 1. No dependency passed -- useEffect(()=>{});
   * 2. An Empty Array --- useEffect(()=>{},[]);
   * 3. Props and state value -- useEffect(()=>{}, [props,state]);
   */
  useEffect(() => {
    let timer = setTimeout(() => {
      setCount((count) => count + 1);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    setCalculation(() => counter * 2);
  }, [counter]);

  const updateCar = () => {
    setCar((preState) => {
      console.log(preState);
      return { ...preState, color: "blue" };
    });
  };
  return (
    <div>
      <h1>Contact</h1>
      <label>useState and useEffect sample</label>
      <p>
        It is a {car.color} {car.model} from {car.year}
      </p>
      <button type="button" onClick={updateCar}>
        Blue
      </button>
      <h2>I've rendered {count} times!</h2>
      <button onClick={() => setCounter((c) => c + 1)}>+</button>
      <p>Calculation: {calculation}</p>
    </div>
  );
};

export default Contact;
