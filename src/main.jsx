import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Home from './port.jsx'
import Skills from './about.jsx'
import Contact from './contact.jsx'
import { BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import FadeIn from "./FadeIn.jsx";


ReactDOM.createRoot(document.getElementById('root')).render(
  <StrictMode>
      <FadeIn duration={250}>
            <Home/>
      </FadeIn>
      <FadeIn duration={500}>
            <Skills/>
      </FadeIn>
      <FadeIn duration={500}>
            <Contact/>
      </FadeIn>
  </StrictMode>,
)
