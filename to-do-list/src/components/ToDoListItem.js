import React from "react";

export const ToDoListItem = ({
  title,
  deleteToDoitem,
  setIsCheck,
  isCheck,
}) => {
  return (
    <div className="to-do-list-item">
      <div
        onClick={setIsCheck}
        className={isCheck ? "is-done-checkbox--active" : "is-done-checkbox"}
      >
        <i className="bx bx-check"></i>
      </div>
      <p className={isCheck ? "done" : "title"}>{title}</p>
      <button onClick={deleteToDoitem}>
        <i className="bx bxs-trash-alt"></i>
      </button>
    </div>
  );
};
