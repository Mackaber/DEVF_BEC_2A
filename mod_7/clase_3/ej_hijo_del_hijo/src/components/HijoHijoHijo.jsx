import { useContext } from "react"
import { AppContext } from "../contexts/Provider"

function HijoHijoHijo({loginName}) {

    const { name } = useContext(AppContext)

    return (
        <div className='cajita'>
            <h1>Hola soy el HijoHijoHijo</h1>
            <p>{loginName}</p>
            <p>{name}</p>
        </div>
    )
}

export default HijoHijoHijo