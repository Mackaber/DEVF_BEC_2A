import { useContext } from 'react'
import { AppContext } from './contexts/Provider'
import Hijo from './Hijo'
import './App.css'

function App() {
  // Paso 7. Utilizar el Context
  const { name } = useContext(AppContext)

  return (
    <>
      <h1>
        {name}
      </h1>      
      <Hijo />
    </>
  )
}

export default App
