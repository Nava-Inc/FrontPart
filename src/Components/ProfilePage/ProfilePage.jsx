import { Container } from "@mui/material";
import AppBar from "../Utils/AppBar";
import MusicCard from "../Utils/MusicCard";
import { MyDrawer } from "../Utils/MyDrawer";
import SongCard from "../HomePage/SongCard";
import UploadButton from "../Utils/UploadButton";
import { SongList } from "../Utils/SongList/SongList";
import Brad1 from "../Assets/Brad1.jpg";
import React from "react";
import "./ProfilePage.css";

function ProfilePage() {
  return (
    <div>
      <AppBar />
      <Container className="ProfileContainer">
        <div className="ProfileBody">
          <img className="ArtistImage" src={Brad1} alt="Artist Image" />
          <div className="ArtistInfo">
            <div className="ArtistName">Profile Name </div>
            <div className="ArtistDescription">Profile Description</div>
          </div>
        </div>

        <UploadButton />
      </Container>
    </div>
  );
}

export default ProfilePage;
