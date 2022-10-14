import logo from "./logo.svg";
import "./App.css";
import CourseInput from "./Components/CourseInput";
import CourseGoalList from "./Components/CourseGoalList";
import { useState } from "react";

function App() {
  const [courseGoals, setCourseGoals] = useState([
    { text: "Do all exercises!", id: "g1" },
    { text: "Finish the course!", id: "g2" },
  ]);
  function addGoalHandler(enteredText) {
    setCourseGoals((prevGoals) => {
      const updatedGoals = [...prevGoals];
      updatedGoals.unshift({ text: enteredText, id: Math.random().toString() });
      return updatedGoals;
    });
  }

  return (
    <div>
      <section id='goal-form'>
        <CourseInput onAddGoal={addGoalHandler}></CourseInput>
      </section>
      <section id='goals'>
        <CourseGoalList items={courseGoals}></CourseGoalList>
      </section>
    </div>
  );
}

export default App;
