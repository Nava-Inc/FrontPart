import Box from "@mui/material/Box";
import Artist1 from "../Assets/Artist1.jpg";
import {styled} from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import Typography from "@mui/material/Typography";
import * as React from "react";
import UploadButton from "../Utils/UploadButton";
import SongCard from "../HomePage/SongCard.jsx";
function getFontSize(isSmallScreen) {
    return isSmallScreen ? '0.75rem' : '1rem';
}
export default function ArtistBody(){

    const isSmallScreen = useMediaQuery('(max-width:600px)');
    const genreTitle = '';//genres.find(({ value }) => value === genreListId)?.title;

    return(
        <Box className="all_body">
            <Box className="img_descrip_upload" sx={{display: "flex", alignItems: 'center'}}>
                {/*<Box className="topbigspace" sx={{ width: '100%', overflow: 'hidden', display: "flex", marginTop: "2%"}}>*/}
                {/*<Widget className="box" sx={{width: isSmallScreen ? '280px' : '343px'}}>*/}
                {/*    <Box className="artist_img" sx={{ height:"100%",width:"100%",alignItems:"center",overflow: 'hidden', display: "flex", marginTop: "2%" }}>*/}
                {/*        /!*<CoverImage>*!/*/}
                {/*        <img className="ArtistImage"  src={Artist1} alt="Artist Image"/>*/}
                {/*        /!*</CoverImage>*!/*/}
                {/*    </Box>*/}
                {/*</Widget>*/}
                <Box className="artist_img" sx={{
                    height: "30%",
                    width: isSmallScreen ? "60%" : "30%",
                    alignItems: "center",
                    overflow: "hidden",
                    display: "flex",
                    marginTop: "2%",
                    "& img": {
                        width: "100%",
                        height: "auto",
                    },
                }}>
                    <img className="ArtistImage" src={Artist1} alt="Artist Image"/>
                    {/*</Box>*/}
                </Box>
                <Box className="description" sx={{ml: 1.5, minWidth: 0, width: isSmallScreen ? "30%" : "60%"}}>
                    <Typography variant="caption" color="text.secondary" fontWeight={500}
                                fontSize={getFontSize(isSmallScreen)}>
                        Jun Pulse
                    </Typography>
                    <Typography noWrap fontSize={getFontSize(isSmallScreen)}>
                        <b>คนเก่าเขาทำไว้ดี (Can&apos;t win)</b>
                    </Typography>
                    <Typography noWrap letterSpacing={-0.25} fontSize={getFontSize(isSmallScreen)}>
                        Chilling Sunday &mdash; คนเก่าเขาทำไว้ดี
                    </Typography>
                    <Box className="upload" sx={{marginTop: "5px"}}>
                        <UploadButton size={{width: "10rem", height: "3rem"}}
                        />
                    </Box>
                </Box>
            </Box>
            <div className='group'>
                <h2 style={{
                    fontWeight: 'bold',
                    fontSize: 'large',
                    // alignItems:"center",
                    textAlign: 'center',
                    color: "black"
                }}>your music{genreTitle}</h2>
            </div>
            <Box className='card' sx={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "center",
                gap: "2rem",
                marginTop: "1.25rem",
                marginBottom:"5rem"
            }}>
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20].map((song, i) => (
                    <SongCard
                        key={song.key}
                        song={song}
                        i={i}
                    />
                ))}
            </Box>
        </Box>
    )
}