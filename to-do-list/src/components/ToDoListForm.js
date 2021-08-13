import React, { useState } from "react";
import { BrowserRouter as Router, useHistory } from "react-router-dom";

export const ToDoListForm = ({ thingsToDo, setToDo }) => {
  const [title, setTitle] = useState("");
  const history = useHistory();

  const handleTitleInput = (e) => {
    setTitle(e.target.value);
  };

  const backToDoList = () => {
    history.push("/");
  };

  const addToDo = () => {
    setToDo([...thingsToDo, title]);
    history.push("/");
  };

  return (
    <div className="to-do-list-form">
      <input
        placeholder="To do title..."
        value={title}
        onChange={handleTitleInput}
      ></input>
      <div className="btns">
        <button onClick={addToDo}>
          <i className="bx bx-plus"></i>
        </button>
        <button onClick={backToDoList}>
          <i className="bx bx-left-arrow-alt"></i>
        </button>
      </div>
    </div>
  );
};
