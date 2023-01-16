import React, { useState, useEffect } from 'react';

import './App.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Homepage from './pages';
import Page1 from './pages/Page1';
import Page2 from './pages/Page2';
import Page3 from './pages/Page3';



function App() {

  //USESTATE
  const [pokemonImg, setPokemonImg] = useState();
  const [pokemonList, setPokemonList] = useState([])
  const [pokemonAttributs, setPokemonAttributs] = useState(null);
  const [aRandomNumber, setARandomNumber] = useState(Math.floor(Math.random() * 52.99 + 1));
  const [player1Pokemon, setPlayer1Pokemon] = useState([]);
  const [player2Pokemon, setPlayer2Pokemon] = useState([]);
  const [choosenPlayer, setChoosenPlayer] = useState("");

  //API FETCH
  const requestOptions = {
    method: 'GET',
    redirect: 'follow'
  };
  const fetchImage = async () => {
    const res = await fetch(`https://assets.tcgdex.net/en/base/basep/${aRandomNumber}/high.png`);
    const imageBlob = await res.blob();
    const imageObjectURL = URL.createObjectURL(imageBlob);
    //setPokemonImg(imageObjectURL);
    return imageObjectURL
  };
  const fetchPokemonAttributs = async () => {
    const response = await fetch(`https://api.tcgdex.net/v2/en/cards/basep-${aRandomNumber}`, requestOptions);
    const attributeResp = await response.text();
    //setPokemonAttributs(JSON.parse(attributeResp));
    return JSON.parse(attributeResp)
  }







  const fetchAllPokemon = () => {
    fetch(`https://api.tcgdex.net/v2/en/sets/basep`, requestOptions)
      .then(response => response.text())
      .then(result => setPokemonList(JSON.parse(result)))
      .catch(error => console.log('error', error));
  }


  //FUNCTIONS
  const waitApi = async () => {
    let images = await fetchImage();
    let attributes = await fetchPokemonAttributs();
  }

  const addPokemonHandler = () => {
    if (pokemonAttributs !== null)
      switch (choosenPlayer) {
        case 'player1':
          setPlayer1Pokemon([...player1Pokemon, { id: pokemonAttributs.id, name: pokemonAttributs.name, bild: pokemonImg, hp: pokemonAttributs.hp }])
          break;
        case 'player2':
          setPlayer2Pokemon([...player2Pokemon, { id: pokemonAttributs.id, name: pokemonAttributs.name, bild: pokemonImg, hp: pokemonAttributs.hp }])
          break;
        default:
          break;
      }
  }
  //USEEFFECTS
  useEffect(() => {
    waitApi();
  }, [aRandomNumber]);

  useEffect(() => {
    addPokemonHandler();
  }, [pokemonImg + pokemonAttributs]);


  useEffect(() => {
    fetchAllPokemon();
  }, []);
  return (
    <BrowserRouter>
      <div className="App">
        <header><h1>POKEMON WORLD</h1></header>
        <nav>
          <Link to="/">HomePage     </Link>
          <Link to="/page1">Traniee   </Link>
          <Link to="/page2">Samla kort   </Link>
          <Link to="/page3">Duellera</Link>
        </nav>
        <main>
          <Routes>
            <Route path='/' element={< Homepage />} />
            <Route
              path='/page1'
              element={< Page1 />} />
            <Route path='/page2' element={< Page2 choosenPlayer={choosenPlayer}
              setChoosenPlayer={setChoosenPlayer}
              player1Pokemon={player1Pokemon}
              player2Pokemon={player2Pokemon}
              setARandomNumber={setARandomNumber} />} />
            <Route path='/page3' element={< Page3 />} />

          </Routes>
        </main>
        <footer>  
        <div class="footer-container">
             <nav class="footer-nav">
      <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Contact</a></li>
        <li><a href="#">Terms of Service</a></li>
      </ul>
    </nav>
    </div>
    </footer>
       
    <div class="footer-back-to-top">
      
      <a href="#top">Back to top</a>

    </div>

       <div class="footer-copyright">

      <p>Copyright ©2022 Your Website</p>
    </div>
  </div>
    
      
    </BrowserRouter>
  );
}

export default App;
