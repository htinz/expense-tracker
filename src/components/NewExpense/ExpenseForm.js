// import useState function from react library
import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  // set up useSate and set an initial value
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  // defind function
  const titleChangeHandler = (event) => {
    // call "state updating function" to update the value and set event.target.value to find a value in event object
    setEnteredTitle(event.target.value);
  };

  // defind function
  const amountChangeHandler = (event) => {
    // call "state updating function" to update the value and set event.target.value to find a value in event object
    setEnteredAmount(event.target.value);
  };

  // defind function
  const dateChangeHandler = (event) => {
    // call "state updating function" to update the value and set event.target.value to find a value in event object
    setEnteredDate(event.target.value);
  };

  // defind function
  const submitHandler = (event) => {
    // prevent default behavior to manaully handle it
    event.preventDefault();
    // create "expenseData" object to combine all that entered datas
    const expenseData = {
      title: enteredTitle,
      amount: +enteredAmount,
      date: new Date(enteredDate),
    };
    // pass data from NewExpense via props and excute here
    props.onSaveExpenseData(expenseData);
    // set it back initial state to clear inputs
    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");
  };

  return (
    // add "onSubmit" event listener
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          {/* set up input for title */}
          <input
            type="text"
            // set back a new value, it is "two-way binding"
            value={enteredTitle}
            // use onChange event listener for Dropdowns and point the function
            onChange={titleChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          {/* set up input for amount */}
          <input
            type="number"
            min="0.01"
            step="0.01"
            // set back a new value, it is "two-way binding"
            value={enteredAmount}
            // use onChange event listener for Dropdowns and point the function
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          {/* set up input for date */}
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            // set back a new value, it is "two-way binding"
            value={enteredDate}
            // use onChange event listener for Dropdowns and point the function
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        {/* add submit button */}
        <button type="submit">Add expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
