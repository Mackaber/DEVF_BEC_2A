import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

// Paso 1. Importart BrowserRouter de react-router-dom
import { BrowserRouter } from 'react-router-dom'
import RoutesIndex from './routes/index.jsx'
import Navbar from './components/Navbar.jsx'
 
createRoot(document.getElementById('root')).render(
  // Paso 2. Envolver la App con BrowserRouter
  <BrowserRouter>
    <StrictMode>
      <Navbar />
      <RoutesIndex />
    </StrictMode>
  </BrowserRouter>,
)
