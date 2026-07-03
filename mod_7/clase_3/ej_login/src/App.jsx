import Navbar from './components/Navbar'
import Container from './components/Container'
import './App.css'

function App() {

  return (
    <>
      <Navbar isLoggedIn={true}/>
      <Container />
    </>
  )
}

export default App
