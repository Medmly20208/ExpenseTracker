import "./NewExpense.css";
import "./ExpenseForm";
import ExpenseForm from "./ExpenseForm";
import React, { useState } from "react";
function NewExpense(props) {
  let r;
  const enteredDataSub = (e) => {
    let r = {
      ...e,
      id: "1919",
    };
    props.onSaveAgain(r);
  };
  const [edit, setedit] = useState(false);
  const setEvent = () => {
    setedit(true);
  };
  const oncancel = () => {
    setedit(false);
  };
  return (
    <div className="new-expense">
      {!edit && (
        <button type="button" onClick={setEvent}>
          Add expense
        </button>
      )}
      {edit && (
        <ExpenseForm
          onSaveData={enteredDataSub}
          onCancelevent={oncancel}
        ></ExpenseForm>
      )}
    </div>
  );
}

export default NewExpense;
