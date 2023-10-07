import React, { ReactNode, createContext, useContext, useReducer } from "react";

interface Question {
  question: string;
  options: string[];
  correctOption: number;
}

interface State {
  currentLevel: number;
  questions: Question[];
  usedJokers: string[];
  gameMode: string;
  isGameOver: boolean;
  moneyTree: number[];
}

interface Action {
  type: string;
  payload?: any;
}

export const initialState: State = {
  currentLevel: 0,
  questions: [
    {
      question: "Which of the following is not a programming language?",
      options: ["Python", "Java", "HTML", "C#"],
      correctOption: 2, // HTML is not a programming language
    },
    {
      question: "Which planet is known as the Red Planet?",
      options: ["Earth", "Mars", "Jupiter", "Saturn"],
      correctOption: 1, // Mars is the Red Planet
    },
    {
      question: "Who wrote 'To be, or not to be'?",
      options: [
        "Charles Dickens",
        "Jane Austen",
        "William Shakespeare",
        "Homer",
      ],
      correctOption: 2, // William Shakespeare wrote this line
    },
    {
      question: "Which element has the chemical symbol 'O'?",
      options: ["Osmium", "Oxygen", "Omnium", "Opium"],
      correctOption: 1, // Oxygen has the chemical symbol 'O'
    },
    {
      question: "What is the capital of France?",
      options: ["Berlin", "Madrid", "Paris", "Lisbon"],
      correctOption: 2, // Paris is the capital of France
    },
  ],
  usedJokers: [],
  gameMode: "sicherheitsvariante",
  isGameOver: false,
  moneyTree: [
    100, 200, 300, 500, 1000, 2000, 4000, 8000, 16000, 32000, 64000, 125000,
    250000, 500000, 1000000,
  ],
};

const GameContext = createContext<{
  state: State;
  dispatch: React.Dispatch<Action>;
}>({ state: initialState, dispatch: () => null });

export const gameReducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "SELECT_OPTION":
      const isCorrect =
        state.questions[state.currentLevel].correctOption === action.payload;
      if (!isCorrect && state.gameMode === "sicherheitsvariante") {
        return { ...state, isGameOver: true };
      }
      return {
        ...state,
        currentLevel: isCorrect ? state.currentLevel + 1 : state.currentLevel,
      };
    case "USE_JOKER":
      if (!state.usedJokers.includes(action.payload)) {
        return { ...state, usedJokers: [...state.usedJokers, action.payload] };
      }
      return state;
    case "SET_GAME_MODE":
      return { ...state, gameMode: action.payload };
    case "RESTART_GAME":
      return { ...initialState, gameMode: state.gameMode };
    default:
      return state;
  }
};

export const GameProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [state, dispatch] = useReducer(gameReducer, initialState);
  return (
    <GameContext.Provider value={{ state, dispatch }}>
      {children}
    </GameContext.Provider>
  );
};

export const useGame = () => useContext(GameContext);
