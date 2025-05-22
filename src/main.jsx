import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { DadosCombatesProvider } from './context/DadosCombatesContext.jsx'

createRoot(document.getElementById('root')).render(
  <DadosCombatesProvider>
    <App />
  </DadosCombatesProvider>

)
