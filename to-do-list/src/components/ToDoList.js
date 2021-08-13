import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, useHistory } from "react-router-dom";

import { ToDoListItem } from "./ToDoListItem";

export const ToDoList = ({ thingsToDo, setToDo }) => {
  const history = useHistory();
  const [renderAllToDo, setRenderAllToDo] = useState(true);
  const [search, setSearch] = useState("");

  const goToDoListForm = () => {
    history.push("/form");
  };

  const handleSearchInput = (e) => {
    setSearch(e.target.value);
  };

  const renderToDo = () => {
    if (searchToDoListItem().length > 0 && renderAllToDo) {
      return searchToDoListItem().map((thingToDo, index) => (
        <ToDoListItem
          title={thingToDo.title}
          key={index}
          deleteToDoitem={() => {
            deleteToDoItem(thingToDo);
          }}
          isCheck={thingToDo.isCheck}
          setIsCheck={() => {
            checkToDoItem(index);
          }}
        />
      ));
    } else {
      return null;
    }
  };

  const checkToDoItem = (index) => {
    searchToDoListItem().filter((thingToDo, i) => index === i)[0].isCheck =
      !thingsToDo.filter((thingToDo, i) => index === i)[0].isCheck;

    setToDo([...thingsToDo]);
  };

  const renderDoneToDo = () => {
    if (searchToDoListItem().length > 0) {
      const doneToDo = searchToDoListItem().filter(
        (thingToDo) => thingToDo.isCheck
      );
      console.log(doneToDo);
      return doneToDo.map((doneThingToDo, index) => (
        <ToDoListItem
          title={doneThingToDo.title}
          key={index}
          deleteToDoitem={() => {
            deleteToDoItem(doneThingToDo);
          }}
          isCheck={doneThingToDo.isCheck}
          setIsCheck={() => {
            checkToDoItem(index);
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

  const searchToDoListItem = () => {
    return thingsToDo.filter((thingToDo) => thingToDo.title.includes(search));
  };

  return (
    <div className="to-do-list">
      <div className="to-do-list-btns">
        <button
          onClick={() => setRenderAllToDo(true)}
          className={renderAllToDo ? "btn--active" : ""}
        >
          <i className="bx bx-list-ul"></i>
        </button>
        <button
          onClick={() => setRenderAllToDo(false)}
          className={!renderAllToDo ? "btn--active" : ""}
        >
          <i className="bx bx-calendar-check"></i>
        </button>
      </div>
      <div className="search">
        <input value={search} onChange={handleSearchInput}></input>
      </div>
      <div className="to-do-list-items">
        {renderAllToDo ? renderToDo() : renderDoneToDo()}
      </div>
      <button className="round-btn" onClick={goToDoListForm}>
        <i className="bx bx-plus"></i>
      </button>
    </div>
  );
};
