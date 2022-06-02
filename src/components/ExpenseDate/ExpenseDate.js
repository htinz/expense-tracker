import React from "react";

import "./ExpenseDate.css";

const ExpenseDate = (props) => {
  // assign varialbles to set up date objects (day, month and year)
  // use "long" to get long full name, for example: "Janaury"
  const month = props.date.toLocaleString("en-US", { month: "long" });
  // use "2-digit" for day format
  const day = props.date.toLocaleString("en-US", { day: "2-digit" });
  // use getFullYear() build-in method to get full year
  const year = props.date.getFullYear();

  return (
    <div className="expense-date">
      {/* pointing varaibles using curly braces */}
      <div className="expense-date__month">{month}</div>
      <div className="expense-date__year">{year}</div>
      <div className="expense-date__day">{day}</div>
    </div>
  );
};

export default ExpenseDate;
