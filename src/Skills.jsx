import './Skills.css'

function Skills() {
  return (
    <>
    <div className="skill-section" id="skills">
    <h2 id="skillHeading">Skills</h2>

    <hr className='skill-line' />
    <h3 className="skill1Head">Front-End</h3>

    <div className="frontSkills">
        <div className="skills">
            <ion-icon name="logo-react"></ion-icon>
            <p class="skillList">REACT JS</p>
        </div>
        <div className="skills">
            <ion-icon name="logo-css3"></ion-icon>
            <p className="skillList">CSS</p>
        </div>
        <div className="skills">
            <ion-icon name="logo-javascript"></ion-icon>
            <p className="skillList">JAVASCRIPT</p>
        </div>
        <div className="skills">
            <ion-icon name="logo-html5"></ion-icon>
            <p className="skillList">HTML5</p>
        </div>
    
    </div>
    <h3 className="skill2Head">Back-End</h3>

    <div className="backSkills">
        <div className="skills">
            <ion-icon name="logo-nodejs" className="node"></ion-icon>
            <p className="skillList">NODE JS</p>
        </div>

        <div className="skills">
            <ion-icon name="logo-github" className="git"></ion-icon>
            <p className="skillList">Git Hub</p>
        </div>

        <div className="skills">
            <ion-icon name="logo-npm" className="npm"></ion-icon>
            <p className="skillList">NPM</p>
        </div>
    </div>
    </div>
    </>
  )
}

export default Skills