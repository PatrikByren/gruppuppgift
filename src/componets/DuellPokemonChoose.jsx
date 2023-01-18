import React from 'react';
import Button from '@mui/material/Button';

const DuellPokemonChoose = ({ playerProfile, setPlayer1ChoosenPok, setPlayer2ChoosenPok, player1PokemonFilter, player2PokemonFilter }) => {

    const player1PokemonHandler = (e) => {
        console.log(e.target.value)
        setPlayer1ChoosenPok(e.target.value)
    }
    const player2PokemonHandler = (e) => {
        console.log(e.target.value)
        setPlayer2ChoosenPok(e.target.value)
    }

    return (

        <div className='playersAndPokemonRoot'>
            <div>

                <ul className='pokemonField1'> {playerProfile[0]?.name}'s pokemons: {player1PokemonFilter.map((item) => (

                    <div key={item.id} className='pokemonField1'><div><li className='pokemonField' key={item.id}><img src={item.bild} alt={item.name} /> <div><div> Namn: {item.name} </div><div>Hp: {item.hp}</div><div>
                        Attacks: {item.attacks[0].name}</div><div>damage: {item.attacks[0].damage}</div></div>
                        <Button variant="contained" value={item.id} onClick={player1PokemonHandler}>THIS ONE</Button></li></div></div>))}
                </ul>
            </div>
            <div>

                <ul className='pokemonField1'> {playerProfile[1]?.name}'s pokemons: {player2PokemonFilter.map((item) => (

                    <div key={item.id} className='pokemonField1'><div><li className='pokemonField' key={item.id}><img src={item.bild} alt={item.name} /> <div><div> Namn: {item.name} </div><div>Hp: {item.hp}</div><div>
                        Attacks: {item.attacks[0].name}</div><div>damage: {item.attacks[0].damage}</div></div>
                        <Button variant="contained" value={item.id} onClick={player2PokemonHandler}>THIS ONE</Button></li></div></div>))}
                </ul>
            </div>

        </div>

    );
}

export default DuellPokemonChoose;
