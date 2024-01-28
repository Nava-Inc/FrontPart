// import { Container } from "@mui/material";
// import Chip from "@mui/material/Chip";
// import AppBar from "../Utils/AppBar";
// import MusicCard from "../Utils/MusicCard";
// import { MyDrawer } from "../Utils/MyDrawer";
// import SongCard from "../HomePage/SongCard";
// import UploadButton from "../Utils/UploadButton";
// import { SongList } from "../Utils/SongList/SongList";
// import Artist1 from "../Assets/Artist1.jpg";
// import React from "react";
// import "./ArtistPage.css";
// import NavBar from "../HomePage/NavBar.jsx";
//
// function ArtistPage() {
//   return (
//     <div>
//       {/*<AppBar />*/}
//       <NavBar/>
//       <Container className="ArtistContainer">
//         <div className="ArtistBody">
//           {/*<img className="ArtistImage" src={Artist1} alt="Artist Image" />*/}
//           <div className="ArtistInfo">
//             <div className="ArtistName">Artist Name </div>
//             <div className="ArtistDescription">Artist Description</div>
//           </div>
//         </div>
//         <div className="Songstitle">
//           <Chip label="TopSongs" size="medium" />
//         </div>
//         <div className="SongListItems">
//           <SongList />
//         </div>
//
//         <UploadButton />
//       </Container>
//     </div>
//   );
// }
//
// export default ArtistPage;
//


// import {Container} from "@mui/material";
import React from "react";
import NavBar from "../HomePage/NavBar.jsx";
import Footer from "../HomePage/Footer.jsx";
import styled from 'styled-components';
import ArtistBody from "./ArtistBody.jsx";
export default function ArtistPage(){
  return(
      <Container>
          <div className="navbar" sx={{height:"100%"}}>
              <NavBar/>
              <div className="artist_body">

                  <ArtistBody/>

              </div>

          </div>
          <div className="artist_footer">
              <Footer/>
          </div>
      </Container>
  )
}

const Container = styled.div`
    max-width: 100vw;
    max-height: 100%;
    overflow: hidden;
    display: grid;
    grid-template-rows: 85vh 15vh;
    .artist_body {
        height: 100%;
        width: 100%;
        //background: linear-gradient(#F9E795,#F96167);
        background: linear-gradient(#8AAAE5,#FFFFFF);
        overflow: auto;
        text-align: center;
    }
    
    .artist_footer{
        display: flex;
    }
  //display: flex;
`;