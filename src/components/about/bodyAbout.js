import React from 'react';
import '../../css/body.css';
import {TitleName} from '../main/topics/topicsName';

import MainImg from './mainImg/mainImg';
import MainText from './mainText/mainText';


function BodyAbout() {
    return (
        <main>
            <TitleName name="MINHA TRAJETÓRIA" />
            <div className="first-about">
                <MainText />
                <MainImg />
            </div>
        </main>
    );
  };

export default BodyAbout;
