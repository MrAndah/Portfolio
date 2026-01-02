import "./contact.css"

function Contact () {

    return(
        <section id="contact">
            <p className="section__text__p1">Get in Touch</p>
            <h1 className="title">Contact Me</h1>
            <div className="contact-info-upper-container">
                <div className="contact-info-container">
                    <img
                        src="./src/assets/email.png"
                        alt="Email icon"
                        className="icon contact-icon email-icon"
                    />
                    <p><a href="mailto:andahgodfrey4@gmail.com">Email Me</a></p>
                </div>
                <div className="contact-info-container">
                    <img
                        src="./src/assets/linkedin.png"
                        alt="LinkedIn icon"
                        className="contact-icon"
                    />
                    <p><a
                        href="https://www.linkedin.com/in/godfrey-andah?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
                        target='_blank'>LinkedIn</a></p>
                </div>
            </div>
            <footer>
                <div>
                    <div className="nav-links-container">
                        <ul className="navlinks">
                            <li><a href="#home">About</a></li>
                            <li><a href="#skills">Experience</a></li>
                            <li><a href="#projects">Projects</a></li>
                            <li><a href="#contact">Contact</a></li>
                        </ul>
                    </div>
                </div>
                <p>Copyright &#169;  Godfrey Andah. All Rights Reserved.</p>
            </footer>
        </section>

    )
}

export default Contact
