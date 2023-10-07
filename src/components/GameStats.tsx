import React from "react";
import { useGame } from "./GameContext";

const GameStats: React.FC = () => {
  const { state } = useGame();
  const { isGameOver, currentLevel, moneyTree } = state;

  return (
    <div>
      <h2>Game Stats</h2>
      <p>Current Winnings: {moneyTree[currentLevel]}</p>
      {isGameOver && <p>The game is lost. Better luck next time!</p>}
    </div>
  );
};

export default GameStats;
