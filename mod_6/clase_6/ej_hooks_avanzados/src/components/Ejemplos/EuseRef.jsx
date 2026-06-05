import { useRef, useState } from "react"

let intervalId

function EuseRef() {
  const [texto, setTexto] = useState("Texto")
  const intervalId = useRef(null)
  const counter = useRef(0)


  function handleEmpezarButton() {
    const id = setInterval(() => {
      counter.current = counter + 1
      console.log("Paso 1 segundo...")
    }, 1000)
    intervalId.current = id
    //intervalId = id
  }

  function handlePararButton() {
    clearInterval(intervalId.current)
    // clearInterval(intervalId)
  }

  function handleCambiarButton() {
    setTexto("Otro")
  }

  return (
    <div className="cajita">
      <h2>Ejemplo de useRef</h2>
      <button onClick={handleEmpezarButton}>Empezar Intervalo</button>
      <button onClick={handlePararButton}>Parar Intervalo</button>
      <button onClick={handleCambiarButton}>cambiar texto</button>
      <h2>Texto: {texto}</h2>
      <h2>Current count: {counter.current} </h2>
      <h2>IntervalId: {intervalId.current}</h2>
    </div>
  )
}

export default EuseRef