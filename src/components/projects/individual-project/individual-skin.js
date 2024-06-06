import React from 'react';
import './individual-skin.css'





function IndividualSkin({ nameSkin }) {

    const styles = {
        "React": {  backgroundColor: "#00D8FF" },
        "Python": { backgroundColor: "#FEDC00" },
        "HTML": { backgroundColor: "#FF4B00" },
        "CSS": { backgroundColor: "#1572B6" },
    };

    const style = styles[nameSkin] || { backgroundColor: "black" };

    return (
        <p style={{ backgroundColor: style.backgroundColor }} className='individual-skin'>{nameSkin}</p>
    );
}

export default IndividualSkin;