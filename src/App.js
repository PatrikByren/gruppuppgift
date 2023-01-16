import React, { useState, useRef, useEffect } from 'react';

import './App.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Homepage from './pages';
import Page1 from './pages/Page1';
import Page2 from './pages/Page2';
import Page3 from './pages/Page3';



function App() {

  const firstUpdate = useRef(true);
  //USESTATE
  const [age, setAge] = useState('');
  const [pokemonImg, setPokemonImg] = useState();
  const [pokemonList, setPokemonList] = useState([])
  const [filterPokemonList, setFilterPokemonList] = useState([])
  const [pokemonAttributs, setPokemonAttributs] = useState(null);
  const [fetchNumber, setFetchNumber] = useState(0);
  const [player1Pokemon, setPlayer1Pokemon] = useState([]);
  const [player2Pokemon, setPlayer2Pokemon] = useState([]);
  const [choosenPlayer, setChoosenPlayer] = useState("");
  const [randomNumber, setRandomNumber] = useState(0);
  const [pokemonListLoaded, setPokemonListLoaded] = useState("Pokemons are loading... Please wait!")

  //API FETCH
  const requestOptions = {
    method: 'GET',
    redirect: 'follow'
  };

  const fetchImage = async () => {
    const res = await fetch(`https://assets.tcgdex.net/en/base/basep/${fetchNumber}/high.png`);
    const imageBlob = await res.blob();
    const imageObjectURL = URL.createObjectURL(imageBlob);
    setPokemonImg([imageObjectURL]);
  };
  const fetchPokemonAttributs = () => {
    fetch(`https://api.tcgdex.net/v2/en/cards/basep-${fetchNumber}`, requestOptions)
      .then(response => response.text())
      .then(result => setPokemonAttributs(JSON.parse(result)))
      .catch(error => console.log('error', error));
  }

  //FUNCTIONS
  const aNumber = () => {
    if (fetchNumber < 53) {
      setFetchNumber(fetchNumber + 1)
    }
    else {
      setFilterPokemonList(pokemonList.filter((item) => !item.category.indexOf("Pokemon")))
      setPokemonListLoaded("All pokemons succefully loaded!");
      setTimeout(function () {
        setPokemonListLoaded("")
      }, 5000);

    }
  }

  const addPokemonHandler = () => {

    if (pokemonAttributs !== null) {
      setPokemonList([...pokemonList, {
        bild: pokemonImg,
        id: pokemonAttributs.id, attacks: pokemonAttributs.attacks, category: pokemonAttributs.category,
        hp: pokemonAttributs.hp, name: pokemonAttributs.name, rarity: pokemonAttributs.rarity,
        types: pokemonAttributs.types, weaknesses: pokemonAttributs.weaknesses
      }])
      setTimeout(aNumber, 100);
      //const myTimeout = setTimeout(aNumber, 100);
    }
  }

  const addPokemonToPlayerHandler = () => {
    switch (choosenPlayer) {
      case 'player1':
        setPlayer1Pokemon([...player1Pokemon, filterPokemonList[randomNumber]])
        console.log(player1Pokemon)
        break;
      case 'player2':
        setPlayer2Pokemon([...player2Pokemon, filterPokemonList[randomNumber]])
        break;
      default: console.log(choosenPlayer)
        break;
    }
  }


  //USEEFFECTS


  useEffect(() => {
    if (fetchNumber != 0) { fetchPokemonAttributs(); fetchImage(); }
    else { setFetchNumber(fetchNumber + 1) }
  }, [fetchNumber]);

  useEffect(() => {
    if (firstUpdate.current) {
      firstUpdate.current = false;
      return;
    }
    addPokemonHandler();
  }, [pokemonImg]);
  useEffect(() => {
    addPokemonToPlayerHandler();
  }, [randomNumber])
  return (
    <BrowserRouter>
      <div className="App">
        <header><h1>POKEMON WORLD</h1></header>
        <nav>
          <Link to="/">HomePage     </Link>
          <Link to="/page1">Trainee   </Link>
          <Link to="/page2">Samla kort   </Link>
          <Link to="/page3">Duellera</Link>
        </nav>
        <main>
          <Routes>
            <Route path='/' element={< Homepage />} />
            <Route
              path='/page1'
              element={< Page1 age={age} setAge={setAge} />} />
            <Route path='/page2' element={< Page2 setRandomNumber={setRandomNumber} filterPokemonList={filterPokemonList} pokemonList={pokemonList} setFilterPokemonList={setFilterPokemonList} choosenPlayer={choosenPlayer}
              setChoosenPlayer={setChoosenPlayer}
              player1Pokemon={player1Pokemon}
              player2Pokemon={player2Pokemon}
              pokemonListLoaded={pokemonListLoaded}
            />} />
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


/*const fetchImage = async (number) => {
  const res = await fetch(`https://assets.tcgdex.net/en/base/basep/${number}/high.png`);
  const imageBlob = await res.blob();
  const imageObjectURL = URL.createObjectURL(imageBlob);
  //setPokemonImg(imageObjectURL);
  return imageObjectURL
};
const fetchPokemonAttributs = async (number) => {
  const response = await fetch(`https://api.tcgdex.net/v2/en/cards/basep-${number}`, requestOptions);
  const attributeResp = await response.text();
  //setPokemonAttributs(JSON.parse(attributeResp));
  return JSON.parse(attributeResp)
}*/
/*const fetchAllPokemon = () => {
fetch(`https://api.tcgdex.net/v2/en/sets/basep`, requestOptions)
  .then(response => response.text())
  .then(result => setPokemonList(JSON.parse(result)))
  .catch(error => console.log('error', error));
}*/
/*const waitApi = async () => {
let images = await fetchImage(fetchNumber);
let attributs = await fetchPokemonAttributs(fetchNumber);

//setPokemonList([...pokemonList, { picture: images, attacks: attributs.attacks, category: attributs.category, hp: attributs.hp, name: attributs.name, rarity: attributs.rarity, types: attributs.types, weaknesses: attributs.weaknesses }])
//console.log(pokemonList.picture)
//console.log(pokemonImg)
*/