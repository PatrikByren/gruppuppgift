import React, { useState } from 'react';
import Button from '@mui/material/Button';

const TheDuell = ({ player1Name, setPlayer1Name, player2Name, setPlayer2Name, playerProfile, setPlayer1PokemonFilter, setPlayer2PokemonFilter, player1PokemonFilter, player1ChoosenPok, player2PokemonFilter, player2ChoosenPok }) => {
    const [winnerIs, setWinnerIs] = useState("")
    const [winnerName, setWinnerName] = useState("")
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

        let newTwoDmg = (twoDmg + "k").slice(0, 2);
        let newOneDmg = (oneDmg + "k").slice(0, 2);

        if (newOneDmg == "k") { newOneDmg = 10; }
        if (newTwoDmg == "k") { newTwoDmg = 10; }

        setPlayer1PokemonFilter([])
        setPlayer2PokemonFilter([])

        //setPlayer1Name(playerProfile[0]?.name)
        //setPlayer2Name(playerProfile[1]?.name)
        do {

            oneHp -= newTwoDmg;
            twoHp -= newOneDmg;
            oneHp--;
            twoHp--;
            console.log(player1Name)
        }
        while ((oneHp > 1) && (twoHp > 1))

        if (oneHp < twoHp) {
            setWinnerIs("Winner is ")
            setTimeout(function () {
                setWinnerName(player2Name)
            }, 1000);
            console.log(winnerName)
        }
        else if (oneHp > twoHp) {
            setWinnerIs("Winner is  ")
            setTimeout(function () {
                setWinnerName(player1Name)
            }, 1000);
            console.log(winnerName)
        }
        else {
            setWinnerIs("It's a DRAW!!")
            setWinnerName("")
            console.log(winnerName)
        }
        setTimeout(function () {
            setWinnerIs("")
            setWinnerName("")

        }, 7000);



    }
    return (
        <div>
            <Button variant="contained" onClick={pokemonDuell}>START THE DUELL!</Button>
            <ul className='pokemonField1'> {duellPokemon1.map((item) => (<div key={item.id}><img src={item.bild} alt={item.name} /></div>))}
            </ul>
            <ul className='pokemonField1'>{duellPokemon2.map((item) => (<div key={item.id}><img src={item.bild} alt={item.name} /></div>))}
            </ul>
            <div className='white'> {winnerIs} </div> <h4 className='white'>{winnerName}</h4>
        </div >
    );
}

export default TheDuell;
