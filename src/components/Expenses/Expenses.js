import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import NoExpense from "./NoExpense";
import { useState } from "react";
import ExpensesChart from "./ExpensesChart";

function New(props) {
  const [year, setYear] = useState();
  const selectedyear = (yearfilter) => {
    setYear(yearfilter);
  };
  let newArray = props.exp.filter((element) => {
    if (element.date.getFullYear() == year) {
      return true;
    } else {
      return false;
    }
  });

  return (
    <Card className="Expenses">
      <ExpensesFilter onchangedyear={selectedyear} />
      <ExpensesChart filtered={newArray}></ExpensesChart>
      {newArray.length != 0 ? (
        newArray.map((element) => {
          return <ExpenseItem key={element.id} exp={element}></ExpenseItem>;
        })
      ) : (
        <NoExpense></NoExpense>
      )}
    </Card>
  );
}

export default New;
