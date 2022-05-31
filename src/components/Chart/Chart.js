import React from "react";
import "./Chart.css";
import ChartBar from "./ChartBar";

const Chart = (props) => {
  // convert object to number
  const dataPointValues = props.dataPoints.map((dataPoint) => dataPoint.value);
  // find maximum value
  const totalMaximum = Math.max(...dataPointValues);
  return (
    <div className="chart">
      {/* output ChartBar dynamically and pass dataPoints from ExpenseChart component */}
      {props.dataPoints.map((dataPoint) => (
        // render ChartBar and pass dataPoint
        <ChartBar
          // add key to help render list items effeciently
          key={dataPoint.label}
          value={dataPoint.value}
          // point maximum value
          maxValue={totalMaximum}
          label={dataPoint.label}
        />
      ))}
    </div>
  );
};

export default Chart;
