import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from './contexts/Provider.jsx'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* Paso 6. Envolver la aplicacion con Provider */}
    <Provider>
        <App />
    </Provider>
  </StrictMode>,
)
