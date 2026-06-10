import { useEffect } from "react"
import { NavLink } from "react-router-dom"
function Navbar() {

    useEffect(() => {
        console.log("Cargando...")
    })

  /* Funciona... Pero, recarga la página
    return (
    <nav>
      <a href="/posts">Posts</a>
      <a href="/portfolio">Portfolio</a>
      <a href="/about">About</a>
    </nav>
  )*/

    return (
        <nav>
            <NavLink to="/posts">Posts</NavLink>
            <NavLink to="/portfolio">Portfolio</NavLink>
            <NavLink to="/about">About</NavLink>
            |
            <NavLink to="/urlParams/Mackaber">Hola Mackaber</NavLink>
            <NavLink to="/queryParams?name=Mackaber&name2=Juan">Hola Mackaber y Juan</NavLink>

        </nav>
    )
}

export default Navbar