import { useEffect, useState } from 'react'
import './App.css'

function App() {
  // Paso 5. Declar un state para guardar los datos
  const [posts, setPosts] = useState([])

  // Paso 1. Declar el useEffect
  useEffect(() => {
    // Paso 2. Declarar función asíncrona
    // (Porque useEffect no puede contener una función asíncrona por sí sola)
    async function fetchData() {
      // Paso 3. Cargar los dados usando fetch o axios
      const response = await fetch("https://jsonplaceholder.typicode.com/posts")
      const data = await response.json() // Extraigo el json de response se se parsea como Objeto
      console.log(data)

      // Paso 5.
      setPosts(data)
    }

    // Paso 4. Llamar la función
    fetchData()
  },[])

  return (
    // Paso 6. Mostrarlos en la interfaz
    // El atributo key se utiliza para cuando tenemos multiples elementos en React
    <>
      {posts.map((post) => 
        <p key={post.id}>{post.title}</p>
      )}
    </>
  )
}

export default App
