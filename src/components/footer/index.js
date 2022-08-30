import React, { useState, useEffect } from "react";
import "./style.css";

const Footer = ({ gameOver }) => {
  console.log(gameOver, "state");
  const [time, setTime] = useState(0);
  const [running, setRunning] = useState(true);
  useEffect(() => {
    let interval;
    setRunning(!running);
    !gameOver && setTime(0);
    if (running) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 10);
      }, 10);
    } else if (!running) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [gameOver]);
  return (
    <div className="footerContainer">
      <div className="stopwatch">
        <span className="min">{("0" + Math.floor((time / 60000) % 60)).slice(-2)}:</span>
        <span className="sec">{("0" + Math.floor((time / 1000) % 60)).slice(-2)}</span>
      </div>
    </div>
  );
};

export default Footer;
