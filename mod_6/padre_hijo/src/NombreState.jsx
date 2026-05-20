import { useState } from "react"

function NombreState () {
    const [nombre, setNombre] = useState("")
    //let nombre = ""


    return (
        <div>
            <input type="text" onChange={(e) => { 
                console.log(e.target.value)
                //nombre = e.target.value
                //console.log(nombre)
                setNombre(e.target.value)
            }}/>
            <h1>Hola {nombre}!</h1>
        </div>
    )
}

export default NombreState