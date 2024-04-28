import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  const getRandomName = () => {
    const names = [
      "Klaus",
      "Stefan",
      "Damon",
      "Elena",
      "Caroline",
      "Elijah",
      "Bonnie",
    ];
    const randomNumber = Math.floor(Math.random() * names.length);
    return names[randomNumber];
  };
  const numberIncrement = () => {
    setCount(count + 1);
    console.log(count);
  };
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="heading">{getRandomName()}</h1>
        <img src={logo} className="App-logo" alt="logo" />
        <p onClick={numberIncrement}>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
