import { useEffect, useRef, useState } from "react";
import ReducerExample from "./ReducerExample";

const RefExample = () => {
  const [inputValue, setInputValue] = useState("");
  const count = useRef(0);
  const inputRef = useRef();
  const prevInput = useRef("");
  useEffect(() => {
    count.current = count.current + 1;
  });

  useEffect(() => {
    prevInput.current = inputValue;
  }, [inputValue]);
  const focusHandler = () => {};
  return (
    <div>
      <i>Ref Example</i>
      <br />
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        // ref={inputRef}
      />
      <button onClick={focusHandler}> Focus Input </button>
      <h3>Render Count: {count.current}</h3>
      <h3>Previous Value: {prevInput.current}</h3>
      <h3>Current Value: {inputValue}</h3>
      <ReducerExample />
    </div>
  );
};

export default RefExample;
