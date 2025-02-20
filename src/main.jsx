import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Home from './port.jsx'
import Skills from './about.jsx'
import { BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom/client';


ReactDOM.createRoot(document.getElementById('root')).render(
  <StrictMode>
       <Home/>
       <Skills/>
  </StrictMode>,
)
