import React from "react";
import './App.css';
import Board from "./Board";

function App() {
  return (
    <div className="App">
      <h1>React Lights Out Game!</h1>
      <p>
        The puzzle is won when when all of the lights are turned off.
        You can click on a cell to toggle that light — but it also toggles the
        light above it, to the left of it, to the right of it, and below it.
      </p>
      <div className="App-board">
        <Board />
      </div>
    </div>
  );
}

export default App;
