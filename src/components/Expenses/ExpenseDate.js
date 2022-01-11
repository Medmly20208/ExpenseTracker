import "./ExpenseDate.css";

function ExpenseDate(props) {
  return (
    <div className="ExpenseItemDate">
      <div>{props.month}</div>
      <div>{props.year}</div>
      <div>{props.day}</div>
    </div>
  );
}

export default ExpenseDate;
