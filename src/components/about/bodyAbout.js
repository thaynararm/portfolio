import React from 'react';
import '../../css/body.css';
import './mainText/textCurriculum'
import {TitleName} from '../main/topics/topicsName';


import TextAbout from './mainText/textAbout';
import TextCurriculum from './mainText/textCurriculum';



function BodyAbout() {
    return (
        <main>
            <section>
                <TitleName name="MINHA TRAJETÓRIA" />
                <TextAbout />
            </section>
            <section className='curriculum'>
                <TitleName name="CURRÍCULO"/>
                <TextCurriculum />
            </section>
        </main>
    );
  };

export default BodyAbout;
