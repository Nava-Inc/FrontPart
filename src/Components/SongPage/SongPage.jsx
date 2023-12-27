import NavBar from "../HomePage/NavBar.jsx";
import Footer from "../HomePage/Footer.jsx";
import React from "react";
import MusicPlayerSlider from "./musicPlayCard.jsx";
import Body from "../HomePage/Body.jsx";



import styled from 'styled-components';
import SongBody from "./SongBody.jsx";
import Box from "@mui/material/Box";
export default function SongPage(){
    return(
        <Container  >
            <div className='music_body' sx={{height:"100%"}}>
                <NavBar/>
                <div className='body'>
                    {/*<MusicPlayerSlider/>*/}
                    <SongBody />
                    {/*<div className= 'body_content'>*/}
                    {/*    <Body />*/}
                    {/*</div>*/}
                </div>
            </div>
            <div className='music_footer'>
                <Footer />
            </div>
        </Container>
        // <Container>
        //     <div className = 'song_body'>
        //             <NavBar/>
        //             {/*<div className= 'body_content'>*/}
        //             {/*    <MusicPlayerSlider />*/}
        //             {/*</div>*/}
        //     </div>
        //     {/*<div className= 'music_footer'>*/}
        //     {/*    <Footer />*/}
        //     {/*</div>*/}
        // </Container>
    )
}

const Container = styled.div`
    max-width: 100vw;
    max-height: 100vh;
    overflow: hidden;
    display: grid;
    grid-template-rows: 85vh 15vh;
    .music_body {
        //display: grid;
        //grid-template-columns: 15vw 85vw;
        height: 100%;
        width: 100%;
       // justify-content: center;
        //font-size: medium;
        //background: rgb(32, 87, 100) linear-gradient(transparent, rgba(16, 30, 40, 1));
        //background: #4e1ea9 linear-gradient(transparent,rgba(112,155,136));
        background: linear-gradient(rgb(255, 38, 142) 0%, rgb(255, 105, 79) 100%);
        transition: all 500ms cubic-bezier(0.175, 0.885, 0.32, 1.275) 0s;
       // overflow: auto;
        //text-align: center;
        .body {
            height:100%;
            width: 100%;
            overflow: auto;
            text-align: center;
           // align-items:  ;
           /* &::-webkit-scrollbar {
                width: 0.7rem;
                max-height: 2rem;

                &-thumb {
                    background-color: rgba(225, 216, 216, 0.6);
                }
            }*/
        }
    }
    .music_footer {
        display: flex;
        //background-color: rgb(235,235,235);
        
       // padding-inline: 2px;
    }
//<div style={{ padding: '0', alignItems:"center" }}>
`;

