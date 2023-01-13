
import React from 'react';

const page2 = ({ setRandomNumber, filterPokemonList, setFilterPokemonList, pokemonList, setChoosenPlayer, player1Pokemon, player2Pokemon, }) => {

    const randomNumber = (e) => {
        console.log(pokemonList)
        setFilterPokemonList(pokemonList.filter((item) => !item.category.indexOf("Pokemon")))
        console.log(filterPokemonList)
        setRandomNumber(Math.floor(Math.random() * filterPokemonList.length))

        console.log(e.target.value)
        setChoosenPlayer(e.target.value)

    }
    return (
        <div className='playersAndPokemonRoot'>
            <div>
                <button value={"player1"} onClick={randomNumber}>Add a pokemon to Player1</button>
                <ul> Player1 pokemons: {player1Pokemon.map((item) => (

                    <li key={item.id}><img src={item.bild} alt={item.name} />{item.id}, "Namn: " {item.name},"Hp: " {item.hp},
                        "Attacks" {item.attacks[0].name}", "{item.attacks[0].effect}</li>))}
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

export default page2;

/*import React from 'react';

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

export default Page2;*/

