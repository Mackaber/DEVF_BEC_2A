import { useParams } from "react-router-dom"

function UrlParams() {
    //const params = useParams()
    const { name } = useParams()

    return (
        <>
            <h1>Hola {name}!</h1>
        </>
    )
}

export default UrlParams