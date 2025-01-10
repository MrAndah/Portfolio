import "./about.css"

function Skills() {
    return(
        <section id="skills">
            <h1 className="h1">  MY Skills </h1>
            <div className="icons">
                <div className="icon-container" >
                    <div className="skill-box">
                        <img className="skill-img" src="/src/assets/react-svgrepo-com.svg" id="react"/>
                        <p className="skill-text"> React</p>
                    </div>
                    <div className="skill-box">
                        <img className="skill-img" src="/src/assets/django.svg"/> 
                        <p className="skill-text">  DJango</p>
                    </div>
                    <div className="skill-box">
                        <img className="skill-img" src="/src/assets/javascript-logo-svgrepo-com.svg"/>
                        <p className="skill-text"> Javascript</p>
                    </div>
                    <div className="skill-box">
                        <img className="skill-img" src="/src/assets/html-5-svgrepo-com.svg"/>
                        <p className="skill-text"> HTML</p>
                    </div>
                    <div className="skill-box">
                        <img className="skill-img" src="/src/assets/css-3-svgrepo-com.svg"/>
                        <p className="skill-text"> CSS</p>  
                    </div>
                    <div className="skill-box">
                        <img className="skill-img" src="/src/assets/python.svg"/>
                        <p className="skill-text"> Python</p>
                    </div>
                    <div className="skill-box">
                        <img className="skill-img" src="/src/assets/next-js-svgrepo-com.svg"/>
                        <p className="skill-text"> Next JS</p>
                    </div>
                    <div className="skill-box">
                        <img className="skill-img" src="/src/assets/arduino-svgrepo-com.svg"/>
                        <p className="skill-text"> Arduino</p>
                    </div>
                    <div className="skill-box">
                        <img className="skill-img" src="/src/assets/raspberry-pi-svgrepo-com.svg"/>
                        <p className="skill-text"> Raspberry-Pi</p>
                    </div>
                    <div className="skill-box">
                        <img className="skill-img" src="/src/assets/vite-svgrepo-com.svg"/>
                        <p className="skill-text"> Vite </p>                
                    </div>





                </div>
            </div>

        </section>
    )
}

export default Skills
