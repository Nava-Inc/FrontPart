import React from "react";
import "./App.css";
import MusicApp from "./Components/HomePage/MusicApp";
import { useDataLayerValue } from "./DataLayer";
import LoginSignUp from "./Components/LoginSignup/LoginSignup";
import ProfilePage from "./Components/ProfilePage/ProfilePage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MusicPlayerSlider from "./Components/HomePage/musicPlayCard.jsx";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/Home" element={<MusicApp />} />
          <Route path="/" element={<LoginSignUp />} />
          <Route path="/Profile" element={<ProfilePage />} />
            <Route path="/card" element={<MusicPlayerSlider />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
