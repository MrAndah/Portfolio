import { StrictMode } from 'react'
import './index.css'
import Home from './home.jsx'
import Skills from './about.jsx'
import Contact from './contact.jsx'
import ReactDOM from 'react-dom/client';
import FadeIn from "./FadeIn.jsx";
import { HashRouter } from 'react-router-dom'


ReactDOM.createRoot(document.getElementById('root')).render(
  <StrictMode>
      <HashRouter>
            <FadeIn duration={250}>
                  <Home/>
            </FadeIn>
                  <Skills/>
            <FadeIn duration={250}>
                  <Contact/>
            </FadeIn>
      </HashRouter>
  </StrictMode>,
)
