import React from 'react';

function Experience({ title, enterprise, period, attributions }) {
    return (
        <div>
            <h2>{title}</h2>
            <h3>{enterprise}</h3>
            <p>{period}</p>
            <ul>
                {attributions.map((assignment, index) => (
                        <li key={index}>{assignment}</li>
                    ))}
            </ul>
        </div>
    );
};

export default Experience;



