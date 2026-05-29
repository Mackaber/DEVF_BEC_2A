
import { useState } from 'react'
import HijoCount from './components/HijoCount'
import Padre from './components/Padre'
import './App.css'

function App() {
  const [renderizar, setRenderizar] = useState(false)
  const [count, setCount] = useState(0)

  function handleRenderizaClick() {
    setRenderizar(!renderizar)
  }

  function handleClick() {
    setCount(count + 1)
  }

  return (
    <>
      { renderizar && <HijoCount {...{count, handleClick}} /> }
      <button onClick={handleRenderizaClick}>Renderiza</button>
      <Padre />
    </>
  )
}

export default App
