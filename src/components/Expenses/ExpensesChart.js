import React from "react";
import Chart from "../Chart/Chart";

const ExpensesChart = (props) => {
  const chartDataPoints = [
    { label: "Jan", value: 0 },
    { label: "Feb", value: 0 },
    { label: "Mar", value: 0 },
    { label: "Apr", value: 0 },
    { label: "May", value: 0 },
    { label: "Jun", value: 0 },
    { label: "Jul", value: 0 },
    { label: "Aug", value: 0 },
    { label: "Sep", value: 0 },
    { label: "Oct", value: 0 },
    { label: "Nov", value: 0 },
    { label: "Dec", value: 0 },
  ];

  // loop through all expenses via props, use "for of loop" because it is an array
  for (const expense of props.expenses) {
    // get expenses month, starting at 0 => Jan is 0
    const expenseMonth = expense.date.getMonth();
    // update value of selected datapoint and increase the value of a given month
    chartDataPoints[expenseMonth].value += expense.amount;
  }
  // pass dataPoints to Chart component and set chartDataPoints as a value
  return <Chart dataPoints={chartDataPoints} />;
};

export default ExpensesChart;
