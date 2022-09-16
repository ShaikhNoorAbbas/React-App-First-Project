import React from "react";
import Card from "../UI/Card";
import classes from "./User.module.css";
const UserList = (props) => {
  return (
    <Card className={classes.users}>
      <ul>
        {props.user.map((element) => (
          <li key={element.id}>
            {element.name} ({element.age} Years Old)
          </li>
        ))}
      </ul>
    </Card>
  );
};
export default UserList;
