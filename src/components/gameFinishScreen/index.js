import React, { useEffect } from "react";
import "./style.css";

function GameFinish(props) {
  const { newGame, winner, score, resetGame } = props;

  function exitGame() {
    window.close();
  }

  return (
    <div className="finish">
      <div className="winner">
        {" "}
        {winner !== "" ? winner + " player wins!!" : "Draw"} <br />
        {score && (
          <>
            <span>Player X: {score.player1}</span>
            <span>Player O: {score.player2}</span>
          </>
        )}
      </div>
      <button className="newGame" onClick={() => newGame()}>
        <span>New Game</span>
      </button>
      <button className="resetGame" onClick={() => resetGame()}>
        <span>Reset Game</span>
      </button>
      <button className="exitGame" onClick={() => exitGame()}>
        <span>Exit Game</span>
      </button>
    </div>
  );
}

export default GameFinish;
