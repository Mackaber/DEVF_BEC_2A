import { useMemo } from 'react'
import './App.css'
import { useState } from 'react'
import { useEffect } from 'react'

function App() {
  const [num, setNum] = useState(5)
  const [resultUE, setResultUE] = useState(0)
  let resultUM = null

  resultUM = useMemo(() => {
    //return "El resultado de useMemo"
    const result = num * 10
    console.log(`Se ejecuto useMemo con el resultado ${result}`)

    return num * 10
  }, [num, resultUM])

  useEffect(()=> {

    const result = num * 10

    console.log(`Se ejecuto useEffect con el resultado ${result}`)

    setResultUE(result)
  }, [num, resultUE])

  function handleInput(e) {
    setNum(e.target.value)
  }

  return (
    <div>
      <h1>
        <input type="text" onChange={handleInput} /><br /><br />
        <p>Resultado con useMemo: {resultUM}</p><br />
        <p>Resultado con useEffect: {resultUE}</p>
      </h1>
    </div>
  )
}

export default App
