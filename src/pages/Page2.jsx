import React from 'react';

const Page2 = ({ setChoosenPlayer, player1Pokemon, player2Pokemon, setARandomNumber }) => {
    const randomNumber = async (e) => {
        await setARandomNumber(Math.floor(Math.random() * 52.99 + 1)

        )
        console.log(e.target.value)
        setChoosenPlayer(e.target.value)

    }
    return (
        <div className='playersAndPokemonRoot'>
            <div>
                <button value={"player1"} onClick={randomNumber}>Add a pokemon to Player1</button>
                <ul> Player1 pokemons: {player1Pokemon.map((item) => (

                    <li key={item.id}><img src={item.bild} alt={item.name} /> {item.id}, {item.name}, {item.hp}</li>))}
                </ul>
            </div>
            <div>
                <button value={"player2"} onClick={randomNumber}>Add a pokemon to Player2</button>
                <ul> Player2 pokemons: {player2Pokemon.map((item) => (

                    <li key={item.id}><img src={item.bild} alt={item.name} /> {item.id}, {item.name}, {item.hp}</li>))}
                </ul>
            </div>
        </div>
    );
}

export default Page2;
