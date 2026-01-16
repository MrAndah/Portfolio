import "./about.css"
import FadeIn from "./FadeIn.jsx";
import htmlLogo from "./assets/html.svg"
import cssLogo from "./assets/css.svg"
import jsLogo from "./assets/javascript.svg"
import reactLogo from "./assets/react.svg"
import sqlLogo from "./assets/sql.svg"
import javaLogo from "./assets/java.svg"
import gitLogo from "./assets/git.svg"
import dockerLogo from "./assets/docker.svg"

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
                                <img src={htmlLogo} className={"logo"}/>
                                HTML
                            </li>
                            <li>
                                <img src={cssLogo} className={"logo"}/>
                                CSS
                            </li>
                            <li>
                                <img src={jsLogo} className={"logo"}/>
                                Javascript
                            </li>
                            <li>
                                <img src={reactLogo} className={"logo react"}/>
                                REACT
                            </li>
                        </ul>
                    </div>
                    <div className={"skills-div two"}>
                        <div className={'title'}> Backend Development</div>
                        <ul className="skills-list">
                            <li>
                                <img src={sqlLogo} className={"logo"}/>
                                SQL
                            </li>
                            <li>
                                <img src={javaLogo} className={"logo"}/>
                                Java (SpringBoot)
                            </li>
                        </ul>
                    </div>
                    <div className={"skills-div three"}>
                        <div className={'title'}> Tools</div>
                        <ul className="skills-list">
                            <li>
                                <img src={gitLogo} className={"logo"}/>
                                Git & Github
                            </li>
                            <li>
                                <img src={dockerLogo} className={"logo"}/>
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
