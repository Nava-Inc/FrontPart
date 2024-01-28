import Box from "@mui/material/Box";
import TextField from '@mui/material/TextField';
import * as React from 'react';
import Brad1 from "../Assets/Brad1.jpg";
import useMediaQuery from "@mui/material/useMediaQuery";
import UserFild from "./UserFild.jsx";
import PasswordFild from "./PasswordFild.jsx";
import EmailFild from "./EmailFild.jsx";
import Button from "@mui/material/Button";

export default function ProfileBody(){
    const isSmallScreen = useMediaQuery('(max-width:500px)');

    return(
        <Box className="root" sx={{display:"flex", alignItems: 'center',flexDirection: "column"}}>
            <Box className="img" sx={{display: "flex", alignItems: 'center' , width:"100%" , margin:"auto"}}>
                <Box className="artist_img" sx={{
                    height: "30%",
                    width: isSmallScreen ? "30%" : "200px",
                    alignItems: "center",
                    overflow: "hidden",
                    display: "flex",
                    marginTop: "2%",
                    margin:"auto",
                    "& img": {
                        width: "100%",
                        height: "auto",
                    },
                }}>
                    <img className="ArtistImage" src={Brad1} alt="Artist Image"/>
                </Box>
            </Box>
            <Box sx={{width:isSmallScreen ? "80%" : "400px"}}>
                <UserFild/>
                <PasswordFild/>
                <EmailFild/>
                <Button variant="contained" color="secondary" sx={{width:isSmallScreen ? "90%" : "360px" }}>Log Out </Button>
            </Box>

        </Box>
    )
}