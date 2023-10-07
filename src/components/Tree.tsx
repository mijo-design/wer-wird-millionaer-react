import React from "react";
import { useGame } from "./GameContext";

const Tree: React.FC = () => {
  const { state } = useGame();
  return (
    <div>
      <h3>Money Tree</h3>
      <ul>
        {state.moneyTree.map((amount, index) => (
          <li
            key={index}
            style={{ color: index === state.currentLevel ? "green" : "black" }}
          >
            {index === state.currentLevel ? `--> ${amount}` : `${amount}`}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Tree;
