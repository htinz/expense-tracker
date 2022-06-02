import React from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
  // define function to pass datas
  const onSaveExpenseDataHandler = (enteredExpenseData) => {
    // create new data
    const expenseData = {
      // use "spread operator" to copy all the datas from expenseData generated in submitHandler function
      ...enteredExpenseData,
      // set new ramdom key
      id: Math.random().toString(),
    };
    // call props.onAddExpense and forward expenseData to pass the data
    props.onAddExpense(expenseData);
  };

  return (
    <div className="new-expense">
      {/* render ExpenseForm component and pass datas ExpenseForm to NewExpense (botton up) */}
      <ExpenseForm onSaveExpenseData={onSaveExpenseDataHandler} />
    </div>
  );
};

export default NewExpense;
