import './style.css'
import Card from './components/card'
import { minutesToHours } from './util'

document.querySelector('#app').innerHTML = /* html */`
  ${Card("Mackaber", "Hola, soy un card", "hace 5 minutos")}
  ${Card("Alice", "Hola, soy Alice", "hace 10 minutos")}
  ${Card("Bob", "Hola, soy Bob", "hace 15 minutos")}
  ${Card("Charlie", "Hola, soy Charlie", minutesToHours("hace 20 minutos"))}
  ${Card("David", "Hola, soy David", "hace 25 minutos")}
`
