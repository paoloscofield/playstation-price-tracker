import React, { useEffect, useState } from "react";
import "../App.css";
import GameList from "../components/GameList";
import logo from "../assets/logo.svg";
import Footer from "../components/Footer";
import { ENDPOINT } from "../config";

const Home = () => {
  const [website, setWebsite] = useState("");
  const [games, setGames] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [modalText, setModalText] = useState({ text: "", mood: "" });

  /*Modal*/
  const modal = (text, mood) => {
    setModalText({ text, mood });
    setShowModal(true);
    setTimeout(() => setShowModal(false), 2500);
  };

  /*Chiamata GET*/
  const fetchData = async () => {
    try {
      const response = await fetch(ENDPOINT);
      const data = await response.json();
      setGames(data);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
      setIsLoading(false);
      modal("Errore", "negative");
    }
  };

  /*Chiamata POST*/
  const sendGame = async (newGame) => {
    try {
      const response = await fetch(ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ url: newGame }),
      });
      const data = await response.text();
      if (data === "Gioco aggiunto alla lista") {
        modal(data, "positive");
      } else {
        modal(data, "negative");
      }
      fetchData();
    } catch (error) {
      console.log(error);
      modal("Errore di connessione", "negative");
    }
  };

  /*Chiamata DELETE*/
  const deleteGame = async (id) => {
    try {
      const response = await fetch(ENDPOINT, {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id }),
      });
      const data = await response.text();
      modal(data, "negative");
      fetchData();
    } catch (error) {
      console.log(error);
      modal("Errore di connessione", "negative");
    }
  };

  /***/

  useEffect(() => {
    fetchData();
  }, []);

  const handleChange = (e) => {
    setWebsite(e.target.value);
  };

  const handleRemoveGame = (id) => {
    deleteGame(id);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    e.target.submit.setAttribute("disabled", "");
    if (website !== "") {
      const newGame = website;
      await sendGame(newGame);
    } else {
      modal("Campo vuoto", "neutral");
      e.target.submit.removeAttribute("disabled");
      return;
    }
    setTimeout(() => {
      e.target.submit.removeAttribute("disabled");
    }, 500);
  };

  return (
    <>
      <nav>
        <div className="logo-container">
          <a href="/">
            <img src={logo} alt="logo" className="logo" />
          </a>
        </div>
      </nav>
      <div className="input-container">
        {showModal && (
          <div className="modal" mood={modalText.mood}>
            <h3>{modalText.text}</h3>
            <hr />
          </div>
        )}
        <h3 className="enter-text">Enter the game URL you want to track:</h3>
        <form onSubmit={handleSubmit}>
          <input type="url" name="url" id="url" value={website} onChange={handleChange} />
          <button type="submit" id="submit">
            ADD GAME
          </button>
        </form>
      </div>
      {isLoading ? <p>Loading...</p> : <GameList games={games} handleRemoveGame={handleRemoveGame} />}

      <Footer />
    </>
  );
};

export default Home;
