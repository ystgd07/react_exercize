import React, { useState, Fragment } from "react";
import AddUser from "./components/Users/AddUsers";
import UsersList from "./components/Users/UsersList";
function App() {
  const [usersList, setUsersList] = useState([]);

  const addUserHandler = (uName, uAge) => {
    setUsersList((prevUsersList) => {
      return [
        ...prevUsersList,
        { name: uName, age: uAge, id: Math.random().toString() },
      ];
    });
  };
  return (
    <Fragment>
      <AddUser onAddUser={addUserHandler}></AddUser>
      <UsersList users={usersList}></UsersList>
    </Fragment>
  );
}

export default App;
