import React from "react"
import "./Header.css"
import backgroundImage from "../../images/background.png"
import profileJeroen from "../../images/profileJeroen.png"
import drone from "../../images/drone.png";


function Header(){
    return(
        <>
        <div id="headerBox">
            <img id="headerImage" src={backgroundImage} alt="surfImage"/>
        </div>
         <div className="imageHeaderBox">
             <img id="droneImage" src={drone} alt="drone"/>
             <img id="headerProfile" src={profileJeroen} alt="profileJeroen"/>
        </div>
            </>
    )
}

export default Header