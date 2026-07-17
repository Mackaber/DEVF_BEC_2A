import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import './App.css'
import { NavLink } from 'react-router-dom'
import { getPosts } from './api/posts'
import { createPost } from './api/posts'

const schema = yup.object({
  title: yup.string().required("El título es requerido"),
  content: yup.string().required("El contenido es requerido"),
}) 

function App() {
  const [posts, setPosts] = useState([])
  const { register, handleSubmit } = useForm({ resolver: yupResolver(schema) })

  useEffect(() => {
    getPosts().then(response => {
      setPosts(response.data)
    })
  }, [])

  function onSubmit(data) {
    createPost(data).then(response => {
      console.log(response.data)

      setPosts([...posts, response.data])
    })
  }

  return (
    <div className="App">
      <h1>Bienvenido a mi blog</h1>
      <p>Este es un blog de ejemplo</p>

      {/* Formulario para posts */}
      <form onSubmit={handleSubmit(onSubmit)}>
        <input {...register("title")} placeholder="Título" />
        <textarea {...register("content")} placeholder="Contenido" />
        <button type="submit">Crear Post</button>
      </form>

      {posts.map(post => (
        <NavLink key={post.id} to={`/post/${post.id}`}>
          <h2>{post.title}</h2>
        </NavLink>
      ))}
    </div>
  )
}

export default App
