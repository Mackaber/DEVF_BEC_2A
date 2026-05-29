import { useEffect, useState } from "react"

function HijoCount ({ count, handleClick}) {
    //const [count, setCount] = useState(0)
    
    //function handleClick() {
    //    setCount(count + 1)
    //}

    useEffect(() => {
        console.log("Se ha montado el componente o se ha actualizado!")

        return() => {
            console.log("Se ha desmontado el componente!")
        }
    },[count])
    

    return (
        <>
            <h1>Hijo Renderizado!</h1>
            <h2>Counter: {count}</h2>
            <button onClick={handleClick}>Click</button>
        </>
    )
}

export default HijoCount