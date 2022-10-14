import React, { Fragment } from "react";
import MealsSummary from "./MealsSummary";
import AvaliableMeals from "./AvaliableMeals";
function Meals(props) {
  return (
    <Fragment>
      <MealsSummary></MealsSummary>
      <AvaliableMeals></AvaliableMeals>
    </Fragment>
  );
}

export default Meals;
