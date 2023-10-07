import React from "react";
import { useGame } from "./GameContext";

const Question: React.FC = () => {
  const { state, dispatch } = useGame();

  const handleOptionClick = (optionIndex: number) => {
    dispatch({ type: "SELECT_OPTION", payload: optionIndex });
  };

  return (
    <div>
      <h2>{state.questions[state.currentLevel].question}</h2>
      <ul>
        {state.questions[state.currentLevel].options.map((option, index) => (
          <li key={index}>
            <button onClick={() => handleOptionClick(index)}>{option}</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Question;
