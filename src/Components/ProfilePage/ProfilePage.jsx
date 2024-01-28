// import { Container } from "@mui/material";
// import AppBar from "../Utils/AppBar";
// import MusicCard from "../Utils/MusicCard";
// import { MyDrawer } from "../Utils/MyDrawer";
// import SongCard from "../HomePage/SongCard";
// import UploadButton from "../Utils/UploadButton";
// import { SongList } from "../Utils/SongList/SongList";
// import Brad1 from "../Assets/Brad1.jpg";
// import React from "react";
// import "./ProfilePage.css";
//
// export default function ProfilePage() {
//   return (
//     <div>
//       <NavBar />
//       <Container className="ProfileContainer">
//         <div className="ProfileBody">
//           <img className="ArtistImage" src={Brad1} alt="Artist Image" />
//           <div className="ArtistInfo">
//             <div className="ArtistName">Profile Name </div>
//             <div className="ArtistDescription">Profile Description</div>
//           </div>
//         </div>
//
//         <UploadButton />
//       </Container>
//     </div>
//   );
// }
//
//
// //یوزر  پس ایمل خروج


import React from "react";
import NavBar from "../HomePage/NavBar.jsx";
import Footer from "../HomePage/Footer.jsx";
import styled from 'styled-components';
import ProfileBody from "./ProfileBody.jsx";
export default function ProfilePage(){
    return(
        <Container>
            <div className="navbar" sx={{height:"100%"}}>
                <NavBar/>
                <div className="profile_body">

                    <ProfileBody/>

                </div>

            </div>
            <div className="profile_footer">
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
    .profile_body {
        height: 100%;
        width: 100%;
        //background: linear-gradient(#F9E795,#F96167);
        background: linear-gradient(#44245E,#CBAED7);
        overflow: auto;
        text-align: center;
    }
    
    .profile_footer{
        display: flex;
    }
  //display: flex;
`;