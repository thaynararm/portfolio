import React from 'react';
import '../../css/reset.css'
import '../../css/index.css';
import '../../css/body.css';
import Header from '../header/header.js';
import './individual-project/individual-project.css'
import Project from './individual-project/project.js';
import './projects.css'
import PORTFOLIO from './individual-project/imgs/portfolio.png'
import IndividualSkin from './individual-project/individual-skin.js';




function Projects() {
    return (
        <div>
            <Header />
            <section className='projects'>
                <Project
                    title="PORTFÓLIO"
                    img={PORTFOLIO}
                    hashtags="#FRONTEND"
                    nameSkin={
                        <IndividualSkin nameSkin="React" />
                    }/>
                <Project
                    title="PORTFÓLIO"
                    img={PORTFOLIO}
                    hashtags="#FRONTEND"
                    nameSkin="React" />
                <Project
                    title="PORTFÓLIO"
                    img={PORTFOLIO}
                    hashtags="#FRONTEND"
                    nameSkin="React" />
                <Project
                    title="PORTFÓLIO"
                    img={PORTFOLIO}
                    hashtags="#FRONTEND"
                    nameSkin="React" />
                <Project
                    title="PORTFÓLIO"
                    img={PORTFOLIO}
                    hashtags="#FRONTEND"
                    nameSkin="React" />
            </section>
        </div>
    );
}

export default Projects;