import React from 'react';
import '../../css/reset.css'
import '../../css/index.css';
import '../../css/body.css';
import Header from '../header/header.js';
import { TitleName } from '../main/topics/topicsName.js';




function Projects() {
    return (
        <div>
            <Header />
            <TitleName name="EM CONSTRUÇÃO" />
        </div>
    );
}

export default Projects;