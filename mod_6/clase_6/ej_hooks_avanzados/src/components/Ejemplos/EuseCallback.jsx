import { useCallback, useEffect, useState } from "react"

function EuseCallback({pokemonCount}) {
  const [data, setData] = useState(null)

  const fetchData = useCallback(async () => {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${pokemonCount}&offset=0`)
    setData(await response.json())
  }, [pokemonCount])

  useEffect(() => {
    fetchData() 
  }, [fetchData])

  return (
    <div className="cajita">
     <h2>Contra ejemplo de Callback</h2>
     <p>{JSON.stringify(data)}</p>
    </div> 
  )
}

export default EuseCallback