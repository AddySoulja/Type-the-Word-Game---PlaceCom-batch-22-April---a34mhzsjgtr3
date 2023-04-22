import React, { useState, useEffect } from "react";
import "../styles/App.css";

const WORD_LIST = ["apple", "banana", "cherry", "grape", "orange"];

function App() {
  const [word, setWord] = useState("");
  const [flashWord, setFlashWord] = useState(true);
  const [userInput, setUserInput] = useState("");
  const [result, setResult] = useState("");
  const [index, setIndex] = useState(0);

  const genRandom = () => parseInt((Math.random() * 5).toFixed());

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setUserInput("");
    setResult("");
    if (userInput === word) {
      setResult("You won!");
      return;
    }
    setResult("You lost!");
  };
  const delayWord = () => {
    setIndex(genRandom());
    setWord(WORD_LIST[index]);
    setTimeout(() => setFlashWord(false), 500);
  };
  const handleRestartClick = () => {
    setResult("");
    setUserInput("");
    setFlashWord(true);
    delayWord();
  };
  useEffect(() => {
    delayWord();
  }, []);
  return (
    <div className="mini-game-container">
      <h2 className="mini-game-title">Mini Game</h2>
      {flashWord === true ? <p class="mini-game-word">{word}</p> : ""}
      <form className="mini-game-form" onSubmit={handleFormSubmit}>
        <input
          className="mini-game-input"
          type="text"
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
        />
        <button className="mini-game-button" type="submit">
          Check Answer
        </button>
      </form>
      {result && (
        <>
          <p className="mini-game-result">{result}</p>
          <button className="mini-game-restart-button" onClick={handleRestartClick}>
            Restart
          </button>
        </>
      )}
    </div>
  );
}

export default App;
