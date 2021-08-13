import React from "react";

export const ToDoList = () => {
  return (
    <div className="to-do-list">
      <div className="to-do-list-btns">
        <button>
          <i className="bx bx-list-ul"></i>
        </button>
        <button>
          <i className="bx bx-calendar-check"></i>
        </button>
      </div>
      <div className="to-do-list-items"></div>
    </div>
  );
};
