import React from 'react';
import './textAbout.css';
import './textCurriculum.css'
import Schooling from '../curriculum/schooling/schooling';
import Professional from '../curriculum/professional/professional'
import Knowledges from '../curriculum/knowledges/knowledges';


function TextCurriculum() {
    return (
        <section>
            <Schooling />
            <Professional />
            <Knowledges />
        </section>
    );
};

export default TextCurriculum;
