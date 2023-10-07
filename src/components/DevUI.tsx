import React, { useEffect, useState } from "react";
import { useGame } from "./GameContext";

const DevUI: React.FC = () => {
  const { state } = useGame();
  const [elapsedTime, setElapsedTime] = useState<number>(0);

  useEffect(() => {
    // Start a timer when the component mounts
    const timer = setInterval(() => {
      setElapsedTime((prev) => prev + 1);
    }, 1000);
    // Clean up the timer when the component unmounts
    return () => clearInterval(timer);
  }, []);

  return (
    <div style={{ border: "2px solid red", padding: "10px", margin: "10px 0" }}>
      <h2>Dev UI</h2>
      <p>
        <strong>Correct Answer:</strong>{" "}
        {
          state.questions[state.currentLevel].options[
            state.questions[state.currentLevel].correctOption
          ]
        }
      </p>
      <p>
        <strong>Game lost:</strong> {JSON.stringify(state.isGameOver)}
      </p>
      <p>
        <strong>Game State:</strong> {JSON.stringify(state, null, 2)}
      </p>
      <p>
        <strong>Elapsed Time:</strong> {elapsedTime} seconds
      </p>
    </div>
  );
};

export default DevUI;
