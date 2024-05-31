import React from 'react';
import './individual-project.css'




function IndividualProject({ title, img, hashtags, skins }) {
    return (
        <div className='individual-project'>
            <h1>{title}</h1>
            <div>
                <img src={img}></img>
                <p>{hashtags}</p>
            </div>
        </div>
    );
}

export default IndividualProject;