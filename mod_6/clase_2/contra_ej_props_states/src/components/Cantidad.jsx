import { useState } from "react"

function Cantidad() {
    const [cant, setCant] = useState(1)
    const [pokemones, setPokemones] = useState({})

    function handleUpdateCantidad(e) {
        setCant(e.target.value)
    }

    function handleCambiarCantidad() {
        // pokemons fetch("https://pokeapi.co/api/v2/pokemon?limit={cant}&offset=0)
    }

    return (
        <>
            <input onChange={handleUpdateCantidad} />
            <button onClick={handleCambiarCantidad} >Cambiar Cantidad</button>
        </>
    )
}

export default Cantidad