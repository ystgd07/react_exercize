import React, { useCallback, useRef, useState } from "react";
import "./App.css";
import Button from "./components/UI/Button/Button";
import DemoOuput from "./components/Demo/DemoOuput";
function App(props) {
  const [isValid, setIsValid] = useState(false);
  const [allowToggle, setAllowToggle] = useState(false);

  const addOnclickHandler = useCallback(() => {
    if (allowToggle) {
      setIsValid((prev) => !prev);
    }
  }, [allowToggle]);
  const allowToggleHandler = () => {
    setAllowToggle(!allowToggle);
  };
  return (
    <div className="app">
      <h1>Hi there!</h1>
      <DemoOuput show={isValid}>hi</DemoOuput>
      <Button onClick={allowToggleHandler}>Allow Toggling</Button>
      <Button onClick={addOnclickHandler}>Toggle click</Button>
    </div>
  );
}

export default App;
