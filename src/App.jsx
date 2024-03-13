import { useState } from "react";
import "./sanitize.css";
import "./app.css";
import { Puzzle } from "./puzzle/Puzzle";

function App() {
  const [gameState, setGameState] = useState("start");

  const handleStart = () => {
    setGameState("playing");
  };

  return (
    <div className="background-images">
      <div className="background-image"></div>
      <div className="background-image"></div>
      <div className="larateta-background"></div>
      <div className="escaleta-background"></div>
      <div className="frame-image"></div>
      <div className="game-screen">
        {gameState === "start" && (
          <div className="game-container-1">
            <button className="start-button" onClick={handleStart}></button>
          </div>
        )}
        {gameState === "playing" && (
          <div className="game-container-2">
            <Puzzle setGameState={setGameState} />
          </div>
        )}
        {/* Puedes agregar más estados según sea necesario, como 'gameover', 'victory', etc. */}
      </div>
    </div>
  );
}

export default App;
