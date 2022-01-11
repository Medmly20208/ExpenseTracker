import React from "react";
import "./Chart.css";
import ChartBar from "./ChartBar";

const Chart = (props) => {
  const datapoint = props.datapoints.map((elem) => elem.value);
  const mx = Math.max(...datapoint);
  

  return (
    <div className="chart">
      {props.datapoints.map((element) => {
        return (
          <ChartBar
            key={element.label}
            value={element.value}
            maxvalue={mx}
            label={element.label}
          ></ChartBar>
        );
      })}
    </div>
  );
};

export default Chart;
