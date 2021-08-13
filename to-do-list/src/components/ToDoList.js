import { BrowserRouter as Router, useHistory } from "react-router-dom";

import React from "react";
import { ToDoListItem } from "./ToDoListItem";

export const ToDoList = ({ thingsToDo, setToDo }) => {
  const history = useHistory();

  const goToDoListForm = () => {
    history.push("/form");
  };

  const renderToDo = () => {
    console.log(thingsToDo);
    if (thingsToDo.length > 0) {
      return thingsToDo.map((thingToDo, index) => (
        <ToDoListItem
          title={thingToDo}
          key={index}
          deleteToDoitem={() => {
            deleteToDoItem(thingToDo);
          }}
        />
      ));
    } else return null;
  };

  const deleteToDoItem = (item) => {
    const newThingsToDo = thingsToDo;
    newThingsToDo.splice(newThingsToDo.indexOf(item), 1);
    setToDo([...newThingsToDo]);
  };

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
      <div className="to-do-list-items">{renderToDo()}</div>
      <button className="round-btn" onClick={goToDoListForm}>
        <i className="bx bx-plus"></i>
      </button>
    </div>
  );
};
