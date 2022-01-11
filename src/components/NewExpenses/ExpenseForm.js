import React from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const [vr, setInput] = React.useState("");
  const [vr1, setInput1] = React.useState("");
  const [vr2, setInput2] = React.useState("");

  const InputChange = (event) => {
    setInput(event.target.value);
  };
  const InputChange1 = (event) => {
    setInput1(event.target.value);
  };
  const InputChange2 = (event) => {
    setInput2(event.target.value);
  };
  const submitHandler = (event) => {
    event.preventDefault();
    const ExpenseData = {
      title: vr,
      amount: vr1,
      date: new Date(vr2),
    };
    props.onSaveData(ExpenseData);
    props.onCancelevent();
    setInput();
    setInput1();
    setInput2();
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" onChange={InputChange} value={vr} />
        </div>

        <div className="new-expense__control">
          <label>Price</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            onChange={InputChange1}
            value={vr1}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            value={vr2}
            onChange={InputChange2}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="button" onClick={props.onCancelevent}>
          Cancel
        </button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
