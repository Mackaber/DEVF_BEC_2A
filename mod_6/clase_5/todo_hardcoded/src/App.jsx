import { useEffect, useState } from 'react'
import NewTodo from './components/NewTodo'
import ContainerTodo from './components/ContainerTodo'
import Todo from './components/Todo'
import './App.css'

function App() {
  const [todos, setTodos] = useState([])
  const [inputValue, setInputValue] = useState("")

  useEffect(() => {
    setTodos([
      {id: 1, description: "Hacer la tarea de React"},
      {id: 2, description: "Hacer la tarea de Node"},
      {id: 3, description: "Hacer la tarea de Express"},
    ])
  }, [])

  function deleteTodo(id) {
    console.log(`Borrando... ${id}`)
    // 1. Hacer una copia del state original
    const copia = todos 
    // 2. Filtrar el todo que quiero eliminar
    const filtrado = copia.filter((todo) => todo.id != id )
    // 3. Actualizar el state con la copia
    setTodos(filtrado)
  }

  function editTodo(id, newDescription) {
    console.log(`Editando... ${id}`)
    // 1. Hacer una copia del state original
    const copia = [...todos] 
    // 2. Mapear la copia y actualizar el todo que quiero editar
    const copiaActualizada = copia.map((todo) => 
      todo.id === id ? 
      {...todo, description: newDescription} : 
      todo
    )
    console.log(newDescription)
    // 3. Actualizar el state con la copia
    setTodos(copiaActualizada)
  }

  function handleTextChange(e) {
    setInputValue(e.target.value)
  }

  async function handleAddClick() {
    
    // Esto tambien funciona!
    // todos.push({ id: todos.length + 1, description: inputValue})
    
    
    // 1. Hacer una copia del state original
    const copia = todos 
    // 2. Crear un nuevo todo con el inputValue
    const nuevo = { id: copia.length + 1, description: inputValue}
    // 3. Agregar el nuevo todo a la copia
    copia.push(nuevo)
    // 4. Actualizar el state con la copia
    setTodos(copia)
    // 5. Limpiar el input
    setInputValue("")
  }

  return (
    <div>
      <NewTodo {...{handleTextChange, handleAddClick, inputValue}}/>
      <ContainerTodo>
        {todos.map((todo) => {
            const id = todo["id"];
            const todoText = todo["description"];
            return <Todo {...{id, todoText, editTodo, deleteTodo }}/>
        })}
      </ContainerTodo>
    </div>
  )
}

export default App
