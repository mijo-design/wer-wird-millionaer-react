import React from "react";
import { useGame } from "./GameContext";

const Tree: React.FC = () => {
  const { state } = useGame();
  return (
    <div>
      <h3>Money Tree</h3>
      <ul>
        {state.moneyTree.map((amount, index) => {
          let treeUi = `${amount}`;
          if (state.checkpoints.includes(amount)) {
            treeUi += " (Checkpoint)";
          }
          if (index === state.currentLevel) {
            treeUi += " <-- You play now for";
          }
          return (
            <li
              key={index}
              style={{
                color: index === state.currentLevel ? "green" : "black",
              }}
            >
              {treeUi}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Tree;
