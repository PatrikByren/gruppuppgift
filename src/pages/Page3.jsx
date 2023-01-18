import React, { useState } from 'react';
import DuellPokemonChoose from '../componets/DuellPokemonChoose';
import TheDuell from '../componets/TheDuell';
const Page3 = ({ playerProfile, player1PokemonFilter, player2PokemonFilter, setPlayer1PokemonFilter, setPlayer2PokemonFilter }) => {

    const [player1ChoosenPok, setPlayer1ChoosenPok] = useState("")
    const [player2ChoosenPok, setPlayer2ChoosenPok] = useState("")
    const [player1Name, setPlayer1Name] = useState(playerProfile[0]?.name)
    const [player2Name, setPlayer2Name] = useState(playerProfile[1]?.name)
    return (
        <div> <label className='white'>Choose ur fighting pokemon!</label>
            <DuellPokemonChoose playerProfile={playerProfile}
                player1PokemonFilter={player1PokemonFilter} player2PokemonFilter={player2PokemonFilter}
                setPlayer1ChoosenPok={setPlayer1ChoosenPok} setPlayer2ChoosenPok={setPlayer2ChoosenPok} />
            <TheDuell player1Name={player1Name} setPlayer1Name={setPlayer1Name} player2Name={player2Name} setPlayer2Name={setPlayer2Name}
                playerProfile={playerProfile} setPlayer1PokemonFilter={setPlayer1PokemonFilter} setPlayer2PokemonFilter={setPlayer2PokemonFilter}
                player1PokemonFilter={player1PokemonFilter} player2PokemonFilter={player2PokemonFilter}
                player1ChoosenPok={player1ChoosenPok} player2ChoosenPok={player2ChoosenPok} />

        </div>
    );
}

export default Page3;
