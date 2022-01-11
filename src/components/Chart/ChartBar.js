import React from "react";

import "./ChartBar.css";

const ChartBar = (props) => {
  let DynamicHeight = "O%";

  if (props.maxvalue > 0) {
    DynamicHeight = Math.round((props.value / props.maxvalue) * 100) + "%";
  }

  return (
    <div className="chart-bar">
      <div className="chart-bar__inner">
        <div
          className="chart-bar__fill"
          style={{ height: DynamicHeight }}
        ></div>
      </div>
      <div className="chart-bar__label">{props.label}</div>
    </div>
  );
};

export default ChartBar;
