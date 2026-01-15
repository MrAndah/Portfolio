import "./about.css"

function Skills() {
    return(
        <section id="skills">
            <div className="skills-container">
                <div className="skills-heading"> Skills & Expertise </div>
                <div className="skills-content">
                    <div className={"skills-div"}>
                        <div className={'title'}> Frontend Development</div>
                        <ul className="skills-list">
                            <li> HTML</li>
                            <li> CSS</li>
                            <li> Javascript</li>
                            <li> REACT</li>
                        </ul>
                    </div>
                    <div className={"skills-div"}>
                        <div className={'title'}> Backend Development</div>
                        <ul className="skills-list">
                            <li> Sql</li>
                            <li> Java (SpringBoot)</li>
                        </ul>
                    </div>
                    <div className={"skills-div"}>
                        <div className={'title'}> Tools</div>
                        <ul className="skills-list">
                            <li> Git & Github</li>
                            <li> Docker</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Skills
