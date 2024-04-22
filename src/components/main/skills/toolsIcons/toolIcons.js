import React from 'react';
import IndividualIcon from "../individualIcons/individualIcons";

import VSCODE from "./imgs/VSCODE.png";
import SQLSERVER from "./imgs/SQLSERVER.png";
import GITHUB from "./imgs/GITHUB.png";
import POWERBI from "./imgs/POWERBI.png";



function IconBlockTools() {
    return (
        <div className="img-icons-skills">
            <IndividualIcon icon="VS CODE" imgIcon={VSCODE}/>
            <IndividualIcon icon="SQL SERVER" imgIcon={SQLSERVER}/>
            <IndividualIcon icon="GITHUB" imgIcon={GITHUB}/>
            <IndividualIcon icon="POWER BI" imgIcon={POWERBI}/>
        </div>
    );
  };

export default IconBlockTools;