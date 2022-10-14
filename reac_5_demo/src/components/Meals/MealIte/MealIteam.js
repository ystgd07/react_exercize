import React, { useContext } from "react";
import classes from "./MealIteam.module.css";
import MealItemForm from "./MealItemForm";
import CartContext from "../../../Store/cart-context";
function MealIteam(props) {
  const cartCtx = useContext(CartContext);

  const price = `$${props.price.toFixed(2)}`;

  const addItemToCartHandler = (amount) => {
    cartCtx.addItem({
      id: props.id,
      name: props.name,
      amount: amount,
      price: props.price,
    });
  };
  return (
    <li className={classes.meal}>
      <div>
        <h3>{props.name}</h3>
        <div className={classes.description}>{props.description}</div>
        <div className={classes.price}>{price}</div>
      </div>
      <div>
        <MealItemForm
          id={props.id}
          onAddToCart={addItemToCartHandler}
        ></MealItemForm>
      </div>
    </li>
  );
}

export default MealIteam;
