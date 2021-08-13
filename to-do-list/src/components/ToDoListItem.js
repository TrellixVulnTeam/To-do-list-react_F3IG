import React from "react";

export const ToDoListItem = ({ title }) => {
  return (
    <div className="to-do-list-item">
      <div className="is-done-checkbox"></div>
      <p className="title">{title}</p>
    </div>
  );
};
