import React from "react";
import "./App.css";

import TodoForm from "./components/TodoForm/TodoForm";

function App() {
  return (
    <div className="App">
      <TodoForm todos={[{ content: "Welcome to Yannai's todo", id: 1 }]} />
    </div>
  );
}

export default App;
