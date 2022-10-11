import classes from "./HeaderCartButto.module.css";
import CartIcon from "../Cart/CartIcon";
import CartContext from "../../Store/cart-context";
import React, { useContext, useEffect, useState } from "react";

function HeaderCartButto(props) {
  const [btnIs, setbtnIs] = useState(false);
  const cartCtx = useContext(CartContext);
  const numberOfCartItems = cartCtx.items.reduce((curNumber, item) => {
    return curNumber + item.amount;
  }, 0);
  const { items } = cartCtx;
  const btnClasses = `${classes.button} ${btnIs ? classes.bump : ""}`;
  useEffect(() => {
    if (cartCtx.items.length === 0) {
      return;
    }
    setbtnIs(true);
    const timer = setTimeout(() => {
      setbtnIs(false);
    }, 300);
    return () => {
      clearTimeout(timer);
    };
  }, [items]);
  return (
    <button className={btnClasses} onClick={props.onClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes["badge"]}>{numberOfCartItems}</span>
    </button>
  );
}

export default HeaderCartButto;
