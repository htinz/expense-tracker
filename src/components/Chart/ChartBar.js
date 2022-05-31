import React from "react";
import "./ChartBar.css";

const ChartBar = (props) => {
  // set a variable to fill chartBar height
  let barFillHeight = "0%";
  if (props.maxValue > 0) {
    // calculate percentage of maximum value to fill height
    barFillHeight = Math.round((props.value / props.maxValue) * 100) + "%";
  }
  return (
    <div className="chart-bar">
      <div className="chart-bar__inner">
        <div
          className="chart-bar__fill"
          // fill height with color
          style={{ height: barFillHeight }}
        ></div>
      </div>
      <div className="chart-bar__label">{props.label}</div>
    </div>
  );
};

export default ChartBar;
