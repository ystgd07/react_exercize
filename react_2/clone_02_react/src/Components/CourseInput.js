import React, { useState } from "react";
import "./CourseInput.css";
import Button from "./Button";
function CourseInput(props) {
  const [enteredValue, setEnteredValue] = useState("");
  function goalInputChangeHandler(event) {
    setEnteredValue(event.target.value);
  }
  function formSubmitHandler(event) {
    event.preventDefault();
    props.onAddGoal(enteredValue);
  }
  return (
    <form onSubmit={formSubmitHandler}>
      <div className='form-control'>
        <label>Course Goal</label>
        <input type='text' onChange={goalInputChangeHandler}></input>
      </div>
      <Button type='submit'>Add Goal</Button>
    </form>
  );
}

export default CourseInput;
