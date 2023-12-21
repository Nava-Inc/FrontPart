import logo from './logo.svg';
import './App.css';
//import LoginSignup from './Components/LoginSignup/LoginSignup';
/***/
//import logo from './logo.svg';
import React from 'react';
import './App.css';
import MusicApp from "./Components/HomePage/MusicApp";
//import Login from './Login';
import { useDataLayerValue } from "./DataLayer";
/***/

function App() {
  return (
    <div >
        {/*<LoginSignup/>*/}
        <MusicApp/>
    </div>
  );
}

export default App;
