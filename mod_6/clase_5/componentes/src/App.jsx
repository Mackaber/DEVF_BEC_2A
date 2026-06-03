import { useState } from 'react'
import EstructurasCondicionales from './components/EstructurasCondicionales'
import PropsChildren from './components/PropsChildren'
import Template from './components/Template'
import './App.css'

function App() {
  const [templateName, setTemplateName] = useState('profesional')

  function handleTemplateChange(e) {
    setTemplateName(e.target.value)
  }

  return (
    <>
      <EstructurasCondicionales />
      <PropsChildren>
        {/* Todo lo que este aquí dentro será parte de las props children */}
        <p>Este es el contenido de las props children</p>
      </PropsChildren>
      <br />
      <select onChange={handleTemplateChange}>
        <option value='profesional'>Profesional</option>
        <option value='casual'>Casual</option>
        <option value='default'>Default</option>
      </select>
      <br />
      <Template templateName={templateName}>
          <h1>Este es el contenido del template</h1>
          <p>El template es un componente que recibe children y los renderiza dentro de un diseño específico</p>
      </Template>
    </>
  )
}

export default App
