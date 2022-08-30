import React from "react";
import "./style.css";

function Header({ score }) {
  return (
    <div className="containerScore">
      <div className="scoreMain">
        Score :<div className="p1">player X : {score.player1}</div>
        <div className="p2">player Y : {score.player2}</div>
      </div>
    </div>
  );
}

export default Header;
