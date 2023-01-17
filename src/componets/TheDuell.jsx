import React, { useState } from 'react';

const TheDuell = ({ setPlayer1PokemonFilter, setPlayer2PokemonFilter, player1PokemonFilter, player1ChoosenPok, player2PokemonFilter, player2ChoosenPok }) => {
    const [winnerIs, setWinnerIs] = useState("")
    const [duellPokemon1, setDuellPokemon1] = useState([])
    const [duellPokemon2, setDuellPokemon2] = useState([])
    const pokemonDuell = () => {
        setDuellPokemon1(player1PokemonFilter.filter((item) => !item.id.indexOf(player1ChoosenPok)));
        setDuellPokemon2(player2PokemonFilter.filter((item) => !item.id.indexOf(player2ChoosenPok)));
        let oneHp = player1PokemonFilter.filter((item) => !item.id.indexOf(player1ChoosenPok))
            .map((item) => (item.hp));
        let twoHp = player2PokemonFilter.filter((item) => !item.id.indexOf(player2ChoosenPok))
            .map((item) => (item.hp));
        let oneDmg = player1PokemonFilter.filter((item) => !item.id.indexOf(player1ChoosenPok))
            .map((item) => (item.attacks[0].damage))
        let twoDmg = player2PokemonFilter.filter((item) => !item.id.indexOf(player2ChoosenPok))
            .map((item) => (item.attacks[0].damage))

        console.log("dmg1:" + oneDmg)
        console.log("dmg2:" + twoDmg)
        if (oneDmg == "") { oneDmg = 10; }
        if (twoDmg == "") { twoDmg = 10; }
        console.log(duellPokemon1)
        console.log(duellPokemon2)
        setPlayer1PokemonFilter([])
        setPlayer2PokemonFilter([])
        do {
            console.log("hp1:" + oneHp)
            console.log("hp2:" + twoHp)
            oneHp -= twoDmg;
            twoHp -= oneDmg;
            console.log("dmg1:" + oneDmg)
            console.log("dmg2:" + twoDmg)
            oneHp--;
            twoHp--;
        }
        while ((oneHp > 1) && (twoHp > 1))

        if (oneHp < twoHp) { setWinnerIs("Winner is player2") }
        else if (oneHp > twoHp) { setWinnerIs("Winner is player1") }
        else { setWinnerIs("DRAW!!") }





    }
    /*<ul> The pokemon: {duellPokemon1.map((item) => (<div key={item.id}><img src={item.bild} alt={item.name} /></div>))}
    </ul>
    <ul> The pokemon: {duellPokemon2.map((item) => (<div key={item.id}><img src={item.bild} alt={item.name} /></div>))}
    </ul>*/
    return (
        <div>
            <button onClick={pokemonDuell}>START THE DUELL!</button>
            <ul className='pokemonField1'> The pokemon player 1: {duellPokemon1.map((item) => (<div key={item.id}><img src={item.bild} alt={item.name} /></div>))}
            </ul>
            <ul className='pokemonField1'> The pokemon player 2: {duellPokemon2.map((item) => (<div key={item.id}><img src={item.bild} alt={item.name} /></div>))}
            </ul>
            <div className='pokemonField1'> {winnerIs} </div>
        </div >
    );
}

export default TheDuell;
