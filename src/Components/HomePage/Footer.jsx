import  React from "react";
//import styled from 'styled-components';
//import {Container} from "@mui/material"
import playPause from "./PlayPause";
import PlayPause from "./PlayPause";
//import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Slider from '@mui/material/Slider';
import VolumeDown from '@mui/icons-material/VolumeDown';
import VolumeUp from '@mui/icons-material/VolumeUp';
import {Widgets} from "@mui/icons-material";


import { styled, useTheme } from '@mui/material/styles';

import Typography from '@mui/material/Typography';

import IconButton from '@mui/material/IconButton';
import PauseRounded from '@mui/icons-material/PauseRounded';
import PlayArrowRounded from '@mui/icons-material/PlayArrowRounded';
import FastForwardRounded from '@mui/icons-material/FastForwardRounded';
import FastRewindRounded from '@mui/icons-material/FastRewindRounded';
import VolumeUpRounded from '@mui/icons-material/VolumeUpRounded';
import VolumeDownRounded from '@mui/icons-material/VolumeDownRounded';
import logo_music from "../Assets/logo_music.png";
import { useState } from "react";
import useMediaQuery from '@mui/material/useMediaQuery';
import MailIcon from "@mui/icons-material/Mail";
import Badge from "@mui/material/Badge";
//import { PixelRatio } from 'react-native';
// function ButtonUsage(inputs) {
//     return <Button variant="contained">{inputs.name} {inputs.family}</Button>;
// }
const CoverImage = styled('div')({
    //maxWidth: "80px",
    //maxHeight:" 80px",
    objectFit: 'cover',
    overflow: 'hidden',
    flexShrink: 0,
    borderRadius: 8,
    //margin:"auto",
    //padding:"5px",
    display:"flex",
    //direction:"flex-start",
    maxInlineSize: '10%',
    // maxInlineSize: '50%',
    blockSize: 'auto',
    backgroundColor: 'rgba(0,0,0,0.08)',
    '& > img': {
        width: '100%',
    },
});
export default function Footer() {
    const [value, setValue] = React.useState(30);
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    const theme = useTheme();
    const [size, setSize] = useState(12);
    const matches = useMediaQuery('(min-width:600px)');
    const mainIconColor = theme.palette.mode === 'dark' ? '#fff' : '#000';
    const [paused, setPaused] = React.useState(false);
    const lightIconColor = theme.palette.mode === 'dark' ? 'rgba(255,255,255,0.4)' : 'rgba(0,0,0,0.4)';

    return (
        <Box >
            {
                matches ?
         <Box className="box-picture"  sx={{backgroundColor: theme.palette.mode === 'dark' ? 'rgba(0,0,0,0.6)' : 'rgba(255,255,255,0.4)',
            backdropFilter: 'blur(40px)',
            padding:"1%",
            display:"flex" ,
            width:"100%",
            height:"100%",
            alignItems:"center"
            }}>
            <CoverImage >
                {/*//sx={{width:"30%",height:"70%" }}>*/}
                <img
                    alt="can't win - Chilling Sunday"
                    // src="/static/images/sliders/chilling-sunday.jpg"
                    src={logo_music}
                    style={{display:"flex"}}
                    // sx={{blockSize: 'auto'}}
                />
            </CoverImage>


            <Box className="name" sx={{ ml: 1.5, minWidth: 0 ,flexWrap:"wrap"}}>

                <Typography variant="caption" color="text.secondary" fontWeight={500} fontSize="2vmin"  >
                    Jun Pulse
                </Typography>
                <Typography noWrap fontSize="2vmin">
                    <b>คนเก่าเขาทำไว้ดี (Can&apos;t win)</b>
                </Typography>
                <Typography noWrap letterSpacing={-0.25} fontSize="2vmin">
                    Chilling Sunday &mdash; คนเก่าเขาทำไว้ดี
                </Typography>
                {/*<span>{`(min-width:600px) matches:}`}</span>;*/}
            </Box>
             {/*<Box className="slider" sx={{width: "100%", justifyContent: "flex-end", display: "flex"}}>*/}
             {/*    <Box sx={{width: "20%"}}>*/}
             {/*        <Stack spacing={2} direction="row" sx={{mb: 1, alignItems: "center"}} alignItems="center">*/}
             {/*            <VolumeDown/>*/}
             {/*            <Slider aria-label="Volume" value={value} onChange={handleChange}/>*/}
             {/*            <VolumeUp/>*/}
             {/*        </Stack>*/}
             {/*        /!*<Slider disabled defaultValue={30} aria-label="Disabled slider" />*!/*/}
             {/*    </Box>*/}

             {/*</Box>*/}
             {/*<Box className="icon"  sx={{width: "100%", justifyContent: "center", display: "flex" ,}}>*/}
             {/*    <IconButton size="large" aria-label="show 4 new mails" color="inherit">*/}

             {/*                    <MailIcon />*/}

             {/*            </IconButton>*/}
             {/*<Box sx={{direction:"row"}}>*/}

             <Box className="icon"
                 sx={{
                     display: 'flex',
                     alignItems: 'center',
                     justifyContent: 'center',
                     //mt: -1,
                     ml:"8vmax",

                     width:"100%",
                     // direction:"row",
                     // mb:"1",
                 }}
             >
                 <IconButton aria-label="previous song">
                     <FastRewindRounded fontSize="medium" htmlColor={mainIconColor} />
                 </IconButton>
                 <IconButton
                     aria-label={paused ? 'play' : 'pause'}
                     onClick={() => setPaused(!paused)}
                 >
                     {paused ? (
                         <PlayArrowRounded
                             sx={{ fontSize: '2rem' }}
                             htmlColor={mainIconColor}
                         />
                     ) : (
                         <PauseRounded sx={{ fontSize: '2rem' }} htmlColor={mainIconColor} />
                     )}
                 </IconButton>
                 <IconButton aria-label="next song">
                     <FastForwardRounded fontSize="medium" htmlColor={mainIconColor} />
                 </IconButton>
              </Box>
                 <Box sx={{width:"100%" ,  justifyContent: "flex-end", display: "flex" ,alignItems:"flex-end" }}>
                     <Box sx={{width:"12rem" , fontSize:"1.5rem" }}>
                         <Stack spacing={2} direction="row" sx={{ mb: 1, px: 1 , marginRight: 2 }} alignItems="center">
                             <VolumeDownRounded htmlColor={mainIconColor}  />
                             <Slider
                                 aria-label="Volume"
                                 defaultValue={30}
                                 sx={{

                                     color: theme.palette.mode === 'dark' ? '#fff' : 'rgba(0,0,0,0.87)',
                                     '& .MuiSlider-track': {
                                         border: 'none',
                                     },
                                     '& .MuiSlider-thumb': {
                                         width: 24,
                                         height: 24,
                                         backgroundColor: '#fff',
                                         '&:before': {
                                             boxShadow: '0 4px 8px rgba(0,0,0,0.4)',
                                         },
                                         '&:hover, &.Mui-focusVisible, &.Mui-active': {
                                             boxShadow: 'none',
                                         },
                                     },
                                 }}
                             />
                             <VolumeUpRounded htmlColor={mainIconColor}/>
                         </Stack>
                     </Box>
                 </Box>
             
             {/*</Box>*/}
         </Box>
                : <Box className="box-picture"  sx={{backgroundColor: theme.palette.mode === 'dark' ? 'rgba(0,0,0,0.6)' : 'rgba(255,255,255,0.4)',
                        backdropFilter: 'blur(40px)',
                        padding:"1%",
                        display:"flex" ,
                        width:"100%",
                        height:"100%",
                        //alignItems:"start",
                        flexDirection:"row"
                        }}>
                    <Box className="music-name-pic" sx={{ flexDirection:"column" , maxWidth:"20%" }}>
                        <CoverImage sx={{ alignItems:"center" , maxBlockSize:"70%",maxInlineSize: '50%',marginLeft:"8%"}}>
                            {/*//sx={{width:"30%",height:"70%" }}>*/}
                            <img
                                alt="can't win - Chilling Sunday"
                                // src="/static/images/sliders/chilling-sunday.jpg"
                                src={logo_music}
                                style={{display:"flex"}}
                                // sx={{blockSize: 'auto'}}
                            />
                        </CoverImage>


                        <Box className="name" sx={{ ml: 1.5, minWidth: "10%" ,flexWrap:"wrap" , maxWidth:"90%" }}>

                            <Typography variant="caption" color="text.secondary" fontWeight={500} fontSize="1.5vw" >
                                Jun Pulse
                            </Typography>
                            <Typography noWrap fontSize="1.5vw">
                                <b>คนเก่าเขาทำไว้ดี (Can&apos;t win)</b>
                            </Typography>
                            <Typography noWrap letterSpacing={-0.25} fontSize="1.5vw">
                                Chilling Sunday &mdash; คนเก่าเขาทำไว้ดี
                            </Typography>
                            {/*<span>{`(min-width:600px) matches:}`}</span>;*/}
                        </Box>
                    </Box>

                        <Box className="icon"
                             sx={{
                                 display: 'flex',
                                 alignItems: 'center',
                                 justifyContent: 'center',
                                 //mt: -1,
                                 ml:"14%",

                                 width:"100%",
                                 // direction:"row",
                                 // mb:"1",
                             }}
                        >

                            <IconButton aria-label="previous song">
                                <FastRewindRounded fontSize="small" htmlColor={mainIconColor} />
                            </IconButton>
                            <IconButton
                                aria-label={paused ? 'play' : 'pause'}
                                onClick={() => setPaused(!paused)}
                            >
                                {paused ? (
                                    <PlayArrowRounded
                                        sx={{ fontSize: '1.5rem' }}
                                        htmlColor={mainIconColor}
                                    />
                                ) : (
                                    <PauseRounded sx={{ fontSize: '1.5rem' }} htmlColor={mainIconColor} />
                                )}
                            </IconButton>
                            <IconButton aria-label="next song">
                                <FastForwardRounded fontSize="small" htmlColor={mainIconColor} />
                            </IconButton>
                            <Box sx={{width:"100%" ,  justifyContent: "flex-end", display: "flex" ,alignItems:"flex-end" }}>
                                <Box sx={{width:"9rem" , fontSize:"1rem" }}>
                                    <Stack spacing={2} direction="row" sx={{ mb: 1, px: 1 , marginRight: 2 }} alignItems="center">
                                        <VolumeDownRounded htmlColor={mainIconColor}  fontSize="1rem" />
                                        <Slider
                                            aria-label="Volume"
                                            defaultValue={30}
                                            size="small"
                                            sx={{

                                                color: theme.palette.mode === 'dark' ? '#fff' : 'rgba(0,0,0,0.87)',
                                                '& .MuiSlider-track': {
                                                    border: 'none',
                                                },
                                                '& .MuiSlider-thumb': {
                                                    width: 12,
                                                    height: 12,
                                                    backgroundColor: '#fff',
                                                    '&:before': {
                                                        boxShadow: '0 4px 8px rgba(0,0,0,0.4)',
                                                    },
                                                    '&:hover, &.Mui-focusVisible, &.Mui-active': {
                                                        boxShadow: 'none',
                                                    },
                                                },
                                            }}
                                        />
                                        <VolumeUpRounded htmlColor={mainIconColor} fontSize="1rem"/>
                                    </Stack>
                                </Box>
                            </Box>
                        </Box>
                    </Box>
            }

        </Box>
          // <Box className="topbigspace" sx={{ width: '100%', overflow: 'hidden'}}>
          //    <Widget className="box">
          //
          //    </Widget>
         // {/*</Box>*/}
        // <Container sx={{margin: '30px', alignItems: "center"}}>
        //     {/*<div className= 'volume'>*/}
        //     <Box className="slider" sx={{width: "100%", justifyContent: "flex-end", display: "flex"}}>
        //         <Box sx={{width: "25%"}}>
        //             <Stack spacing={2} direction="row" sx={{mb: 1, alignItems: "center"}} alignItems="center">
        //                 <VolumeDown/>
        //                 {/*<Slider aria-label="Volume" value={value} onChange={handleChange}/>*/}
        //                 <VolumeUp/>
        //             </Stack>
        //             {/*<Slider disabled defaultValue={30} aria-label="Disabled slider" />*/}
        //         </Box>
        //
        //     </Box>
        //     <Box sx={{width: "60%", alignItems: "center", display: "flex"}}>
        //         <Slider
        //             size="small"
        //             defaultValue={70}
        //             aria-label="Small"
        //             valueLabelDisplay="auto"
        //         />
        //         {/*<Slider defaultValue={50} aria-label="Default" valueLabelDisplay="auto" />*/}
        //     </Box>
        //     {/*</div>*/}
        //     {/*<ButtonUsage name="saeed" family="zare"></ButtonUsage>*/}
        //     {/*<PlayPause>*/}
        //     {/*</PlayPause>*/}

        // </Container>

     );

}

// const Container = styled.div`
//     height: 100%;
//     width: 100%;
//     background-color: #ece5e5;
//     border-top: 1px solid #282828;
//     display: grid;
//     grid-template-columns: 1fr 2fr 1fr;
//     align-items: center;
//     justify-content: center;
//     padding: 0 1rem;
//     .volume{
//         align-items:center ;
//     }
//     .PlayPause{
//
//     }
// `;