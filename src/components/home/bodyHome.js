import React from 'react';
import '../../css/body.css';
import Introduction from '../main/introduction/introduction';
import {TopicName, TitleName} from '../main/topics/topicsName';
import IconBlockLanguages from '../main/skills/languageIcons/languageIcons';
import IconBlockFrameworks from '../main/skills/frameworkIcons/frameworkIcons';
import IconBlockTools from '../main/skills/toolsIcons/toolIcons';

function BodyHome() {
    return (
        <main>
            <Introduction />
            <TitleName name="SKILLS" />
            <TopicName name="LINGUAGENS"/>
            <IconBlockLanguages />
            <TopicName name="FRAMEWORKS E BIBLIOTECAS" />
            <IconBlockFrameworks /> 
            <TopicName name="FERRAMENTAS" />
            <IconBlockTools />
        </main>
    );
  };

export default BodyHome;
