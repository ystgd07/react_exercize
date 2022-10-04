import React from "react";
import "./CourseGoalItem.css";
function CourseGoalItem(props) {
  return <li className='goal-item'>{props.children}</li>;
}

export default CourseGoalItem;
