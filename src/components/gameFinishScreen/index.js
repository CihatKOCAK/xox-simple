import React from "react";
import "./style.css";

function GameFinish(props) {
  return (
    <div className="finish">
      Oyun Bitti Kardo
      <button onClick={() => props.newGame()}>Yeni Oyuna Başla!</button>
    </div>
  );
}

export default GameFinish;
