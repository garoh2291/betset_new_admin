import { useState } from "react";
import { GameContext } from "..";

export const GameContextProvider = ({ children }) => {
  const [betGames, setBetGames] = useState([]);

  return (
    <GameContext.Provider value={{ betGames, setBetGames }}>
      {children}
    </GameContext.Provider>
  );
};
