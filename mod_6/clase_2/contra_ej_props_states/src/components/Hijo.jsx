import { useState } from "react"

function Hijo() {
    const [pokemones, setPokemones] = useState({})

    async function handleObtenerPokemones() {
        const json_result = await fetch("https://pokeapi.co/api/v2/pokemon?limit=5&offset=0")
        setPokemones(await json_result.json())
    }


    return (
        <div>
            <button onClick={handleObtenerPokemones}>Obtener pokemones</button>
            {JSON.stringify(pokemones)}
        </div>
    )

}

export default Hijo