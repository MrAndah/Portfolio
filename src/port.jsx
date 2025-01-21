import './port.css'

function Home() {
    
    function toggleMenu() {
        const menu = document.querySelector(".menu-links");
        const icon = document.querySelector(".hamburger-icon");
        menu.classList.toggle("open");
        icon.classList.toggle("open");
      }


    return(
        <>
        <header> 
            <div className='container'>
                <div className="Header-text"> Godfrey Andah
                </div>
                <nav id="desktop-nav">
                    <ul className="navlinks">
                        <li><a href="#home">Home</a></li>
                        <li><a href="#skills">Portfolio</a></li>
                        <li><a href="#">Project</a></li>
                        <li><a href="#">Contact</a></li>
                    </ul>
                </nav>
                <nav id="hamburger-nav">
                    <div className="hamburger-menu">
                        <div className="hamburger-icon" onClick={()=>toggleMenu()}>
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                        <div className="menu-links">
                            <li><a href="#about" onClick={()=>toggleMenu()}>About</a></li>
                            <li><a href="#experience" onClick={()=>toggleMenu()}>Experience</a></li>
                            <li><a href="#projects" onClick={()=>toggleMenu()}>Projects</a></li>
                            <li><a href="#contact" onClick={()=>toggleMenu()}>Contact</a></li>
                        </div>
                    </div>
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
