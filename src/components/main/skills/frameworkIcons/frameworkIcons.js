import React from 'react';
import IndividualIcon from "../individualIcons/individualIcons";

import DJANGO from "./imgs/DJANGO.png";
import FLASK from "./imgs/FLASK.png";
import SPRING from "./imgs/SPRING.png";
import REACT from "./imgs/REACT.png";
import PANDAS from "./imgs/PANDAS.png";



function IconBlockFrameworks() {
    return (
        <ul className="skills">
            <IndividualIcon icon="DJANGO" imgIcon={DJANGO}/>
            <IndividualIcon icon="FLASK" imgIcon={FLASK}/>
            <IndividualIcon icon="SPRING" imgIcon={SPRING}/>
            <IndividualIcon icon="REACT" imgIcon={REACT}/>
            <IndividualIcon icon="PANDAS" imgIcon={PANDAS}/>
        </ul>
    );
  };

export default IconBlockFrameworks;