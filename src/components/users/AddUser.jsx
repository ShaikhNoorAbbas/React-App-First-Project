import React, { useState } from "react";
import Card from "../UI/Card";
import classes from "./Adduser.module.css";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";
const Adduser = (props) => {
  const [username, setusername] = useState("");
  const [userage, setuserage] = useState("");
  const [error, seterror] = useState();

  const SubmitHandler = (event) => {
    event.preventDefault();
    if (username.trim().length === 0 || userage.trim().length === 0) {
      seterror({
        title: " 😱 ERROR !!! 🤯",
        msg: "👀 Inputs Are Empty 🤦‍♂️!! 🧐",
      });
      return;
    }
    if (userage < 1) {
      seterror({
        title: " 😱 ERROR !!! 🤯",
        msg: "🥴 Please Enter Valid Age !! 🙄",
      });
      return;
    }
    props.data(username, userage);
    setusername("");
    setuserage("");
  };
  const nameChangeHandler = (event) => {
    setusername(event.target.value);
  };
  const ageChangeHandler = (event) => {
    setuserage(event.target.value);
  };
  const clicked = () => {
    seterror(null);
  };
  return (
    <div>
      {error && (
        <ErrorModal title={error.title} msg={error.msg} okay={clicked} />
      )}
      <Card className={classes.input}>
        <form onSubmit={SubmitHandler}>
          <label htmlFor="username">UserName 🙂</label>
          <input
            id="username"
            type="text"
            value={username}
            onChange={nameChangeHandler}
          />
          <label htmlFor="age">Age 🙂</label>
          <input
            id="age"
            type="number"
            value={userage}
            onChange={ageChangeHandler}
          />
          <Button type="submit">Add User 👆</Button>
        </form>
      </Card>
    </div>
  );
};
export default Adduser;
