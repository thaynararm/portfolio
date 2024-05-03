import React from 'react';
import '../../css/body.css';
import {TitleName} from '../main/topics/topicsName';

import MainImg from './mainImg/mainImg';
import TextAbout from './mainText/textAbout';
import TextCurriculum from './mainText/textCurriculum';
import SecondTextAbout from './mainText/secondTextAbout';


function BodyAbout() {
    return (
        <main>
            <TitleName name="MINHA TRAJETÓRIA" />
            <div>
                <div className="first-about">
                    <TextAbout />
                    <MainImg />
                </div>
                <SecondTextAbout />
            </div>
            <TitleName name="CURRÍCULO" />
            <div className='first-about'>
                <TextCurriculum />
            </div>
        </main>
    );
  };

export default BodyAbout;
