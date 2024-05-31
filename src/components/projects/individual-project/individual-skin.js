import React from 'react';
import './individual-skin.css'





function IndividualSkin({ nameSkin, background }) {
    return (
        <p className='individual-skin'>{nameSkin}</p>
    );
}

export default IndividualSkin;