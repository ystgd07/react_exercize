import classes from "./HeaderCartButto.module.css";
import CartIcon from "../Cart/CartIcon";

import React from "react";

function HeaderCartButto(props) {
  return (
    <button className={classes.button}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes["badge"]}>3</span>
    </button>
  );
}

export default HeaderCartButto;
