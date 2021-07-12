import React from "react";
import "./App.css";
import GetDate from "./components/GetDate";
import Timer from "./components/Timer";
import { Board } from "./components/Board";
function App() {
  return (
    <div className="App">
      <GetDate />
      <Timer />
      <Board />
    </div>
  );
}

export default App;
