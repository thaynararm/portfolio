import React from 'react';
import '../../../css/reset.css'
import '../../../css/index.css';
import '../../../css/body.css';
import IndividualProject from './individual-project.js';
import ImgTeste from "./imgs/portfolio.png";
import IndividualSkin from './individual-skin.js';
import './individual-project.css'
import './project.css'




function Project({title, img, hashtags, nameSkin}) {
    return (
        <div className='project'>
            <IndividualProject
                title={title}
                img={img}
                hashtags={hashtags} />
            <div className='individual-skin'>
                {nameSkin}
            </div>
        </div>
    );
}

export default Project;