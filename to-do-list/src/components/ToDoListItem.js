import React from "react";

export const ToDoListItem = ({ title, deleteToDoitem }) => {
  return (
    <div className="to-do-list-item">
      <div className="is-done-checkbox"></div>
      <p className="title">{title}</p>
      <button onClick={deleteToDoitem}>
        <i className="bx bxs-trash-alt"></i>
      </button>
    </div>
  );
};
