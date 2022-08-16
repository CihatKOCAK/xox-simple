import { useEffect, useState } from "react";
import "./App.css";
import Body from "./components/body";
import Header from "./components/header";

function App() {
  const [xoxContainer, setXoxContainer] = useState([
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
  ]);
  const [turn, setTurn] = useState(1); //tekse x çiftse y
  const [winner, setWinner] = useState(0); //0 yok 1 x kazanır 2 y kazanır
  const [gameOver, setGameOver] = useState(false); //oyun bitmedi mi?

  const [score, setScore] = useState({ player1: 0, player2: 0 }); //oyuncuların puanları

  return (
    <div className="App">
      <Header />
      <Body xoxContainer={xoxContainer}  />
    </div>
  );
}

export default App;
