import { Container } from "@mui/material";
import Chip from "@mui/material/Chip";
import AppBar from "../Utils/AppBar";
import MusicCard from "../Utils/MusicCard";
import { MyDrawer } from "../Utils/MyDrawer";
import SongCard from "../HomePage/SongCard";
import UploadButton from "../Utils/UploadButton";
import { SongList } from "../Utils/SongList/SongList";
import Artist1 from "../Assets/Artist1.jpg";
import React from "react";
import "./ArtistPage.css";

function ArtistPage() {
  return (
    <div>
      <AppBar />
      <Container className="ArtistContainer">
        <div className="ArtistBody">
          <img className="ArtistImage" src={Artist1} alt="Artist Image" />
          <div className="ArtistInfo">
            <div className="ArtistName">Artist Name </div>
            <div className="ArtistDescription">Artist Description</div>
          </div>
        </div>
        <div className="Songstitle">
          <Chip label="TopSongs" size="medium" />
        </div>
        <div className="SongListItems">
          <SongList />
        </div>

        <UploadButton />
      </Container>
    </div>
  );
}

export default ArtistPage;
