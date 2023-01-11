import React from 'react';

const Addpoktoplayer = ({ pokemonImg, pokemonAttributs, setARandomNumber }) => {
    const addPokemon = () => {

    }
    const randomNumber = () => {
        setARandomNumber(Math.floor(Math.random() * 52.99 + 1))

    }
    return (
        <div>

            <button onClick={randomNumber}>Add a pokemon to Player1</button>
        </div>
    );
}

export default Addpoktoplayer;
