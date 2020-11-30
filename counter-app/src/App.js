import './App.css';
import React from "react"
import DisplayCounter from "./components/DisplayCounter"
import AddCounter from "./components/AddCounter"
import IncrementCounter from "./components/IncrementCounter"

function App() {
  return (
    <div className="App">
     <DisplayCounter />
     <IncrementCounter />
     <AddCounter />
    </div>
  );
}

export default App;
