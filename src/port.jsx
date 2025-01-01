import './port.css'

function Port() {
    return(
        <>
        <header> 
            <div className='container'>
                <div className="Header-text"> Godfrey Andah
                </div>
                <nav>
                    <div className="togglebtn">
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                    <ul className="navlinks">
                        <li><a href="#Home">Home</a></li>
                        <li><a href="#">Portfolio</a></li>
                        <li><a href="#">Resume</a></li>
                        <li><a href="#">Blog</a></li>
                        <li><a href="#">Contact</a></li>
                    </ul>
                </nav>
            </div>
        </header>
        <section id="Home">
            <div className='Container'>
                <div className='Hero-Image'>
                    <img src='/src/assets/hero-image.png' className='hero-img'/>
                </div>
                <div className='Hero-text'>

                </div>
            </div>
        </section>
        </>               
    )
}


export default Port
