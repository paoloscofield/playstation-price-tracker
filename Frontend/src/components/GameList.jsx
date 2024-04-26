import React from "react";
import { memo } from "react";
import Game from "./Game";

const GameList = ({ games, handleRemoveGame }) => {
  return (
    <section>
      {games.map((game) => {
        return <Game key={game.id} game={game} handleRemoveGame={handleRemoveGame} />;
      })}
    </section>
  );
};

export default memo(GameList);
