import { useState } from "react"

function CEuseRef() {
  const [counter, setCounter] = useState(0);
  const [intervalId, setIntervalId] = useState(null);


  function handleEmpezarButton() {
    const id = setInterval(() => {
      setCounter(counter + 1)
      console.log("Paso 1 segundo...")
    }, 1000)
    setIntervalId(id)
  }

  function handlePararButton() {
    clearInterval(intervalId)
  }

  return (
    <div className="cajita">
      <h2>Contra ejemplo de useRef</h2>
      <button onClick={handleEmpezarButton}>Empezar Intervalo</button>
      <button onClick={handlePararButton}>Parar Intervalo</button>
      <h2>Current count: {counter} </h2>
      <h2>IntervalId: {intervalId}</h2>
    </div>
  )
}

export default CEuseRef