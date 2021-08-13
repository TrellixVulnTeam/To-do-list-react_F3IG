import { Link, Route, BrowserRouter as Router, Switch } from "react-router-dom";

import React from "react";
import { ToDoList } from "./components/ToDoList";
import { ToDoListForm } from "./components/ToDoListForm";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact>
            <ToDoList />
          </Route>
          <Route path="/form">
            <ToDoListForm />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
