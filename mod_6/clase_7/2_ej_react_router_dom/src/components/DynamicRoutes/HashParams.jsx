import { useLocation } from "react-router-dom"


function HashParams() {
    const hashParams = useLocation().hash

    return (
        <>
            <h1>Hola {hashParams.substring(1)}!</h1>
        </>
    )
}

export default HashParams