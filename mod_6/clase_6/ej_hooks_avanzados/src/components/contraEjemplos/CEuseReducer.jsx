import { useEffect, useState } from "react";

function CEuseReducer() {
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)
  const [data, setData] = useState(null)

  useEffect(() => {
    async function fetchData() {
      setIsLoading(true)
      setError(null)
      try {
        const response = await fetch(`https://httpbin.org/status/200`)
        setData(await response.json())
        setIsLoading(false)
      } catch (error) {
        setError(error.message)
        setIsLoading(false)
      }
    }

    // fetchData() // Va comentado, porque causa un loop infinito
  })

  return (
    <div className="cajita">
     <h2>Contra ejemplo de Reducer</h2>
     <p>{JSON.stringify(data)}</p>
     <p>Is Loading?  {isLoading ? "Loading" : "Loaded"}</p>
     <p>ERROR: {error}</p>
    </div> 
  )
}

export default CEuseReducer