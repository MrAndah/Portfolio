import './port.css'
import { useState , useEffect } from 'react';

function Home() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
  
    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
    
    const closeMobileMenu = () => {
      if (window.innerWidth <= 768) {
        setIsMenuOpen(false);
      }
    };
  
    useEffect(() => {
      document.body.classList.toggle('no-scroll', isMenuOpen);
      return () => document.body.classList.remove('no-scroll');
    }, [isMenuOpen]);
  
    return (
      <>
        <header>
          <div className='container'>
            <div className="Header-text">Godfrey Andah</div>
            
            <div className="nav-container">
              <button 
                className={`menu-toggle ${isMenuOpen ? 'active' : ''}`}
                id={"menu-toggle"}
                onClick={toggleMenu}
                aria-label="Toggle menu"
              >
                <span className="bar"></span>
                <span className="bar"></span>
                <span className="bar"></span>
              </button>
              
                <ul className={`nav-links ${isMenuOpen ? 'open' : ''}`} id="nav-links">
                    <span className="mobile-close-btn">
                        <button onClick={toggleMenu} aria-label="Close menu">
                            <i className="fas fa-times"></i> X
                        </button>
                    </span>
                    <li><a href="#home" onClick={closeMobileMenu}>Home</a></li>
                    <li><a href="#skills" onClick={closeMobileMenu}>Portfolio</a></li>
                    <li><a href="#projects" onClick={closeMobileMenu}>Projects</a></li>
                    <li><a href="#contact" onClick={closeMobileMenu}>Contact</a></li>
                </ul>
            </div>
  
            <div 
              className={`nav-overlay ${isMenuOpen ? 'active' : ''}`}
              onClick={toggleMenu}
            />
          </div>
        </header>
        <section id="home">
            <div className='Container'>
                <div className='Hero-Image'>
                    <img src='/src/assets/hero-image.jpg' className='hero-img'/>
                </div>
                <div className='Hero-text'>
                    <p className='pp'> Hi Im</p>
                    <h1 className='name'> Godfrey Andah</h1>
                    <p className='pp'> I am a student of KNUST currently studying computer science.
                        I am a tech enthusiast with goals of venturing into Data Science and Machine Learning   
                        but currently focused on frontend and backend development 
                    </p>
                    <div className='profile-img'>
                        <a href=' https://github.com/MrAndah' target='_blank'> <img className="github" src='/src/assets/github.png'/> </a>
                        <a href='' target='_blank'> <img className="github link" src='/src/assets/linkedin.png'/> </a>
                    </div>
        
                </div>
            </div>
        </section>
        </>               
    )
}


export default Home
