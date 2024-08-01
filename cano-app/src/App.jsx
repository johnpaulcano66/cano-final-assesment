// src/App.js
import React from "react";
import "./App.css";
import Books from "./Books";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1> Cano Book Appointment</h1>
        <Books />
      </header>
    </div>
  );
}

export default App;
