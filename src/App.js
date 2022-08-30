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
  const [winner, setWinner] = useState("");
  function newGame() {
    setXoxContainer([
      [0, 0, 0],
      [0, 0, 0],
      [0, 0, 0],
    ]);
    setTurn(1);
    setWinner("");
  }
  function resetGame() {
    setScore({ player1: 0, player2: 0 });
    newGame();
  }

  useEffect(() => {
    turn === 10 ? setGameOver(true) : setGameOver(false);
    if (winner === "X" || winner === "O") {
      if (winner === "X") {
        setScore({ player1: score.player1 + 1, player2: score.player2 });
      } else if (winner === "O") {
        setScore({ player1: score.player1, player2: score.player2 + 1 });
      }
      setGameOver(true);
    }
  }, [turn, winner]);

  return (
    <div className="App">
      {gameOver && (
        <GameFinish
          newGame={newGame}
          winner={winner}
          score={score}
          resetGame={resetGame}
        />
      )}
      <Header score={score} />
      <Body
        xoxContainer={xoxContainer}
        setXoxContainer={setXoxContainer}
        turn={turn}
        setTurn={setTurn}
        setWinner={setWinner}
      />
      <Footer gameOver={gameOver} />
    </div>
  );
}

export default App;
