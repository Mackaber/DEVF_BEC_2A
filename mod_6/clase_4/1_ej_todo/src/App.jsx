import NewTodo from './components/NewTodo'
import ContainerTodo from './components/ContainerTodo'
import './App.css'
import { useState } from 'react'
import { createTodo, getTodos } from './api/todos'
import { useEffect } from 'react'

function App() {
  const [todoText, setTodoText] = useState("")
  const [inputValue, setInputValue] = useState("")
  const [todos, setTodos] = useState([])

  useEffect(()=> {
    async function fetchData() {
      const response = await getTodos()
      setTodos(response)
    }
    fetchData()
  },[])

  function handleTextChange(e) {
    setInputValue(e.target.value)
    setTodoText(e.target.value)
  }

  async function handleAddClick() {
    setInputValue("")
    await createTodo(todoText)
    const response = await getTodos()
    setTodos(response)
  }

  return (
    <div id="app">
      <NewTodo {...{handleTextChange, handleAddClick, inputValue}}/>
      <ContainerTodo {...{todos}} />
    </div>
  )
}

export default App
