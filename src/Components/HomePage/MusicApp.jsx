import React from 'react';
import styled from 'styled-components';
import NavBar from "./NavBar";
import Body from "./Body";
import Footer from "./Footer";
import Sidebar from "./Sidebar";
export default function MusicApp(){
    return(
        <Container>
            <div className = 'music_body'>
                <Sidebar />
                <div className= 'body'>
                    <NavBar />
                    <div className= 'body_content'>
                        <Body />
                    </div>
                </div>
            </div>
            <div className= 'music_footer'>
                <Footer />
            </div>
        </Container>
    )
}

//const Container = styled.div

// Styled component named StyledButton
const Container = styled.div`
    max-width: 100vw;
    max-height: 100vh;
    overflow: hidden;
    display: grid;
    grid-template-rows: 85vh 15vh;

    .music_body {
        display: grid;
        grid-template-columns: 15vw 85vw;
        height: 100%;
        width: 100%;
        //background: rgb(32, 87, 100) linear-gradient(transparent, rgba(16, 30, 40, 1));
        background: #4e1ea9 linear-gradient(transparent,rgba(112,155,136));
        .body {
            height: 100%;
            width: 100%;
            overflow: auto;
            text-align: center;

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

