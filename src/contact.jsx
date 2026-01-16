import "./contact.css"

function Contact () {

    return(
        <section id="contact">
            <p className="section__text__p1">Get in Touch</p>
            <h1 className="contact-title">Contact Me</h1>
            <div className="contact-icon-container">
                <a href="mailto:andahdgodfrey4@gmail.com">
                    <img className="contact-icon" src="./src/assets/email.svg" alt="email" />
                </a>
                <a href="https://github.com/MrAndah" target="_blank" >
                    <img className="contact-icon" src="./src/assets/github.png" alt="github icon" />
                </a>
                <a href="https://www.linkedin.com/in/godfrey-andah/">
                    <img className="contact-icon" src="./src/assets/linkedin.png" alt="linkedin icon" />
                </a>
                <a href="https://www.youtube.com/@GodfreyAndah" target="_blank">
                    <img className="contact-icon" src="./src/assets/youtube.svg" alt="youtube icon" />
                </a>
            </div>
            <footer>
                <div>
                    <div className="nav-links-container">
                        <ul className="contact-navlinks">
                            <li><a href="#home">About</a></li>
                            <li><a href="#skills">Experience</a></li>
                            <li><a href="#projects">Projects</a></li>
                            <li><a href="#contact">Contact</a></li>
                        </ul>
                    </div>
                </div>
                <p> &#169; 2026 Godfrey Kobina Andah. All Rights Reserved.</p>
            </footer>
        </section>

    )
}

export default Contact
