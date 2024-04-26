import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

/*Pages*/
import Home from "./pages/Home";
import GamePageLayout from "./pages/GamePageLayout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:gameId" element={<GamePageLayout />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
