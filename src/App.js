import React from "react";
import "./App.css";
import MusicApp from "./Components/HomePage/MusicApp";
import { useDataLayerValue } from "./DataLayer";
import LoginSignUp from "./Components/LoginSignup/LoginSignup";
import ProfilePage from "./Components/ProfilePage/ProfilePage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MusicPlayerSlider from "./Components/SongPage/musicPlayCard.jsx";
import SongPage from "./Components/SongPage/SongPage.jsx";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/Home" element={<MusicApp />} />
          <Route path="/" element={<LoginSignUp />} />
          <Route path="/Profile" element={<ProfilePage />} />
          <Route path="/card" element={<MusicPlayerSlider />} />
          <Route path="/song" element={<SongPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
