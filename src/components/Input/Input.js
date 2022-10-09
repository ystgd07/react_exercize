import React, { useEffect, useRef } from "react";
import classes from "./input.module.css";
function Input(props) {
  const inputRef = useRef();
  const active = () => {
    inputRef.current.focus();
  };
  return (
    <div
      className={`${classes.control} ${
        props.email.isValid === false ? classes.invalid : ""
      }`}
    >
      <label htmlFor={props.html}>{props.description}</label>
      <input
        ref={props.ref}
        type={props.type}
        id={props.id}
        value={props.value}
        onChange={props.onChange}
        onBlur={props.onBlur}
      />
    </div>
  );
}

export default Input;
