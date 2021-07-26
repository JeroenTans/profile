import React from 'react'
import './Project.css'

function Project ({url, image}) {

    return (
        <div className="projectSmall">
            <a href={url} target="_blank">
                <img id="projectImage" src={image} alt="Image"/>
            </a>
        </div>
    )
}

export default Project;