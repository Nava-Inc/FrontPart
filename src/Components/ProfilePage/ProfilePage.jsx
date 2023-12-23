import { Container } from "@mui/material";
import AppBar from "../Utils/AppBar";
import MusicCard from "../Utils/MusicCard";
import { MyDrawer } from "../Utils/MyDrawer";
import UploadButton from "../Utils/UploadButton";
import React from "react";
import "../ProfilePage/ProfilePage.css";

function ProfilePage() {
  return (
    <div>
      <AppBar />
      <Container className="ProfileContainer">
        <div className="ProfileBody">ProfilePage</div>

        <UploadButton />
      </Container>
    </div>
  );
}

export default ProfilePage;
