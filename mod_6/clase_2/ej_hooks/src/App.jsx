import './App.css'
import { useState } from 'react'
import { useBeforeRender } from './hooks/useBeforeRender'
import { useAfterRender } from './hooks/useAfterRender'


function App() {

  const [val, SetVal] = useState(0)

  // Hook que se ejecuta ANTES del render
  useBeforeRender("App: Antes del render")
  
  // Hook que se ejecuta DESPUÉS del render
  useAfterRender("App: Después del render")

  return (
    <div>
      <h1>Ejemplo de Hooks Personalizados</h1>
      <p>Abre la consola para ver el orden de ejecución de los hooks</p>
      <button onClick={() => SetVal(val + 1)}>Incrementar: {val}</button>
    </div>
  )
}

export default App
