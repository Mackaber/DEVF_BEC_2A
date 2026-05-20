import './App.css'
import EjemploFragment from './EjemploFragment'
import Hijo from './Hijo'
import Nombre from './Nombre'
import NombreProps from './NombreProps'
import NombreState from './NombreState'
import Experimento from './Experimento'

function App() {

  return (
    <div>
      <Hijo />
      <hr />
      <Nombre nombre="Mackaber"/>
      <NombreProps nombre="Mackaber" a="x" b="y" c="z" />
      <NombreState />
      <hr />
      <EjemploFragment />
      <hr />
      <Experimento />
    </div>
  )
}

export default App
