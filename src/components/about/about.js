import React from 'react';
import '../../css/reset.css';
import '../../css/index.css';
import Header from '../header/header.js';
import BodyAbout from './bodyAbout.js';



function About() {
    return (
        <div>
            <Header />
            <BodyAbout />
        </div>
    );
}

export default About;