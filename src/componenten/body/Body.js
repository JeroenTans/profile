import React from 'react'
import './Body.css'
import body from '../../images/body.png'

function Body () {
    return (
     <div id="bodyImageBox">
         <img id="bodyImage" src={body} alt="body"/>
     </div>
    )
}

export default Body