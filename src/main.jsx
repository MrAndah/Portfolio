import { StrictMode } from 'react'
import './index.css'
import Home from './port.jsx'
import Skills from './about.jsx'
import Contact from './contact.jsx'
import ReactDOM from 'react-dom/client';
import FadeIn from "./FadeIn.jsx";


ReactDOM.createRoot(document.getElementById('root')).render(
  <StrictMode>
      <FadeIn duration={250}>
            <Home/>
      </FadeIn>
      <FadeIn duration={250}>
            <Skills/>
      </FadeIn>
      <FadeIn duration={250}>
            <Contact/>
      </FadeIn>
  </StrictMode>,
)
