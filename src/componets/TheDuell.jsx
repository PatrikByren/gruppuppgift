import React, { useState } from 'react';

const TheDuell = ({ setPlayer1PokemonFilter, setPlayer2PokemonFilter, player1PokemonFilter, player1ChoosenPok, player2PokemonFilter, player2ChoosenPok }) => {

    const [duellPokemon1, setDuellPokemon1] = useState([])
    const [duellPokemon2, setDuellPokemon2] = useState([])
    const pokemonDuell = () => {

        setDuellPokemon1(player1PokemonFilter.filter((item) => !item.id.indexOf(player1ChoosenPok)));
        setDuellPokemon2(player2PokemonFilter.filter((item) => !item.id.indexOf(player2ChoosenPok)));
        let i = duellPokemon1.map((item) => (item.hp));

        do {

            console.log(i)
            i--;
        }
        while (i >= 0)


    }
    /*<ul> The pokemon: {duellPokemon1.map((item) => (<div key={item.id}><img src={item.bild} alt={item.name} /></div>))}
    </ul>
    <ul> The pokemon: {duellPokemon2.map((item) => (<div key={item.id}><img src={item.bild} alt={item.name} /></div>))}
    </ul>*/
    return (
        <div>
            <button onClick={pokemonDuell}>START THE DUELL!</button>
            <ul> The pokemon: {duellPokemon1.map((item) => (<div key={item.id}><img src={item.bild} alt={item.name} />{item.hp}</div>))}
            </ul>
            <ul> The pokemon: {duellPokemon2.map((item) => (<div key={item.id}><img src={item.bild} alt={item.name} /></div>))}
            </ul>

        </div >
    );
}

export default TheDuell;
