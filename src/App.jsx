import { useState } from "react";
import React from "react";
import ReactDOM from "react-dom";
import { Background, Display } from "./shared";
import "./sanitize.css";
import "./app.css";

function App() {
  const [gameState, setGameState] = useState("start");

  return (
    <div className="background-images">
      <div className="background-image"></div>
      <div className="background-image"></div>
      <div className="game-screen">
        {/* Contenido del juego */}
        {gameState === "start" && (
          <div className="game-container">
            {/* Aquí puedes colocar el contenido de tu juego */}
            <h1>Bienvenido al juego</h1>
            <button onClick={() => setGameState("playing")}>Empezar</button>
          </div>
        )}
        {gameState === "playing" && (
          <div className="game-container">
            {/* Aquí puedes colocar la lógica y los elementos de tu juego mientras se está jugando */}
            <h1>Juego en progreso...</h1>
            <button onClick={() => setGameState("start")}>Parar</button>
          </div>
        )}
        {/* Puedes agregar más estados según sea necesario, como 'gameover', 'victory', etc. */}
      </div>
    </div>
  );
}

export default App;
