import React from "react";
import "./ExpenseFilter.css";

const ExpenseFilter = (props) => {
  // define function
  const dropdownChangeHandler = (event) => {
    // pass datas back from Expenses component
    props.onChangeFilter(event.target.value);
  };

  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <label>Filter by year</label>
        {/* pass the value Expense component and add onChange for dropdown and point functione*/}
        <select value={props.selected} onChange={dropdownChangeHandler}>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
        </select>
      </div>
    </div>
  );
};

export default ExpenseFilter;
