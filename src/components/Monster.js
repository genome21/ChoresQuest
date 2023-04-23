import React, { useEffect, useState } from "react";
import dragon from "../assets/dragon.png";
import "./Monster.css";
import "./shake.css";

const Monster = ({ health, gameWon }) => {
  const [shakeClass, setShakeClass] = useState("");

  useEffect(() => {
    if (health < 100 && !gameWon) {
      setShakeClass("shake");
      setTimeout(() => {
        setShakeClass("");
      }, 500);
    }
  }, [health, gameWon]);

  return (
    <div className="monster-container">
      <img
        className={`monster-image ${shakeClass} ${gameWon ? "monster-defeated" : ""}`}
        src={dragon}
        alt="Monster"
      />
      <div className={`monster-health ${gameWon ? "monster-defeated" : ""}`}>
        <p>Monster Health: {health}</p>
      </div>
      {gameWon && (
        <div className="win-message">
          <h1>You Win!</h1>
        </div>
      )}
    </div>
  );
};

export default Monster;
