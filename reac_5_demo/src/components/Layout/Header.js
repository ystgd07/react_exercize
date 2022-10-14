import React, { Fragment } from "react";

import HeaderCartButto from "./HeaderCartButto";
import mealsImage from "../assets/meals.jpg";
import classes from "./Header.module.css";

const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>ReactMeals</h1>
        <HeaderCartButto onClick={props.onShowCart}></HeaderCartButto>
      </header>
      <div className={classes["main-image"]}>
        <img src={mealsImage} alt='A table full of delcious food!' />
      </div>
    </Fragment>
  );
};

export default Header;
