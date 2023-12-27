import { Drawer, Box, Typography, IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { UserAvatar } from "./UserAvatar";
import { useState } from "react";
import { DrawerData } from "./DrawerData";
import "../Utils/MyDrawer.css";

export default function MyDrawer ()  {
  const [isDrawerOpen, SetIsDrawerOpen] = useState(false);
  return (
    <>
      <IconButton
        size="large"
        edge="start"
        color="inherit"
        aria-label="logo"
        onClick={() => SetIsDrawerOpen(true)}
      >
        <MenuIcon />
      </IconButton>
      <Drawer
        anchor="left"
        open={isDrawerOpen}
        onClose={() => SetIsDrawerOpen(false)}
      >
        <div className="MyDrawer">
          <ul className="DrawerList">
            <div className="UserAv">
              <UserAvatar className="AvatarLogo" />
              <div className="ProfileName">Harry Styles</div>
            </div>
            {DrawerData.map((val, key) => {
              return (
                <li
                  key={key}
                  className="DrawerRow"
                  id={window.location.pathname === val.link ? "active" : ""}
                  onClick={() => {
                    window.location.pathname = val.link;
                  }}
                >
                  <div id="icon">{val.icon}</div>
                  <div id="title">{val.title}</div>
                </li>
              );
            })}
          </ul>
        </div>
      </Drawer>
    </>
  );
};
