import React from "react";
import HomeIcon from "@mui/icons-material/Home";
import EventIcon from "@mui/icons-material/Event";
import ProfileIcon from "@mui/icons-material/Person";
import Logout from "@mui/icons-material/Logout";
import LibraryMusicIcon from "@mui/icons-material/LibraryMusic";
import HeadphonesIcon from "@mui/icons-material/Headphones";
import Person4Icon from "@mui/icons-material/Person4";
import FavoriteIcon from "@mui/icons-material/Favorite";
export const DrawerData = [
  {
    title: "Home",
    icon: <HomeIcon />,
    link: "./Home",
  },

  {
    title: "Profile",
    icon: <ProfileIcon />,
    link: "./Profile",
  },

  {
    title: "Events",
    icon: <EventIcon />,
    link: "./Home",
  },

  {
    title: "Songs",
    icon: <HeadphonesIcon />,
    link: "./profile",
  },

  {
    title: "Library",
    icon: <LibraryMusicIcon />,
    link: "./Profile",
  },

  {
    title: "Artists",
    icon: <Person4Icon />,
    link: "./Profile",
  },

  {
    title: "Favorites",
    icon: <FavoriteIcon />,
    link: "./Profile",
  },

  {
    title: "LogOut",
    icon: <Logout />,
    link: "./",
  },
];
