import React, { useState, useEffect } from 'react';
import Addpoktoplayer from './componets/Addpoktoplayer';
import './App.css';

function App() {

  //USESTATE
  const [pokemonImg, setPokemonImg] = useState();
  const [pokemonList, setPokemonList] = useState([])
  const [pokemonAttributs, setPokemonAttributs] = useState(null);
  const [aRandomNumber, setARandomNumber] = useState(Math.floor(Math.random() * 52.99 + 1));
  const [player1Pokemon, setPlayer1Pokemon] = useState([]);

  //API FETCH
  const requestOptions = {
    method: 'GET',
    redirect: 'follow'
  };
  const fetchImage = async () => {
    const res = await fetch(`https://assets.tcgdex.net/en/base/basep/${aRandomNumber}/high.png`);
    const imageBlob = await res.blob();
    const imageObjectURL = URL.createObjectURL(imageBlob);
    setPokemonImg(imageObjectURL);
  };
  const fetchPokemonAttributs = () => {
    fetch(`https://api.tcgdex.net/v2/en/cards/basep-${aRandomNumber}`, requestOptions)
      .then(response => response.text())
      .then(result => setPokemonAttributs(JSON.parse(result)))
      .catch(error => console.log('error', error));
  }
  const fetchAllPokemon = () => {
    fetch(`https://api.tcgdex.net/v2/en/sets/basep`, requestOptions)
      .then(response => response.text())
      .then(result => setPokemonList(JSON.parse(result)))
      .catch(error => console.log('error', error));
  }


  //FUNCTIONS
  const randomNumber = () => {
    setARandomNumber(Math.floor(Math.random() * 52.99 + 1))
    console.log(aRandomNumber)
  }
  const addPokemonPlayer1Handler = () => {
    setPlayer1Pokemon([...player1Pokemon, {}])

  }
  //USEEFFECTS
  useEffect(() => {
    fetchImage(); fetchPokemonAttributs();
  }, [aRandomNumber]);

  useEffect(() => {
    addPokemonPlayer1Handler();
  }, [pokemonImg]);


  useEffect(() => {
    fetchAllPokemon();
  }, []);
  return (
    <div className="App">
      <h1>POKEMON WORLD</h1>
      <hr />
      <Addpoktoplayer
        pokemonImg={pokemonImg}
        pokemonAttributs={pokemonAttributs}
        setARandomNumber={setARandomNumber}

      />
      <img src={pokemonImg} alt="icons" />
      <button onClick={randomNumber}>New pic!</button>

    </div>
  );
}

export default App;
