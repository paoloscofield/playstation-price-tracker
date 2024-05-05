import React from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import "../App.css";
import logo from "../assets/logo.svg";
import icon from "../assets/icon.svg";

/*Chart*/
import GameChart from "../components/Chart";
import Footer from "../components/Footer";

const GamePageLayout = () => {
  const location = useLocation();
  const data = location.state;
  const { name, publisher, url, finalPrice, originalPrice, discount, media, priceHistory } = data;

  const getLastPrice = () => {
    const lastElement = priceHistory[priceHistory.length - 2];
    if (lastElement) {
      return lastElement.price;
    }
    return priceHistory[0].price;
  };

  const bestPrice = () => {
    const bestArray = priceHistory.map((item) => {
      return item.price;
    });
    const best = Math.min(bestArray);
    return best;
  };

  return (
    <main>
      <nav>
        <div className="logo-container">
          <a href="/">
            <img src={logo} alt="logo" className="logo" />
          </a>
        </div>
        <div className="back-btn">
          <Link to="/">← Back home</Link>
        </div>
      </nav>
      <section className="gamePage">
        <div className="gamePage__cover">
          <img src={media} alt={`${name} cover`} />
        </div>
        <div className="gamePage__info">
          <a href={url} className="link-store" target="_blank">
            <img src={icon} width="20" alt="" />
            Playstation store
          </a>
          <h1 className="gamePage__title">{name}</h1>
          <h2 className="gamePage__publisher">{publisher}</h2>

          <div className="gamePage__price">
            <div className="now">
              <h4 className="subtitle">Now:</h4>
              <h2>
                {originalPrice !== 0 && <span className="gamePage__discount">{discount}%</span>}
                {finalPrice} €
              </h2>
              {originalPrice !== 0 && <h5>{originalPrice}€</h5>}
            </div>
            <div className="latest">
              <h4 className="subtitle">Latest:</h4>
              <h2>{getLastPrice()} €</h2>
            </div>
            <div className="lowest">
              <h4 className="subtitle">Lowest:</h4>
              <h2>{bestPrice()} €</h2>
            </div>
          </div>
          <GameChart dati={priceHistory} />
        </div>
      </section>
      <Footer />
    </main>
  );
};

export default GamePageLayout;
