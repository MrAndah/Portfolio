import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Home from './port.jsx'
import Skills from './about.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Home/>
    <Skills/>
  </StrictMode>,
)
