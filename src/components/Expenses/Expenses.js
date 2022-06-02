import React, { useState } from "react";

import Card from "../UI/Card";
import "./Expenses.css";
import ExpenseFilter from "../ExpenseFilter/ExpenseFilter";
import ExpensesList from "../ExpensesList/ExpensesList";
import ExpensesChart from "./ExpensesChart";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2020");

  // defind function to control the selected year
  const filterChangeHandler = (selectedYear) => {
    // update the value
    setFilteredYear(selectedYear);
  };

  // defind function to filter the years
  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  return (
    <Card className="expenses">
      {/* render ExpenseFilter as a "control component" */}
      <ExpenseFilter
        // create an attribute and point it
        selected={filteredYear}
        // point function
        onChangeFilter={filterChangeHandler}
      />
      {/* render ExpensesChart and pass datas to ExpensesChart via props */}
      <ExpensesChart expenses={filteredExpenses} />
      {/* render ExpensesList and pass datas ExpensesList */}
      <ExpensesList items={filteredExpenses} />
    </Card>
  );
};

export default Expenses;
