import React from "react";
import { Link } from "react-router-dom";
import options from "../assets/options.svg";
import remove from "../assets/remove.svg";
import icon from "../assets/icon.svg";

const Game = ({ game, handleRemoveGame }) => {
  const { id, name, publisher, url, finalPrice, originalPrice, discount, media } = game;
  return (
    <article className="game" style={{ backgroundImage: `url(${media})` }}>
      <div className="game__info">
        <a href={url} target="_blank" className="link-store link-store--game">
          <img src={icon} width="20" alt="" />
          Playstation store page
        </a>
        <h1 className="game__title">{name}</h1>
        <h4 className="game__publisher">{publisher}</h4>
        <div className="game__price">
          {originalPrice !== 0 && <h3 className="game__discount">{discount}%</h3>}
          <h2>{finalPrice}€</h2>
          {originalPrice !== 0 && <h2 className="game__original-price">{originalPrice}€ </h2>}
        </div>
      </div>
      <div className="game__actions">
        <Link to={`${id}`} state={game}>
          <img src={options} alt="options" className="game__options" />
        </Link>
        <button onClick={() => handleRemoveGame(id)}>
          <img src={remove} alt="remove" className="game__remove" />
        </button>
      </div>
    </article>
  );
};

export default Game;
