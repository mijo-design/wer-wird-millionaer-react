import React from "react";
import { useGame } from "./GameContext";

const Jokers: React.FC = () => {
  const { state } = useGame();
  const allJokers = ["50:50", "Phone a Friend", "Ask the Audience"];
  return (
    <div>
      <h3>Jokers</h3>
      <ul>
        {allJokers.map((joker, index) => (
          <li
            key={index}
            style={{
              textDecoration: state.usedJokers.includes(joker)
                ? "line-through"
                : "none",
            }}
          >
            {joker}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Jokers;
