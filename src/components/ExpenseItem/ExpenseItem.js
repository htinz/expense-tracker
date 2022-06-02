import React from "react";
import "./ExpenseItem.css";
import ExpenseDate from "../ExpenseDate/ExpenseDate";
import Card from "../UI/Card";

const ExpenseItem = (props) => {
  return (
    <li>
      {/* warp with Card component */}
      <Card className="expense-item">
        {/* render ExpenseDate and pass datas via props, Note:"props.date comes from App component like props.title, props.amount", "date" attribute name in ExpenseDate is up to you but use the same attribute name when passing data via "props. " to ExpenseDate component*/}
        <ExpenseDate date={props.date} />
        <div className="expense-item__description">
          <h2>{props.title}</h2>
          <div className="expense-item__price">${props.amount}</div>
        </div>
      </Card>
    </li>
  );
};

export default ExpenseItem;
