import React from "react";
import { SongData } from "./SongData";
import MusicNoteIcon from "@mui/icons-material/MusicNote";
import "../SongList/SongList.css";

export const SongList = () => {
  return (
    <div>
      <ul className="ArtistSongList">
        {SongData.map((val, key) => {
          return (
            <li key={key} className="ArtistSongRow">
              <div id="musiclogo">
                <img src={MusicNoteIcon} alt="Logo" />
              </div>
              <div id="title">{val.title}</div>
              <div id="artist">{val.Artist}</div>
              <div id="description">{val.Description}</div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
