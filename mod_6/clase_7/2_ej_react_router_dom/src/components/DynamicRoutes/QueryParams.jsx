import { useEffect } from "react"
import { useSearchParams } from "react-router-dom"

function QueryParams() {
    const [queryParams, setQueryParams] = useSearchParams()

    useEffect(() => {
        // setQueryParams({ name3: "Nombre secreto" })
    })

    return (
        <>
            <h1>Hola {queryParams.get("name")}!</h1>
            <h1>Hola tambien {queryParams.get("name2")}!</h1>
        </>
    )
}

export default QueryParams