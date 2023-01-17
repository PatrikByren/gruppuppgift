import React, { useState } from 'react';
import DuellPokemonChoose from '../componets/DuellPokemonChoose';
import TheDuell from '../componets/TheDuell';
const Page3 = ({ player1Pokemon, player2Pokemon, player1PokemonFilter, player2PokemonFilter, setPlayer1PokemonFilter, setPlayer2PokemonFilter }) => {

    const [player1ChoosenPok, setPlayer1ChoosenPok] = useState("")
    const [player2ChoosenPok, setPlayer2ChoosenPok] = useState("")
    return (
        <div> <label>Choose ur fighting pokemon!</label>
            <DuellPokemonChoose
                player1PokemonFilter={player1PokemonFilter} player2PokemonFilter={player2PokemonFilter}
                setPlayer1ChoosenPok={setPlayer1ChoosenPok} setPlayer2ChoosenPok={setPlayer2ChoosenPok} />
            <TheDuell setPlayer1PokemonFilter={setPlayer1PokemonFilter} setPlayer2PokemonFilter={setPlayer2PokemonFilter}
                player1PokemonFilter={player1PokemonFilter} player2PokemonFilter={player2PokemonFilter}
                player1ChoosenPok={player1ChoosenPok} player2ChoosenPok={player2ChoosenPok} />

        </div>
    );
}

export default Page3;
