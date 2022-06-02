// import useState fuction from react library
import React, { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];

const App = () => {
  // set up state and pass DUMMY_EXPENSES as an initialize value
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = (expense) => {
    // call "state updating function" to update the value
    setExpenses((prevExpenses) => {
      // use "spread operator to pull out all existing elements and populate with existing elements "
      return [expense, ...prevExpenses];
    });
  };

  return (
    <div>
      {/* render NewExpense and pass datas from NewExpense to App (bottom up)*/}
      <NewExpense onAddExpense={addExpenseHandler} />
      {/* render Expenses component, set attribute and pass data via props to Expenses component */}
      <Expenses items={expenses} />
    </div>
  );
};

export default App;
