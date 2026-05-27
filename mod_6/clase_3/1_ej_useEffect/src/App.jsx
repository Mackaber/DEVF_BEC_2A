import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [name, setName] = useState("Primero")
  const [count, setCount] = useState(0)

  useEffect(() => {
    console.log("Se ejecutó el efecto!")
  }, [name, count])

  function handleClick() {
    setCount(count + 1)
    setName(`Segundo ${count}`)
  }

  return (
    <>
      <h1>Hola {name}!</h1>
      <button onClick={handleClick}>Cambiar Nombre</button>
    </>
  )
}

export default App
