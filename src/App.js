import React from 'react';
import './App.css';
import Header from './components/Header'
import styled from "styled-components";
import Home from './components/Home'
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom"; 
import MarvelAll from './components/MarvelAll';
import DisneyAll from './components/DisneyAll';
import Movies from './components/Movies';
import Watchlist from './components/Watchlist';
import Login from './components/Login';
import Player from './components/Player';

function App() {
  return (
    <div className="App">
      <Container>
    <Router>
      <Header/>
      <Routes>
      <Route exact path="/" element={<Home/>} />
        <Route exact path = "marvel" element={<MarvelAll/>}/>
        <Route exact path = "disney" element={<DisneyAll/>}/>
        <Route exact path = "movies" element={<Movies/>}/>
        <Route exact path = "watchlist" element={<Watchlist/>}/>
        <Route exact path = "login" element={<Login/>}/>
        <Route exact path = "player" element={<Player/>}/>
        <Route exact path = "spiderman-no-way-home" element={<Player src = "https://www.youtube.com/embed/JfVOs4VSpmA" name = "Spiderman - No Way Home"/>}/>
        <Route exact path = "the-falcon-and-the-winter-soldier" element={<Player src = "https://www.youtube.com/embed/IWBsDaFWyTE" name = "The Falcon And The Winter Soldier"/>}/>
        <Route exact path = "wanda-vision" element={<Player src = "https://www.youtube.com/embed/sj9J2ecsSpo" name = "WandaVision"/>}/>
        <Route exact path = "avengers-endgame" element={<Player src = "https://www.youtube.com/embed/TcMBFSGVi1c" name = "Avengers - Endgame"/>}/>
      </Routes>
    </Router>
    
    </Container>
    
    </div>
  );
}

const Container = styled.main`
  position: relative;
  min-height: calc(100vh - 70px);
  overflow-x: hidden;
  display: block;
  top: 72px;
  padding: 0 calc(3.5vw + 5px);

`;

export default App;
