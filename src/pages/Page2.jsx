
import React from 'react';
import Button from '@mui/material/Button';


const page2 = ({ pokemonListLoaded, setRandomNumber, filterPokemonList, setFilterPokemonList, pokemonList, setChoosenPlayer, player1PokemonFilter, player2PokemonFilter, }) => {

    const randomNumber = (e) => {
        //setFilterPokemonList(pokemonList.filter((item) => !item.category.indexOf("Pokemon")))
        setRandomNumber(Math.floor(Math.random() * filterPokemonList.length))
        setChoosenPlayer(e.target.value)
    }
    return (
        <div>
            <div className='playersAndPokemonRoot'>
                <div >
                    <Button variant="contained" value={"player1"} onClick={randomNumber}>Add a pokemon to Player1</Button>

                    <ul className='pokemonField1'> Player1 pokemons: {player1PokemonFilter.map((item) => (

                        <li className='pokemonField' key={item.id}><img src={item.bild} alt={item.name} /> <div><div> Namn: {item.name} </div><div>Hp: {item.hp}</div><div>
                            Attacks: {item.attacks[0].name}</div><div>damage: {item.attacks[0].damage}</div></div></li>))}
                    </ul>
                </div>
                <div >
                    <Button variant="contained" value={"player2"} onClick={randomNumber}>Add a pokemon to Player2</Button>
                    <ul className='pokemonField1'> Player2 pokemons: {player2PokemonFilter.map((item) => (

                        <li className='pokemonField' key={item.id}><img src={item.bild} alt={item.name} /> <div><div> Namn: {item.name} </div><div>Hp: {item.hp}</div><div>
                            Attacks: {item.attacks[0].name}</div><div>damage: {item.attacks[0].damage}</div></div></li>))}
                    </ul>
                </div>
            </div> <h3 className='white'>{pokemonListLoaded}</h3>
        </div >
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

