import React from "react";
import CourseGoalItem from "./CourseGoalItem";
import "./CourseGoalList.css";
function CourseGoalList(props) {
  return (
    <ul className='goal-list'>
      {props.items.map((goal) => (
        <CourseGoalItem key={goal.id} id={goal.id}>
          {goal.text}
        </CourseGoalItem>
      ))}
    </ul>
  );
}

export default CourseGoalList;
