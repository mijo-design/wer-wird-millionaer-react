import React from "react";
import { useGame } from "./GameContext";

const GameStats: React.FC = () => {
  const { state } = useGame();
  const { isGameOver, currentLevel, priceMoney, moneyTree } = state;

  return (
    <div>
      <h2>Game Stats</h2>
      <p>Current Winnings: {priceMoney}</p>
      <p>
        You play question {currentLevel + 1} for {moneyTree[currentLevel]}
      </p>
      {isGameOver && <p>The game is lost. Better luck next time!</p>}
    </div>
  );
};

export default GameStats;
