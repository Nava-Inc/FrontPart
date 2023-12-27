import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Slider from '@mui/material/Slider';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import PauseRounded from '@mui/icons-material/PauseRounded';
import PlayArrowRounded from '@mui/icons-material/PlayArrowRounded';
import FastForwardRounded from '@mui/icons-material/FastForwardRounded';
import FastRewindRounded from '@mui/icons-material/FastRewindRounded';
import VolumeUpRounded from '@mui/icons-material/VolumeUpRounded';
import VolumeDownRounded from '@mui/icons-material/VolumeDownRounded';
import logo_music from "../Assets/logo_music.png";
import useMediaQuery from "@mui/material/useMediaQuery";
import SongCard from "../HomePage/SongCard.jsx";
import { genres } from '../Constants';

function getIconSize(isSmallScreen) {
     return isSmallScreen ? '2.5rem' : '3.5rem';
}
function getFontSize(isSmallScreen) {
    return isSmallScreen ? '0.75rem' : '1rem';
}
function getWidgetSize(isSmallScreen) {
    return isSmallScreen ? '343' : '100';
}
const WallPaper = styled('div')({
    position: 'absolute',
    width: '100%',
    height: '100%',
    top: '67.5px',
    left: 0,
    overflow: 'hidden',
    //objectFit:"cover",
    background: 'linear-gradient(rgb(255, 38, 142) 0%, rgb(255, 105, 79) 100%)',
    transition: 'all 500ms cubic-bezier(0.175, 0.885, 0.32, 1.275) 0s',
    '&:before': {
        content: '""',
        width: '140%',
        height: '140%',
        position: 'absolute',
        top: '-40%',
        right: '-50%',
        background:
            'radial-gradient(at center center, rgb(62, 79, 249) 0%, rgba(62, 79, 249, 0) 64%)',
    },
    '&:after': {
        content: '""',
        width: '140%',
        height: '140%',
        position: 'absolute',
        bottom: '-50%',
        left: '-30%',
        background:
            'radial-gradient(at center center, rgb(247, 237, 225) 0%, rgba(247, 237, 225, 0) 70%)',
        transform: 'rotate(30deg)',
    },
});


const Widget = styled('div')(({ theme }) => ({
    padding: 16,
    borderRadius: 16,
    width: 343,
    maxWidth: '100%',
    margin: 'auto',
    position: 'relative',
    zIndex: 1,
    backgroundColor:
        theme.palette.mode === 'dark' ? 'rgba(0,0,0,0.6)' : 'rgba(255,255,255,0.4)',
    backdropFilter: 'blur(40px)',
}));

const CoverImage = styled('div')({
    width: 100,
    height: 100,
    objectFit: 'cover',
    overflow: 'hidden',
    flexShrink: 0,
    borderRadius: 8,
    backgroundColor: 'rgba(0,0,0,0.08)',
    '& > img': {
        width: '100%',
    },
});

