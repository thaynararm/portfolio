import React from 'react';
import './individualIcons.css';


function IndividualIcon({icon, imgIcon}) {
    return (
        <li className="skills__individual">
            <a href={getLinkIcon(icon)}>
                <img src={imgIcon} alt={icon} />
                <p>{icon}</p>
            </a>
        </li>
    );
};

export default IndividualIcon;


function getLinkIcon(icon) {

    var icon = icon.replace(" ", "")

    const languages = {
        PYTHON: "https://www.python.org",
        JAVA: "https://www.java.com",
        JAVASCRIPT: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
        HTML: "https://www.w3schools.com/html/html_intro.asp",
        CSS: "https://developer.mozilla.org/pt-BR/docs/Web/CSS",
        DAX: "https://learn.microsoft.com/pt-br/dax/",
        SQL: "https://developer.mozilla.org/en-US/docs/Glossary/SQL",
        DJANGO: "https://docs.djangoproject.com/en/5.0/",
        FLASK: "https://flask.palletsprojects.com/en/3.0.x/",
        SPRING: "https://spring.io/projects/spring-framework",
        REACT: "https://pt-br.legacy.reactjs.org/",
        PANDAS: "https://pandas.pydata.org/docs/user_guide/index.html#user-guide",
        VSCODE: "https://code.visualstudio.com/",
        GITHUB: "https://github.com/",
        POWERBI: "https://powerbi.microsoft.com/pt-br/desktop/",
        SQLSERVER: "https://www.microsoft.com/pt-br/sql-server/sql-server-downloads",

    }

    if (icon in languages) {
        return languages[icon];
    } else {
        return "#"
    }
}
