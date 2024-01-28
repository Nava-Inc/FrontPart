import  React from "react";
import styled from 'styled-components';
import SongCard from "./SongCard";
import Error from "./Error";
import { genres } from '../Constants';
import logo_music from "../Assets/logo_music.png";
export default function Body() {
//const Body =() =>{
    const genreTitle = '';//genres.find(({ value }) => value === genreListId)?.title;
    return (
        <Container>
            {/*<div className='top_picture'>*/}
            {/*    /!*<h2 style={{*!/*/}
            {/*    /!*    fontWeight: 'bold',*!/*/}
            {/*    /!*    fontSize: 'small',*!/*/}
            {/*    /!*    color: 'white',*!/*/}
            {/*    /!*    textAlign: 'center'*!/*/}
            {/*    /!*}}>Body {genreTitle}</h2>*!/*/}
            {/*    <img*/}
            {/*        alt="can't win - Chilling Sunday"*/}
            {/*        // src="/static/images/sliders/chilling-sunday.jpg"*/}
            {/*        src={logo_music}*/}
            {/*        // style={{display: "flex"}}*/}
            {/*        // sx={{blockSize: 'auto'}}*/}
            {/*    />*/}
            {/*</div>*/}
            <div className='group'>
                {/*<div className="flex flex-col">*/}
                {/*    <div className="w-full flex justify-between items-center sm:flex-row flex-col mt-4 mb-10">*/}
                {/*        <h2 className="font-bold text-3xl text-white text-left">Body {genreTitle}</h2>*/}
                <h2 style={{
                    fontWeight: 'bold',
                    fontSize: 'small',
                    color: 'white',
                    textAlign: 'left'
                }}>Trend{genreTitle}</h2>
                {/*<select*/}
                {/*    onChange={() => {}}//dispatch(selectGenreListId(e.target.value))}*/}
                {/*    value=''//{genreListId || 'pop'}*/}
                {/*   //className="bg-black text-gray-300 p-3 text-sm rounded-lg outline-none sm:mt-0 mt-5"*/}
                {/*    className='selector'>*/}
                {/*    {genres.map((genre) => <option key={genre.value} value={genre.value}>{genre.title}</option>)}*/}
                {/*</select>*/}
            </div>

            {/*<div className="flex flex-wrap sm:justify-start justify-center gap-8">*/}
            <div className='card'>
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20].map((song, i) => (
                    <SongCard
                        key={song.key}
                        song={song}
                        i={i}
                    />
                ))}
                {/*{data?.map((song, i) => (*/}
                {/*   <SongCard*/}
                {/*       key={song.key}*/}
                {/*       song={song}*/}
                {/*       isPlaying={isPlaying}*/}
                {/*       activeSong={activeSong}*/}
                {/*       data={data}*/}
                {/*       i={i}*/}
                {/*   />*/}
                {/*))}*/}
                {/*</div>*/}
            </div>
            <div className='group'>
                <h2 style={{
                    fontWeight: 'bold',
                    fontSize: 'small',
                    color: 'white',
                    textAlign: 'left'
                }}>For You{genreTitle}</h2>
            </div>
            <div className='card'>
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20].map((song, i) => (
                    <SongCard
                        key={song.key}
                        song={song}
                        i={i}
                    />
                ))}
            </div>
            <div className='group'>
                <h2 style={{
                    fontWeight: 'bold',
                    fontSize: 'small',
                    color: 'white',
                    textAlign: 'left'
                }}>Top Artist{genreTitle}</h2>
            </div>
            <div className='card' >
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20].map((song, i) => (
                    <SongCard
                        key={song.key}
                        song={song}
                        i={i}
                    />
                ))}
            </div>
        </Container>
    );
}
//export default Body;


const Container = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 100%;
    width: 100%;
    //overflow-x: auto;
    //overflow-y:auto ;
    //.top_picture {
    //    padding: 16%;
    //    border-radius: 16%;
    //    width: 343px;
    //    max-width: 100%;
    //    margin: auto;
    //    position: relative;
    //    z-index: 1;
    //    //backgroundColor:
    //    //theme.palette.mode === dark ? rgba(0,0,0,0.6) : rgba(255,255,255,0.4);
    // //backdrop-filter : blur(40px);
    //    .img{
    //        width: 100%;
    //        height: 100%;
    //        object-fit: cover;
    //        overflow: hidden;
    //        flex-shrink: 0;
    //        border-radius: 8%;
    //        background-color: rgba(0,0,0,0.08);
    //    }
    //}
    //   //width: 100%;
    //   // //height: 50%;
    //   // display: flex;
    //    justify-content: center;
    //    align-items: center;
    //   // //margin-top: 1rem;
    //   // margin-bottom: 0.5rem;
    //   // //margin-left: 20%;
    //   // //margin-right: 20%;
    //    margin: auto;
    //   // max-height: 30%;
    //   // max-width: 30%;
    //   //  .img{
    //   // max-height: 10%;
    //   // max-width: 10%;
    //    //maxWidth: "80px",
    //    //maxHeight:" 80px",
    //    //object-fit: cover;
    //    //overflow: hidden;
    //    //flex-shrink: 0;
    //    //border-radius: 8%;
    //    ////margin:"auto",
    //    ////padding:"5px",
    //    //display:flex;
    //    ////direction:"flex-start",
    //    //max-inline-size: 10%;
    //    //// maxInlineSize: '50%',
    //    
    //    //background-color: rgba(0,0,0,0.08);
    //    //max-height: 20%;
    //    .img{
    //        display: inherit;
    //        //overflow-block: visible;
    //    //width: 100%;
    //    //    max-block-size: 5%;
    //        //max-width: 10rem;
    //        //max-height: 10rem;
    //        //margin: 20%;
    //    }
    //    
    //}

    .group {
        width: 100%;
        display: flex;
        justify-content: center;
       align-items: center;
       @media only screen and (max-width: 600px) 
       {
            flex-direction: row;
       }
       flex-direction: column;
       margin-top: 1rem;
       margin-bottom: 0.5rem;
       .selector{
           background-color: black;
           color: #D1D5DB;
           padding: 0.25%;
           font-size: xx-small;
           border-radius: 50%;
           outline: none;
           margin-top: 0.25%;
       }
   } 
   
   .card{
       flex-direction: row;
       display: flex;
       width: 90%;
       max-width: 90vw;
       margin: 0 auto;
       justify-content: space-between;
       //max-width: 100%;
       
       //max-width: max-content;
       //max-width: 40%;
       flex-wrap: nowrap;
       //justify-content: center;
       gap: 2rem ;
       margin-top: 1.25rem ;
       overflow-x: auto;
       padding-bottom: 1rem;
       //margin: auto;
       //margin-right: 1rem;
       //margin-left: 1rem;
       //overflow-x: auto;
       //block-size: inherit;
       //flex-direction: row;
   .songcard{
       //flex-direction: row;
       flex: 0 0 auto; 
      // margin: 1rem;
       //flex-shrink: 0;
       //margin-right: 1rem;
       
   }
   }
    
`;
/*
import { useDispatch, useSelector } from 'react-redux';


import { selectGenreListId } from '../redux/features/playerSlice';
import { useGetSongsByGenreQuery } from '../redux/services/shazamCore';


const Discover = () => {
  const dispatch = useDispatch();
  const { genreListId } = useSelector((state) => state.player);
  const { activeSong, isPlaying } = useSelector((state) => state.player);
  const { data, isFetching, error } = useGetSongsByGenreQuery(genreListId || 'POP');

  if (isFetching) return <Loader title="Loading songs..." />;

  if (error) return <Error />;



  return (
  );

};
*/

