import React from "react";
import "./Card.css";

const Card = (props) => {
  // organizing classes with the use of composition
  const classes = "card " + props.className;
  return <div className={classes}>{props.children}</div>;
};

export default Card;
