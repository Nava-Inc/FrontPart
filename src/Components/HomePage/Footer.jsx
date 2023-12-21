import  React from "react";
import styled from 'styled-components';
import playPause from "./PlayPause";
import PlayPause from "./PlayPause";
export default function Footer() {
    return (
        <Container>
            <PlayPause>

            </PlayPause>
        </Container>
    )
}

const Container = styled.div`
    height: 100%;
    width: 100%;
    background-color: #ece5e5;
    border-top: 1px solid #282828;
    display: grid;
    grid-template-columns: 1fr 2fr 1fr;
    align-items: center;
    justify-content: center;
    padding: 0 1rem;
    .PlayPause{
        
    }
`;