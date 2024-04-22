import React from 'react';
import './mainImg.css';
import MainImage from "../imgs/img-principal-about.png";

function MainImg() {
    return (
        <div className="img-principal-about">
            <img src={MainImage} alt="Foto da Thaynara formanda." />
        </div>
    );
  };

export default MainImg;
