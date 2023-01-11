import React, { useState, useEffect } from 'react';
import './App.css';

function App() {

  const [img, setImg] = useState();
  const [pokemonData, setPokemonData] = useState(null);
  const [aRandomNumber, setARandomNumber] = useState(Math.floor(Math.random() * 52.99 + 1));


  //https://assets.tcgdex.net/en/base/basep/53/high.png


  const requestOptions = {
    method: 'GET',
    redirect: 'follow'
  };
  const fetchSelectedPokemon = () => {
    fetch(`https://pokeapi.co/api/v2/pokemon`, requestOptions)
      .then(response => response.text())
      .then(result => setPokemonData(JSON.parse(result)))
      .catch(error => console.log('error', error));

  }

  const fetchImage = async () => {
    const res = await fetch(`https://assets.tcgdex.net/en/base/basep/${aRandomNumber}/high.png`);
    const imageBlob = await res.blob();
    const imageObjectURL = URL.createObjectURL(imageBlob);
    setImg(imageObjectURL);
  };
  const fetchPokemonAttributs = () => {
    fetch(`https://api.tcgdex.net/v2/en/cards/basep-${aRandomNumber}`, requestOptions)
      .then(response => response.text())
      .then(result => console.log(JSON.parse(result)))
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
    fetchSelectedPokemon();
  }, []);
  return (
    <div className="App">
      <h1>Backend Testing</h1>
      <hr />
      <img src={img} alt="icons" />
      <button onClick={randomNumber}>New pic!</button>

    </div>
  );
}

export default App;
