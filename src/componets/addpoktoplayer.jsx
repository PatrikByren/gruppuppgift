import React from 'react';

const Addpoktoplayer = ({ player1Pokemon, setARandomNumber }) => {

    const randomNumber = async () => {
        await setARandomNumber(Math.floor(Math.random() * 52.99 + 1))

    }
    return (
        <div className='playersAndPokemonRoot'>
            <div>
                <button onClick={randomNumber}>Add a pokemon to Player1</button>
                <ul> Player1 pokemons: {player1Pokemon.map((item) => (

                    <li key={item.id}><img src={item.bild} alt={item.name} /> {item.id}, {item.name}, {item.hp}</li>))}
                </ul>
            </div>
            <div>
                <button onClick={randomNumber}>Add a pokemon to Player2</button>
                <ul> Player2 pokemons: {player1Pokemon.map((item) => (

                    <li key={item.id}><img src={item.bild} alt={item.name} /> {item.id}, {item.name}, {item.hp}</li>))}
                </ul>
            </div>
        </div>
    );
}

export default Addpoktoplayer;
