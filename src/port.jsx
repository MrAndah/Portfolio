import './port.css'
import { useState } from 'react';

function Home() {
    
    const [menuOpen, setMenuOpen] = useState(false);

    return(
        <>
        <header> 
            <div className='container'>
                <div className="Header-text"> Godfrey Andah
                </div>
                <nav id="desktop-nav">
                    <div className="menu" onClick={() => setMenuOpen(!menuOpen)}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                    <ul className="navlinks"  id={menuOpen ? "open" : ""}>
                        <li><a href="#home">Home</a></li>
                        <li><a href="#skills">Portfolio</a></li>
                        <li><a href="#">Project</a></li>
                        <li><a href="#">Contact</a></li>
                    </ul>
                </nav>
            </div>
        </header>
        <section id="home">
            <div className='Container'>
                <div className='Hero-Image'>
                    <img src='/src/assets/hero-image.png' className='hero-img'/>
                </div>
                <div className='Hero-text'>
                    <p className='pp'> Hi Im</p>
                    <h1 className='name'> Godfrey Andah</h1>
                    <p className='pp'> Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Soluta delectus dolorum quibusdam maiores magni quod rem 
                        in porro, laborum, laudantium ex repellendus explicabo, autem molestiae!
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
