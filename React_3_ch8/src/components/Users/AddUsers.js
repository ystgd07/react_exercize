import React, { useState, useRef } from "react";
import Card from "../UI/Card";
import classes from "./AddUsers.module.css";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";
import Wraaper from "../UI/Helpers/Wraaper";
function AddUsers(props) {
  const nameInputRef = useRef();
  const ageInputRef = useRef();

  const [enteredUserName, setEnteredUsername] = useState("");
  const [enteredUserAge, setEnteredAge] = useState("");
  const [error, setError] = useState();
  const addUserHandler = (event) => {
    event.preventDefault();
    if (
      enteredUserName.trim().length === 0 ||
      enteredUserAge.trim().length === 0
    ) {
      setError({
        title: "Invalid input",
        message: "Please enter a valid name and age(non -emty value) ",
      });

      return;
    }
    if (+enteredUserAge < 1) {
      setError({
        title: "Invalid age",
        message: "Please enter a valid name and age(>0) ",
      });
      return;
    }
    props.onAddUser(enteredUserName, enteredUserAge);
    setEnteredUsername("");
    setEnteredAge("");
  };
  const usernameChangeHandler = (event) => {
    event.preventDefault();
    setEnteredUsername(event.target.value);
  };
  const userAgeChangeHandler = (event) => {
    event.preventDefault();
    setEnteredAge(event.target.value);
  };
  const errorHandler = () => {
    setError(null);
  };

  return (
    <Wraaper>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />
      )}
      <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor='username'>Username</label>
          <input
            id='username'
            type='text'
            onChange={usernameChangeHandler}
            value={enteredUserName}
            ref={nameInputRef}
          ></input>
          <label htmlFor='age'>Age(Years)</label>
          <input
            id='age'
            type='number'
            value={enteredUserAge}
            onChange={userAgeChangeHandler}
            ref={ageInputRef}
          ></input>
          <Button type='submit'>Add User</Button>
        </form>
      </Card>
    </Wraaper>
  );
}

export default AddUsers;
