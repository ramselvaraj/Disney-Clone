import React from 'react';
import './App.css';
import Header from './components/Header'
import styled from "styled-components";
import Home from './components/Home'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Footer from './components/Footer'; 
import MarvelAll from './components/MarvelAll';
import DisneyAll from './components/DisneyAll';
import Movies from './components/Movies';
import Watchlist from './components/Watchlist';
import Login from './components/Login';

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
