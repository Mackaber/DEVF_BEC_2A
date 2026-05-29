import { useEffect } from 'react'
import './Hijo.css'

function Hijo({texto}) {

    useEffect(() => {
        console.log("Se ha montado el componente o se ha actualizado!")

        return() => {
            console.log("Se ha desmontado el componente!")
        }
    },[texto])  

    return (
        <div id="hijo">
            <h2>HIJO</h2>
            <p>{texto}</p>
        </div>
    )
}

export default Hijo