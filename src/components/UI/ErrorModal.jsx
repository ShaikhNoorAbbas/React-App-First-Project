import React from "react";
import Button from "./Button";
import Card from "./Card";
import classes from "./ErrorModal.module.css";
const ErrorModal = (props) => {
  return (
    <Card>
      <header className={classes.header}>
        <h2>{props.title}</h2>
      </header>
      <div className={classes.content}>
        <p>{props.msg}</p>
      </div>
      <footer className={classes.actions}>
        <Button onclick={props.okay}>Okay 👆</Button>
      </footer>
    </Card>
  );
};

export default ErrorModal;
