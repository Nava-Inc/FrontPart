// const SongCard =() =>(
//     <div>
//         SongCard
//     </div>
// );
import React from 'react';
import styled from 'styled-components';

//import { Link } from 'react-router-dom';
//import { useDispatch } from 'react-redux';

import PlayPause from './PlayPause';
//import { playPause, setActiveSong } from '../API/playerSlice';

//const SongCard = ({ song,i}) => {// isPlaying, activeSong, data, i }) => {
export default function SongCard() {
    // const dispatch = useDispatch();
    //
    // const handlePauseClick = () => {
    //     dispatch(playPause(false));
    // };
    //
    // const handlePlayClick = () => {
    //     dispatch(setActiveSong({ song, data, i }));
    //     dispatch(playPause(true));
    // };

    return (
        <Container>
            <div className= 'background'>
                <div className='hight'>
                    <div className='point'>
                        {/*<div className={activeSong?.title === song.title ? 'flex bg-black bg-opacity-70' : 'hidden'}></div>*/}
                        {/*<PlayPause*/}
                        {/*    isPlaying={isPlaying}*/}
                        {/*    activeSong={activeSong}*/}
                        {/*    song={song}*/}
                        {/*    handlePause={handlePauseClick}*/}
                        {/*    handlePlay={handlePlayClick}*/}
                        {/*/>*/}
                    </div>
                </div>
            </div>

        {/*<div className="flex flex-col w-[250px] p-4 bg-white/5 bg-opacity-80 backdrop-blur-sm animate-slideup rounded-lg cursor-pointer">*/}
        {/*    <div className="relative w-full h-56 group">*/}
        {/*        <div className={`absolute inset-0 justify-center items-center bg-black bg-opacity-50 group-hover:flex ${activeSong?.title === song.title ? 'flex bg-black bg-opacity-70' : 'hidden'}`}>*/}

        {/*        </div>*/}
        {/*        <img alt="song_img" src={song.images?.coverart} className="w-full h-full rounded-lg" />*/}
        {/*    </div>*/}

        {/*    <div className="mt-4 flex flex-col">*/}
        {/*        <p className="font-semibold text-lg text-white truncate">*/}
        {/*            <Link to={`/songs/${song?.key}`}>*/}
        {/*                {song.title}*/}
        {/*            </Link>*/}
        {/*        </p>*/}
        {/*        <p className="text-sm truncate text-gray-300 mt-1">*/}
        {/*            <Link to={song.artists ? `/artists/${song?.artists[0]?.adamid}` : '/top-artists'}>*/}
        {/*                {song.subtitle}*/}
        {/*            </Link>*/}
        {/*        </p>*/}
        {/*    </div>*/}
        {/*</div>*/}
        </Container>
    );
};

//export default SongCard;
const Container = styled.div`
    .background {
        display: flex;
        flex-direction: column;
        width: 250px;
        padding: 1rem;
        background-color: rgba(255, 255, 255, 0.8);
        backdrop-filter: blur(10px);
        cursor: pointer;
        border-radius: 0.5rem;
        animation: slideup 0.5s ease-in-out;
        .hight{
            position: relative;
            width: 100%;
            height: 14.625rem;
            cursor: pointer;
            .point{
                position: absolute ;
                top: 0;
                right: 0;
                bottom: 0;
                left: 0;
                display: flex;
                justify-content: center;
                align-items: center;
                transition: 0.2s ease-in-out;
                &:hover {
                    background-color: rgba(0, 0, 0, 0.5);
                    cursor: pointer;
                }
            }
        }
    }
    
    `;