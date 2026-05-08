import './style.css'
import Navbar from './components/navbar'
import Content from './components/content'
import Item from './components/common/item'

const items = [
  {
    imgUrl: "https://picsum.photos/200",
    title: "La cotorrisa",
    description: "Podcast de comedia mexicana conducido por Ricardo Pérez y José Luis García Slobotzky."
  },
  {
    imgUrl: "https://picsum.photos/200",
    title: "Entiende tu mente",
    description: "Podcast de psicología conducido por Molo Cebrián, Luis Muiño y Mónica González."
  },
  {
    imgUrl: "https://picsum.photos/200",
    title: "Leyendas legendarias",
    description: "Podcast de terror y misterio conducido por José Antonio Badía, Eduardo Espinosa y Mario Capistrán."
  },
  {
    imgUrl: "https://picsum.photos/200",
    title: "Nadie Sabe Nada",
    description: "Podcast de comedia conducido por Andreu Buenafuente y Berto Romero."
  }
]

document.querySelector('#app').innerHTML = `
  ${Navbar()}
  ${Content(items)}
`