const TinyText = styled(Typography)({
    fontSize: '0.75rem',
    opacity: 0.38,
    fontWeight: 500,
    letterSpacing: 0.2,
});
export default function SongBody(){
    const theme = useTheme();
    const duration = 200; // seconds
    const [position, setPosition] = React.useState(32);
    const [paused, setPaused] = React.useState(false);
    function formatDuration(value) {
        const minute = Math.floor(value / 60);
        const secondLeft = value - minute * 60;
        return `${minute}:${secondLeft < 10 ? `0${secondLeft}` : secondLeft}`;
    }
    const mainIconColor = theme.palette.mode === 'dark' ? '#fff' : '#000';
    const lightIconColor =
        theme.palette.mode === 'dark' ? 'rgba(255,255,255,0.4)' : 'rgba(0,0,0,0.4)';

    const isSmallScreen = useMediaQuery('(max-width:600px)');
    return(
        <Box>
            <Box className="topbigspace" sx={{ width: '100%', overflow: 'hidden', display: "flex", marginTop: "2%"}}>
                <Widget className="box" sx={{width: isSmallScreen ? '280px' : '343px'}}>
                    <Box className="icon-size" clone fontSize={{xsm: "1rem", sm: "1.5rem",}}>
                        <Box className="alii" sx={{display: 'flex', alignItems: 'center'}}>
                            <CoverImage>
                                <img
                                    alt="can't win - Chilling Sunday"
                                    src={logo_music}//"/static/images/sliders/chilling-sunday.jpg"
                                />
                            </CoverImage>
                            <Box sx={{ml: 1.5, minWidth: 0}}>
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
                            </Box>
                        </Box>
                        <Slider
                            aria-label="time-indicator"
                            size="small"
                            value={position}
                            min={0}
                            step={1}
                            max={duration}
                            onChange={(_, value) => setPosition(value)}
                            sx={{
                                color: theme.palette.mode === 'dark' ? '#fff' : 'rgba(0,0,0,0.87)',
                                height: 4,
                                '& .MuiSlider-thumb': {
                                    width: 8,
                                    height: 8,
                                    transition: '0.3s cubic-bezier(.47,1.64,.41,.8)',
                                    '&:before': {
                                        boxShadow: '0 2px 12px 0 rgba(0,0,0,0.4)',
                                    },
                                    '&:hover, &.Mui-focusVisible': {
                                        boxShadow: `0px 0px 0px 8px ${
                                            theme.palette.mode === 'dark'
                                                ? 'rgb(255 255 255 / 16%)'
                                                : 'rgb(0 0 0 / 16%)'
                                        }`,
                                    },
                                    '&.Mui-active': {
                                        width: 20,
                                        height: 20,
                                    },
                                },
                                '& .MuiSlider-rail': {
                                    opacity: 0.28,
                                },
                            }}
                        />
                        <Box
                            sx={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'space-between',
                                mt: -2,
                            }}
                        >
                            <TinyText>{formatDuration(position)}</TinyText>
                            <TinyText>-{formatDuration(duration - position)}</TinyText>
                        </Box>
                        <Box
                            sx={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                mt: -1,
                            }}
                        >
                            <IconButton aria-label="previous song">
                                <FastRewindRounded fontSize={isSmallScreen ? 'medium' : 'large'}
                                                   htmlColor={mainIconColor}/>
                            </IconButton>
                            <IconButton
                                aria-label={paused ? 'play' : 'pause'}
                                onClick={() => setPaused(!paused)}
                            >
                                {paused ? (
                                    <PlayArrowRounded
                                        sx={{fontSize: getIconSize(isSmallScreen)}}
                                        htmlColor={mainIconColor}
                                    />
                                ) : (
                                    <PauseRounded sx={{fontSize: getIconSize(isSmallScreen)}}
                                                  htmlColor={mainIconColor}/>
                                )}
                            </IconButton>
                            <IconButton aria-label="next song">
                                <FastForwardRounded fontSize={isSmallScreen ? 'medium' : 'large'}
                                                    htmlColor={mainIconColor}/>
                            </IconButton>
                        </Box>
                        <Stack spacing={2} direction="row" sx={{mb: 1, px: 1}} alignItems="center">
                            <VolumeDownRounded htmlColor={lightIconColor} fontSize="inherit"/>
                            <Slider
                                aria-label="Volume"
                                defaultValue={30}
                                size={isSmallScreen ? 'small' : 'medium'}
                                sx={{
                                    color: theme.palette.mode === 'dark' ? '#fff' : 'rgba(0,0,0,0.87)',
                                    '& .MuiSlider-track': {
                                        border: 'none',
                                    },
                                    '& .MuiSlider-thumb': {
                                        width: isSmallScreen ? 'small' : 'medium',
                                        height: isSmallScreen ? 'small' : 'medium',
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

                            <VolumeUpRounded htmlColor={lightIconColor} fontSize="inherit"/>

                        </Stack>
                    </Box>
                </Widget>

            </Box>

                <Box sx={{
                    fontWeight: 'bold',
                    fontSize: 'small',
                    color: 'white',
                    textAlign: 'left',
                    display:"flex",
                    margin: "5%",
                    marginTop:"3vmin"

                }}>
                    <Typography>
                    Other song
                    </Typography>

                </Box>
            <Box className='card' sx={{display: "flex",
                flexWrap: "wrap",
                justifyContent: "center",
                gap: "2rem" ,
                marginTop: "1.25rem" }}>
                {[1 , 2 , 3 ,4 ,5 ,6 ,7 ,8, 9, 10 , 11 ,12,13 ,14 ,15, 16 ,17 ,18, 19 ,20 ].map((song , i) =>(
                    <SongCard
                        key={song.key}
                        song={song}
                        i={i}
                    />
                ))}
            </Box>
            {/*<WallPaper/>*/}

    </Box>
    );
}