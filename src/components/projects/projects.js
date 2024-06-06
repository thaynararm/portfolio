import React from 'react';
import '../../css/reset.css'
import '../../css/index.css';
import '../../css/body.css';
import Header from '../header/header.js';
import './individual-project/individual-project.css'
import Project from './individual-project/project.js';
import './projects.css'
import portfolio from './individual-project/imgs/portfolio.png'
import aluraPortfolio1 from './individual-project/imgs/alura-portfolio1.png'
import IndividualSkin from './individual-project/individual-skin.js';




function Projects() {
    return (
        <div>
            <Header />
            <section className='projects'>
                <Project
                    title="PORTFÓLIO"
                    img={portfolio}
                    hashtags="#FRONTEND"
                    nameSkins= {[
                        <IndividualSkin nameSkin="React" />,
                        ]}/>
                <Project
                    title="PRIMEIRO PROJETO EM FRONT END"
                    img={aluraPortfolio1}
                    hashtags="#FRONTEND"
                    nameSkins= {[
                        <IndividualSkin nameSkin="HTML" />,
                        <IndividualSkin nameSkin="CSS" />,
                        ]}/>
            </section>
        </div>
    );
}

export default Projects;