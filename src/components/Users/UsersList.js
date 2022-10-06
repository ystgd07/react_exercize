import React from "react";
import Card from "../UI/Card";
import classes from "./UsersList.module.css";
function UsersList(props) {
  return (
    <Card className={classes.users}>
      <ul className={classes.users}>
        {props.users.map((user) => (
          <li key={user.id}>
            {user.name} ({user.age} Years old)
          </li>
        ))}
      </ul>
    </Card>
  );
}

export default UsersList;
