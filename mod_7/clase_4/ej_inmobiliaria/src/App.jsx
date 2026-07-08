import { useState } from 'react'
import { createHouse, getAllHouses, getHouse, modifyHouse, deleteHouse } from './api/casas'
import './App.css'

function App() {
  const [house, setHouse] = useState({})
  const [response, setResponse] = useState("")
  const [id, setId] = useState(null)

  function handleFormChange(e) {

    const form = e.target.parentElement.parentElement

    const formHouse = {
      rooms: form.rooms.value,
      bathrooms: form.bathrooms.value,
      front: form.front.value,
      floors: form.floors.value,
      m2: form.m2.value
    }
    console.log(formHouse)

    setHouse(formHouse)
  }

  async function handleCreateHouse() {
    const res = await createHouse(house)
    setResponse(JSON.stringify(res))
  }

  async function handleGetHouses() {
    const res = await getAllHouses(house)
    setResponse(JSON.stringify(res))
  }

  async function handleGetHouse() {
    const res = await getHouse(id)
    setResponse(JSON.stringify(res))
  }

  async function handleModifyHouse() {
    const res = await modifyHouse(id, house)
    setResponse(JSON.stringify(res))
  }

  async function handleDeleteHouse() {
    const res = await deleteHouse(id)
    setResponse(JSON.stringify(res))
  }

  return (
    <>
      <form action="#" onChange={handleFormChange}>
        <p>Habitaciones: <input type="number" name='rooms' /></p>
        <p>Baños: <input type="number" name='bathrooms'/></p>
        <p>Fachada: <input type="text" name='front' /></p>
        <p>N. Pisos: <input type="number" name='floors' /></p>
        <p>M2: <input type="number" name='m2' /></p>
      </form>

      <p>ID: <input type="text" name="house_id" onChange={(e) => setId(e.target.value)} /></p>

      <br />
      
      <div className='horizontal'>
        <button onClick={handleCreateHouse}>Crear Casa</button>
        <button onClick={handleGetHouses}>Obtener Casas</button>
        <button onClick={handleGetHouse}>Obtener Casa</button>
        <button onClick={handleModifyHouse}>Modificar Casa</button>
        <button onClick={handleDeleteHouse}>Borrar Casa</button>
      </div>

      <br />

      <p>{response}</p>
    </>
  )
}

export default App
