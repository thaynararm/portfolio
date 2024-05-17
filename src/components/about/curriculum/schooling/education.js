import React from 'react';

function Education( {title, university, start, end}  ) {
    return (
        <div>
            <h2>{title}</h2>
            <h3>{university}</h3>
            <p>{start}</p>
            <p>{end}</p>
        </div>
    );
};

export default Education;



