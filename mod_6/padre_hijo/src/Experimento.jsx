import { useState } from "react"

let myVar = ""

const Experimento = () => {
    const [myState, setMyState] = useState("")

    function handleStateChange(e) {
        setMyState(e.target.value)
    }

    function handleVariableChange(e) {
        myVar = e.target.value
    }

    return (
        <>
            <label>Actualizar State</label>
            <input type="text" onChange={handleStateChange}/>
            <label>Actualizar Variable</label>
            <input type="text" onChange={handleVariableChange}/>
            <h2>Valor de myState: {myState}</h2>
            <h2>Valor de myVar: {myVar}</h2>
        </>
    )
}

export default Experimento