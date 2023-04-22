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
    } else {
      setResult("You lost!");
    }
  };
  const delayWord = () => {
    setFlashWord(true);
    setIndex(genRandom());
    setWord(WORD_LIST[index]);
    setTimeout(() => setFlashWord(false), 500);
  };
  const handleRestartClick = () => {
    delayWord();
    setResult("");
  };
  useEffect(() => {
    delayWord();
  }, []);
  return (
    <div class="mini-game-container">
      <h2 class="mini-game-title">Mini Game</h2>
      {flashWord === true ? <p class="mini-game-word">{word}</p> : ""}
      {result === "" ? (
        <form class="mini-game-form" onSubmit={handleFormSubmit}>
          <input
            class="mini-game-input"
            type="text"
            value={userInput}
            onChange={(e) => setUserInput(e.target.value)}
          />
          <button class="mini-game-button" type="submit">
            Check Answer
          </button>
        </form>
      ) : (
        ""
      )}
      {result && (
        <>
          <p class="mini-game-result">{result}</p>
          <button class="mini-game-restart-button" onClick={handleRestartClick}>
            Restart
          </button>
        </>
      )}
    </div>
  );
}

export default App;
