import React from "react";
import "./Card.css";

const Card = (props) => {
  // set a varisble to organize "classes" with the use of "Composition"
  const classes = "card " + props.className;
  // set a "children porps" to get the content between the opening and closing tags of custom component
  return <div className={classes}>{props.children}</div>;
};

export default Card;
