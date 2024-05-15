import React from 'react';
import IndividualIcon from "../individualIcons/individualIcons";

import PYTHON from "./imgs/PYTHON.png";
import JAVA from "./imgs/JAVA.png";
import JAVASCRIPT from "./imgs/JAVASCRIPT.png";
import HTML from "./imgs/HTML.png";
import CSS from "./imgs/CSS.png";
import DAX from "./imgs/DAX.png";
import SQL from "./imgs/SQL.png";


function IconBlockLanguages() {
    return (
        <ul className="skills">
            <IndividualIcon icon="PYTHON" imgIcon={PYTHON}/>
            <IndividualIcon icon="JAVA" imgIcon={JAVA}/>
            <IndividualIcon icon="JAVASCRIPT" imgIcon={JAVASCRIPT}/>
            <IndividualIcon icon="HTML" imgIcon={HTML}/>
            <IndividualIcon icon="CSS" imgIcon={CSS}/>
            <IndividualIcon icon="DAX" imgIcon={DAX}/>
            <IndividualIcon icon="SQL" imgIcon={SQL}/>
        </ul>
    );
  };

export default IconBlockLanguages;