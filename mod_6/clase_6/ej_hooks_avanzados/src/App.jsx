import CEuseRef from './components/contraEjemplos/CEuseRef'
import EuseRef from './components/Ejemplos/EuseRef'
import CEuseCallback from './components/contraEjemplos/CEuseCallback'
import EuseCallback from './components/Ejemplos/EuseCallback'
import CEuseReducer from './components/contraEjemplos/CEuseReducer'
import EuseReducer from './components/Ejemplos/EuseReducer'
import './App.css'
import { useState } from 'react'

function App() {
  const [pokemonCount, setPokemonCount] = useState(0)

  function handleChange(e) {
    setPokemonCount(e.target.value)
  }

  return (<>
      <CEuseRef />
      <EuseRef />
      <br />
      <input type="text" value={1} onChange={handleChange}/>
      <br />
      <CEuseCallback pokemonCount={pokemonCount}/>
      <EuseCallback pokemonCount={pokemonCount}/>
      <br />
      <CEuseReducer />
      <EuseReducer />
  </>)
}

export default App
