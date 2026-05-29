import { useState } from 'react'
import Hijo from './Hijo'
import './Padre.css'

function Padre() {
    const [montar, setMontar] = useState(false)
    const [texto, setTexto] = useState("")

    function handleMontar() {
        setMontar(true)
    }

    function handleActualizar() {
        texto === "Padre" ? setTexto("Otro") : setTexto("Padre")
    }

    function handleDesmontar() {
        setMontar(false)
    }

    return (
        <div id="padre">
            <h2>PADRE</h2>
            <button onClick={handleMontar}>Montar</button>
            <button onClick={handleActualizar}>Actualizar</button>
            <button onClick={handleDesmontar}>Desmontar</button>
            <hr />
            { montar && <Hijo {...{texto}}/>}
        </div>
    )
}

export default Padre