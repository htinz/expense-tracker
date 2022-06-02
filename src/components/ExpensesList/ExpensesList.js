import React from "react";
import "./ExpensesList.css";
import ExpenseItem from "../ExpenseItem/ExpenseItem";

const ExpensesList = (props) => {
  // show no expenses message if there is no expense
  if (props.items.length === 0) {
    return <h2 className="expenses-list__fallback">Found no expenses.</h2>;
  }
  return (
    <ul className="expenses-list">
      {/* render ExpenseItem dynamically and pass data via props */}
      {props.items.map((expense) => (
        <ExpenseItem
          // add key to help render list items effeciently
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))}
    </ul>
  );
};

export default ExpensesList;
