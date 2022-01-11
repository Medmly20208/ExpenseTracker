import { useCallback, useState } from "react";
import reactDom from "react-dom";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpenses/NewExpense";

const expense = [];

function App() {
  const [updateExpense, setupdateExpense] = useState(expense);
  const onSaveHandler = (data) => {
    setupdateExpense((prev) => {
      data["id"] = `e${Math.round(Math.random() * 100)}`;
      return [data, ...prev];
    });
  };

  return (
    <div>
      <NewExpense onSaveAgain={onSaveHandler}></NewExpense>
      <Expenses exp={updateExpense} />
    </div>
  );
}
export default App;
