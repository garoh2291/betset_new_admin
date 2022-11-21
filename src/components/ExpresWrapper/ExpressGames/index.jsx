import React from "react";
import { sportType } from "../../../helpers";
import "./styles.css";

export const ExpresGame = ({ game }) => {
  return (
    <div className="express_game_item_wrapper">
      <div className="sport_type_img"> {sportType(game.sport)}</div>
      <span title={game.league.en}>{game.league.en}</span>
      <span title={game.team1.en}>{game.team1.en}</span>
      <span title={game.team2.en}>{game.team2.en}</span>
      <span title={game.position.en}>{game.position.en}</span>
      <span>{game.coeff.toFixed(2)}</span>
      <span>{game.risk}</span>
    </div>
  );
};
