import React, {useState} from 'react'
import './Body.css'
import body from '../../images/body.png'
import Info from "../buttonLinks/Info";
import Ambition from "../buttonLinks/Ambition";
import Project from "../buttonLinks/Project";
import localsForLocalsImage from '../../images/localsForLocals.png'

function Body () {

    const [info, toggleInfo] = useState(true);
    const [project, toggleProject] = useState(false);
    const [ambition, toggleAmbition] = useState(false);

    const linkedIn = "https://www.linkedin.com/in/jeroen-tans-9a9417205/";
    const github = "https://github.com/JeroenTans";
    const localsForLocalsWeb = "https://romantic-chandrasekhar-a5b02f.netlify.app/";

    function toggleInfoTrue(){
        toggleInfo(true);
        toggleAmbition(false);
        toggleProject(false);
    }

    function toggleAmbitionTrue(){
        toggleInfo(false);
        toggleAmbition(true);
        toggleProject(false);
    }

    function toggleProjectTrue(){
        toggleInfo(false);
        toggleAmbition(false);
        toggleProject(true);
    }

    return (
     <div id="bodyImageBox">
         <div id="completeLeftBox">
         <div>
             <h3>Programmeer talen:</h3>
             <div id="titleBox">
                <div>
                    <h4>Front end:</h4>
                    <p>Javascript</p>
                    <p>HTML</p>
                    <p>CSS3</p>
                    <p>React</p>
                </div>
                 <div>
                     <h4>Back end:</h4>
                     <p>Java</p>
                     <p>Springboot</p>
                 </div>
             </div>
             <div>
                 <h3>Links:</h3>
                 <div>
                 <a className="linkToWebs" href={linkedIn} target="_blank">Klik hier voor de linkedin pagina</a>
                 </div>
                 <div>
                 <a className="linkToWebs" href={github} target="_blank">Klik hier voor de github pagina</a>
                </div>
             </div>
         </div>
         </div>
         <div className="textBox">
             <div id="buttonBox">
                 <button className="buttons" onClick={toggleInfoTrue}>Info</button>
                 <button className="buttons" onClick={toggleProjectTrue}>Projecten</button>
                 <button className="buttons" onClick={toggleAmbitionTrue}>Ambities</button>
             </div>
             <div id="infoBox">
                 {project && <p className="infoH3">Zie mijn github voor niet live-online projecten.<Project url={localsForLocalsWeb} image={localsForLocalsImage}/></p> }
                 {info && <Info/>}
                 {ambition && <Ambition/>}
             </div>
         </div>
         <div className="bodyBox">
            <img id="bodyImage" src={body} alt="body"/>
         </div>
     </div>
    )
}

export default Body