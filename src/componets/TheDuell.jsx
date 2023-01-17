import React, { useState } from 'react';

const TheDuell = ({ setPlayer1PokemonFilter, setPlayer2PokemonFilter, player1PokemonFilter, player1ChoosenPok, player2PokemonFilter, player2ChoosenPok }) => {

    const [duellPokemon1, setDuellPokemon1] = useState([])
    const [duellPokemon2, setDuellPokemon2] = useState([])
    const pokemonDuell = () => {

        setDuellPokemon1(player1PokemonFilter.filter((item) => !item.id.indexOf(player1ChoosenPok)));
        setDuellPokemon2(player2PokemonFilter.filter((item) => !item.id.indexOf(player2ChoosenPok)));
        let oneHp = duellPokemon1.map((item) => (item.hp));
        let twoHp = duellPokemon2.map((item) => (item.hp));
        let oneDmg = duellPokemon1.map((item) => (item.attacks[0].damage));
        let twoDmg = duellPokemon2.map((item) => (item.attacks[0].damage));
        if (oneDmg.length === 0) { oneDmg = 10; }
        if (twoDmg.length === 0) { twoDmg = 10; }
        console.log(player1PokemonFilter)
        console.log(player2PokemonFilter)
        setPlayer1PokemonFilter([])
        setPlayer2PokemonFilter([])
        console.log(oneDmg)
        console.log(twoDmg)
        console.log("hp:" + oneHp)
        do {
            console.log("hp1:" + oneHp)
            console.log("hp2:" + twoHp)
            oneHp -= twoDmg;
            twoHp -= oneDmg;
            console.log("dmg1:" + oneDmg)
            console.log("dmg2:" + twoDmg)
            console.log("hp:" + oneHp, twoHp)

        }
        while ((oneHp > 1) && (twoHp > 1))




    }
    /*<ul> The pokemon: {duellPokemon1.map((item) => (<div key={item.id}><img src={item.bild} alt={item.name} /></div>))}
    </ul>
    <ul> The pokemon: {duellPokemon2.map((item) => (<div key={item.id}><img src={item.bild} alt={item.name} /></div>))}
    </ul>*/
    return (
        <div>
            <button onClick={pokemonDuell}>START THE DUELL!</button>
            <ul className='pokemonField1'> The pokemon: {duellPokemon1.map((item) => (<div key={item.id}><img src={item.bild} alt={item.name} />{item.hp}" "{item.attacks[0].damage}</div>))}
            </ul>
            <ul className='pokemonField1'> The pokemon: {duellPokemon2.map((item) => (<div key={item.id}><img src={item.bild} alt={item.name} />{item.hp}" "{item.attacks[0].damage}</div>))}
            </ul>

        </div >
    );
}

export default TheDuell;
