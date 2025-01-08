import './port.css'

function Home() {
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
                    <p> Hi Im</p>
                    <h1 className='name'> Godfrey Andah</h1>
                    <p> Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Soluta delectus dolorum quibusdam maiores magni quod rem 
                        in porro, laborum, laudantium ex repellendus explicabo, autem molestiae!
                    </p>
                </div>
            </div>
        </section>
        </>               
    )
}


export default Home
