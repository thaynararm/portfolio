import React from 'react';

function Learning({ learning, attributions }) {
    return (
        <div>
            <li>{learning}</li>
            <ul>
                {attributions.map((assignment, index) => (
                        <li key={index}>{assignment}</li>
                    ))}
            </ul>
        </div>
    );
};

export default Learning;



