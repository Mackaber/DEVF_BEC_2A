import { useEffect, useState } from "react"

function CEuseCallback({pokemonCount}) {
  const [data, setData] = useState(null)

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${pokemonCount}&offset=0`)
      setData(await response.json())
    }
    // fetchData() // Va comentado, porque causa un loop infinito
  })

  return (
    <div className="cajita">
     <h2>Contra ejemplo de Callback</h2>
     <p>{JSON.stringify(data)}</p>
    </div> 
  )
}

export default CEuseCallback