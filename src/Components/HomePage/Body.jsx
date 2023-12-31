import  React from "react";
import styled from 'styled-components';
import SongCard from "./SongCard";
import Error from "./Error";
import { genres } from '../Constants';
export default function Body() {
//const Body =() =>{
    const genreTitle = 'Pop';//genres.find(({ value }) => value === genreListId)?.title;
    return (
         <Container>
             <div className='group'>
                 {/*<div className="flex flex-col">*/}
                 {/*    <div className="w-full flex justify-between items-center sm:flex-row flex-col mt-4 mb-10">*/}
                 {/*        <h2 className="font-bold text-3xl text-white text-left">Body {genreTitle}</h2>*/}
                 <h2 style={{
                     fontWeight: 'bold',
                     fontSize: 'xx-small',
                     color: 'white',
                     textAlign: 'left'
                 }}>Body {genreTitle}</h2>
                         <select
                             onChange={() => {}}//dispatch(selectGenreListId(e.target.value))}
                             value=''//{genreListId || 'pop'}
                            //className="bg-black text-gray-300 p-3 text-sm rounded-lg outline-none sm:mt-0 mt-5"
                             className='selector'>
                             {genres.map((genre) => <option key={genre.value} value={genre.value}>{genre.title}</option>)}
                         </select>
             </div>

             {/*<div className="flex flex-wrap sm:justify-start justify-center gap-8">*/}
                <div className= 'card'>
                    {[1 , 2 , 3 ,4 ,5 ,6 ,7 ,8, 9, 10 , 11 ,12,13 ,14 ,15, 16 ,17 ,18, 19 ,20 ].map((song , i) =>(
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
         </Container>
    );
}
//export default Body;


const Container = styled.div`
   display: flex;
   flex-direction: column;
   .group{
       width: 100%;
       display: flex;
       justify-content: space-between;
       align-items: center;
       @media only screen and (max-width: 600px) 
       {
            flex-direction: row;
       }
       flex-direction: column;
       margin-top: 1rem;
       margin-bottom: 2.5rem;
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
       display: flex;
       flex-wrap: wrap;
       justify-content: center;
       gap: 2rem ;
       margin-top: 1.25rem ;
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

