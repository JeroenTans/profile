import React from 'react'
import './Body.css'
import body from '../../images/body.png'
import drone from "../../images/drone.png";

function Body () {
    return (
     <div id="bodyImageBox">
         <div className="droneBox">
             <img src={drone} alt="drone"/>
         </div>
         <div className="textBox">
             <div id="buttonBox">
                 <button className="buttons">Info</button>
                 <button className="buttons">Projecten</button>
                 <button className="buttons">Ambitites</button>
             </div>
         </div>
         <div className="bodyBox">
            <img id="bodyImage" src={body} alt="body"/>
         </div>
     </div>
    )
}

export default Body