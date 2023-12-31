import { Button, Container } from "@mui/material";
import AppBar from "../Utils/AppBar";
import { MyDrawer } from "../Utils/MyDrawer";
import user_icon from "../Assets/person.png";
import password_icon from "../Assets/password.png";
import UploadButton from "../Utils/UploadButton";
import EditIcon from "@mui/icons-material/Edit";
import SaveIcon from "@mui/icons-material/Save";
import Brad1 from "../Assets/Brad1.jpg";
import React from "react";
import "./ProfileSettings.css";

function ProfileSettings() {
  return (
    <div>
      <AppBar />
      <Container className="settingContainer">
        <div className="settingBody">
          <img className="ArtistImage" src={Brad1} alt="Artist Image" />
          <div className="userinfo1">
            <div>FirstName</div>
            <div>LastName</div>
            <div>UserName</div>
          </div>
        </div>

        <div className="userinputs">
          <div className="userinput">
            <img src={user_icon} alt="" />
            <input type="text" placeholder="FirstName" />
          </div>

          <div className="userinput">
            <img src={user_icon} alt="" />
            <input type="text" placeholder="LastName" />
          </div>

          <div className="userinput">
            <img src={user_icon} alt="" />
            <input type="text" placeholder="UserName" />
          </div>

          <div className="userinput">
            <img src={password_icon} alt="" />
            <input type="text" placeholder="Password" />
          </div>
        </div>
        <div className="userbuttons">
          <Button
            className="userbutton1"
            variant="contained"
            onClick={() => {}}
            startIcon={<EditIcon />}
          >
            Edit
          </Button>
          <Button
            className="userbutton2"
            variant="contained"
            onClick={() => {}}
            startIcon={<SaveIcon />}
          >
            Save
          </Button>
          <UploadButton className="uploadbutton" />
        </div>
      </Container>
    </div>
  );
}

export default ProfileSettings;
