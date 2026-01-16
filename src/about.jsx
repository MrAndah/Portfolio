import "./about.css"
import FadeIn from "./FadeIn.jsx";

function Skills() {
    return(
        <section id="skills">
            <div className="skills-container">
                <div className="skills-heading"> Skills & Expertise </div>
                <FadeIn duration={250}>
                <div className="skills-content">
                    <div className={"skills-div one"}>
                        <div className={'title'}> Frontend Development</div>
                        <ul className="skills-list">
                            <li>
                                <img src="/src/assets/html.svg" className={"logo"}/>
                                HTML
                            </li>
                            <li>
                                <img src="/src/assets/css.svg" className={"logo"}/>
                                CSS
                            </li>
                            <li>
                                <img src="/src/assets/javascript.svg" className={"logo"}/>
                                Javascript
                            </li>
                            <li>
                                <img src="/src/assets/react.svg" className={"logo react"}/>
                                REACT
                            </li>
                        </ul>
                    </div>
                    <div className={"skills-div two"}>
                        <div className={'title'}> Backend Development</div>
                        <ul className="skills-list">
                            <li>
                                <img src="/src/assets/sql.svg" className={"logo"}/>
                                SQL
                            </li>
                            <li>
                                <img src="/src/assets/java.svg" className={"logo"}/>
                                Java (SpringBoot)
                            </li>
                        </ul>
                    </div>
                    <div className={"skills-div three"}>
                        <div className={'title'}> Tools</div>
                        <ul className="skills-list">
                            <li>
                                <img src="/src/assets/git.svg" className={"logo"}/>
                                Git & Github
                            </li>
                            <li>
                                <img src="/src/assets/docker.svg" className={"logo"}/>
                                Docker
                            </li>
                        </ul>
                    </div>
                </div>
                </FadeIn>
            </div>
        </section>
    )
}

export default Skills
