import App from './components/App/index.tsx'
import { createRoot } from 'react-dom/client'
import { StrictMode } from 'react'
import "./main.css"

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)