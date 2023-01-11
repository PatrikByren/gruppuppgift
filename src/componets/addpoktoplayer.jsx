import React from 'react';

const Addpoktoplayer = ({ player1Pokemon, setARandomNumber }) => {
    const addPokemon = () => {

    }
    const randomNumber = () => {
        setARandomNumber(Math.floor(Math.random() * 52.99 + 1))

    }
    return (
        <div>

            <button onClick={randomNumber}>Add a pokemon to Player1</button>
            <ul> Player1 pokemons: {player1Pokemon.map((item) => (

                <li key={item.id}><img src={item.bild} alt={item.name} /> {item.id}, {item.name}, {item.hp}</li>))}
            </ul>


        </div>
    );
}

export default Addpoktoplayer;
