import  React from "react";
import styled from 'styled-components';
import {IoLibrary} from 'react-icons/io5';
import {MdHomeFilled, MdSearch} from 'react-icons/md'
import Player from "./Player";
import logo_music from "../Assets/logo_music.png"
export default function Sidebar() {
    return (
        <Container>
            <div className= 'top_links'>
                <div className= 'logo'>
                    <img src={logo_music} alt= 'music-logo'/>
                </div>
                <ul>
                    <li>
                        <MdHomeFilled/>
                        <span>
                            Home
                        </span>
                    </li>
                    <li>
                        <MdSearch/>
                        <span>
                            Search
                        </span>
                    </li>
                    <li>
                        <IoLibrary/>
                        <span>
                            Your Library
                        </span>
                    </li>
                </ul>
            </div>
            <Player/>
        </Container>

    )
}

const Container = styled.div`
    background-color: #b4b3b0;
    color: #171515;
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 100%;
    font-size: 50%;
    .top_links {
        display: flex;
        flex-direction: column;

        .logo {

            text-align: center;
            // margin: 1rem 0;

            img {
                max-inline-size: 100%;
                block-size: auto;
            }
        }

        ul {
            list-style-type: none;
            display: flex;
            flex-direction: column;
            gap: 1rem;
            cursor: pointer;
            transition: 0.3s ease-in-out;
            padding-left: 5%;
            margin-top: 2%;

            li {
                &:hover {
                    color: white;
                }
            }
        }
    }
`;
