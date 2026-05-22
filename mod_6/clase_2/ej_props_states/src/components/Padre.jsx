import { useState } from "react"
import Hijo from "./Hijo"
import Cantidad from "./Cantidad"

function Padre() {
    const [pokemones, setPokemones] = useState({})
    const [cant, setCant] = useState(1)

    function handleUpdateCantidad(e) {
        setCant(e.target.value)
    }

    async function handleObtenerPokemones() {
        const json_result = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${cant}&offset=0`)
        setPokemones(await json_result.json())
    }


    return (
        <>
            {/* Forma de pasar props a hijo repitiendo el nombre */}
            <Cantidad handleUpdateCantidad={handleUpdateCantidad} /> 
            {/* Forma de pasar props al hijo sin repetir*/}
            <Hijo {...{pokemones, handleObtenerPokemones}} />
        </>
    )
}

export default Padre