import React from "react";
import Card from "../UI/Card";
import MealIteam from "./MealIte/MealIteam";
import classes from "./AvaliableMeals.module.css";
const DUMMY_MEALS = [
  {
    id: "m1",
    name: "Sushi",
    description: "Finest fish and veggies",
    price: 22.99,
  },
  {
    id: "m2",
    name: "Schnitzel",
    description: "A german specialty!",
    price: 16.5,
  },
  {
    id: "m3",
    name: "Barbecue Burger",
    description: "American, raw, meaty",
    price: 12.99,
  },
  {
    id: "m4",
    name: "Green Bowl",
    description: "Healthy...and green...",
    price: 18.99,
  },
];

function AvaliableMeals(props) {
  const mealsList = DUMMY_MEALS.map((meal) => (
    <MealIteam
      key={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    ></MealIteam>
  ));
  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
}

export default AvaliableMeals;
