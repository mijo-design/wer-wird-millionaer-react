import React from "react";
import { GameProvider } from "../components/GameContext";
import Jokers from "../components/Joker";
import Question from "../components/Question";
import Tree from "../components/Tree";
import DevUI from "../components/DevUI";
import GameStats from "../components/GameStats";

const Game: React.FC = () => {
  return (
    <GameProvider>
      <div>
        <Question />
        <GameStats />
        <Tree />
        <Jokers />
      </div>
      <DevUI />
    </GameProvider>
  );
};

export default Game;
