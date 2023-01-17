import React from 'react';

const DuellPokemonChoose = ({ setPlayer1ChoosenPok, setPlayer2ChoosenPok, player1PokemonFilter, player2PokemonFilter }) => {

    const player1PokemonHandler = (e) => {
        console.log(e.target.value)
        setPlayer1ChoosenPok(e.target.value)
    }
    const player2PokemonHandler = (e) => {
        console.log(e.target.value)
        setPlayer2ChoosenPok(e.target.value)
    }
    /*const startDuell = () => {
        setPlayer1PokemonFilter(player1PokemonFilter.filter((item) => item.id === player1ChoosenPok));
        setPlayer2PokemonFilter(player2PokemonFilter.filter((item) => item.id === player2ChoosenPok));



    }*/

    return (

        <div className='playersAndPokemonRoot'>
            <div>

                <ul> Player1 pokemons: {player1PokemonFilter.map((item) => (

                    <div key={item.id} className='listBtnItems'><img src={item.bild} alt={item.name} /> <div>{item.id}<li> "Namn: " {item.name}, </li><li>"Hp: " {item.hp},
                    </li><li>"Attacks" {item.attacks[0].name}", "{item.attacks[0].effect}" </li><li>damage: "{item.attacks[0].damage}</li><button value={item.id} onClick={player1PokemonHandler}>THIS ONE</button></div></div>))}
                </ul>
            </div>
            <div>

                <ul> Player2 pokemons: {player2PokemonFilter.map((item) => (

                    <div key={item.id} className='listBtnItems'><img src={item.bild} alt={item.name} /> <div>{item.id}<li> "Namn: " {item.name}, </li><li>"Hp: " {item.hp},
                    </li><li>"Attacks" {item.attacks[0].name}", "{item.attacks[0].effect}" </li><li>damage: "{item.attacks[0].damage}</li><button value={item.id} onClick={player2PokemonHandler}>THIS ONE</button></div></div>))}
                </ul>
            </div>

        </div>

    );
}

export default DuellPokemonChoose;
