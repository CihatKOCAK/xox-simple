import { useEffect, useState } from "react";
import "./App.css";
import Body from "./components/body";
import Footer from "./components/footer";
import GameFinish from "./components/gameFinishScreen";
import Header from "./components/header";

function App() {
  const [xoxContainer, setXoxContainer] = useState([
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
  ]);
  const [turn, setTurn] = useState(1); //tekse x çiftse y
  const [gameOver, setGameOver] = useState(false); //oyun bitmedi mi?
  const [score, setScore] = useState({ player1: 0, player2: 0 }); //oyuncuların puanları
console.log(turn)
  function newGame() {
    setXoxContainer([
      [0, 0, 0],
      [0, 0, 0],
      [0, 0, 0],
    ]);
    setTurn(1);
  }
  useEffect(() => {
    turn === 10 ? setGameOver(true) : setGameOver(false);
  }, [turn]);

  return (
    <div className="App">
      {gameOver && <GameFinish newGame={newGame} />}
      <Header score={score} />
      <Body
        xoxContainer={xoxContainer}
        setXoxContainer={setXoxContainer}
        turn={turn}
        setTurn={setTurn}
      />
      <Footer gameOver={gameOver} />
    </div>
  );
}

export default App;
