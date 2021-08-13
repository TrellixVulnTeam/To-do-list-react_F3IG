import { Link, Route, BrowserRouter as Router, Switch } from "react-router-dom";

import React from "react";
import { ToDoList } from "./components/ToDoList";
import { ToDoListForm } from "./components/ToDoListForm";
import useLocalStorage from "./hooks/useLocalStorage";

function App() {
  const [toDo, setToDo] = useLocalStorage("toDo", []);

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact>
            <ToDoList thingsToDo={toDo} setToDo={setToDo} />
          </Route>
          <Route path="/form">
            <ToDoListForm thingsToDo={toDo} setToDo={setToDo} />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
