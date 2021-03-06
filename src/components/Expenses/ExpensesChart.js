import React from "react";

import Chart from "../Chart/Chart";

const ExpensesChart = (props) => {
  let data = [
    { label: "jan", value: 0 },
    { label: "Feb", value: 0 },
    { label: "Mar", value: 0 },
    { label: "Apr", value: 0 },
    { label: "May", value: 0 },
    { label: "jun", value: 0 },
    { label: "jul", value: 0 },
    { label: "aug", value: 0 },
    { label: "oct", value: 0 },
    { label: "sep", value: 0 },
    { label: "nov", value: 0 },
    { label: "dec", value: 0 },
  ];
  let variable1;
  console.log("props ", props.filtered[0]);
  for (let y = 0; y < props.filtered.length; y++) {
    variable1 = props.filtered[y].date.getMonth();
    data[variable1].value += Number.parseFloat(props.filtered[y].amount);
  }
  console.log(data);

  return <Chart datapoints={data}></Chart>;
};

export default ExpensesChart;
