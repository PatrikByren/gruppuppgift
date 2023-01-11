import React, { useState, useEffect } from 'react';
import './App.css';

function App() {

  const [img, setImg] = useState();
  const [pokemonList, setPokemonList] = useState([])
  const [pokemonAttributs, setPokemonAttributs] = useState(null);
  const [aRandomNumber, setARandomNumber] = useState(Math.floor(Math.random() * 52.99 + 1));
  const [player1Pokemon, setPlayer1Pokemon] = useState([]);


  const requestOptions = {
    method: 'GET',
    redirect: 'follow'
  };


  const fetchImage = async () => {
    const res = await fetch(`https://assets.tcgdex.net/en/base/basep/${aRandomNumber}/high.png`);
    const imageBlob = await res.blob();
    const imageObjectURL = URL.createObjectURL(imageBlob);
    setImg(imageObjectURL);
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



  const randomNumber = () => {
    setARandomNumber(Math.floor(Math.random() * 52.99 + 1))
    console.log(aRandomNumber)
  }

  useEffect(() => {
    fetchImage(); fetchPokemonAttributs();
  }, [aRandomNumber]);


  useEffect(() => {
    fetchAllPokemon();
  }, []);
  return (
    <div className="App">
      <h1>POKEMON WORLD</h1>
      <hr />
      <img src={img} alt="icons" />
      <button onClick={randomNumber}>New pic!</button>

    </div>
  );
}

export default App;
