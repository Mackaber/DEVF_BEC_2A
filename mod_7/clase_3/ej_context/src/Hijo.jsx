import { useContext } from "react"
import { AppContext } from "./contexts/Provider"

function Hijo() {
    const { setName } = useContext(AppContext)

    return (
        <input type="text" onChange={(e) => {setName(e.target.value)}} />
    )
}

export default Hijo