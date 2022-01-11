import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import React from "react";

function ExpenseItem(data) {
  return (
    <Card className="ExpenseParent">
      <div className="ExpenseItemDateDesc">
        <ExpenseDate
          month={data.exp.date.toLocaleString("en-us", {
            month: "long",
          })}
          year={data.exp.date.getFullYear()}
          day={data.exp.date.getDay() + 1}
        ></ExpenseDate>
        <div className="ExpenseItemDescription">{data.exp.title}</div>
      </div>

      <div className="ExpenseItemPrice">${data.exp.amount}</div>
    </Card>
  );
}
export default ExpenseItem;
