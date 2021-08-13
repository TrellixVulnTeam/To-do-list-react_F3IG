import React, { useState } from "react";
import { BrowserRouter as Router, useHistory } from "react-router-dom";

export const ToDoListForm = ({ addToDoListItem }) => {
  const [title, setTitle] = useState("");
  const history = useHistory();

  const handleTitleInput = (e) => {
    setTitle(e.target.value);
  };

  const backToDoList = () => {
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
        <button onClick={() => addToDoListItem()}>
          <i className="bx bx-plus"></i>
        </button>
        <button onClick={backToDoList}>
          <i className="bx bx-left-arrow-alt"></i>
        </button>
      </div>
    </div>
  );
};
