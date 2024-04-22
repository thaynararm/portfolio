import React from 'react';
import './introduction.css';
import MainImage from "./imgs/img-principal-home.png";

function Introduction() {
    return (
        <div className="first">
            <div className="texto">
                <h2 className="h2">Prazer, sou a</h2>
                <h1 className="h1">THAYNARA MARTINS</h1>
                <h3 className="h3">
                    <p className="bold" >Uma matemática apaixonada por dados e códigos.</p>
                    <p>Desenvolvedora de sistemas Full Stack e com vasto conhecimento em análise de dados. Destaco-me em transformar números em insights e soluções eficientes para desafios complexos.</p>
                </h3>
            </div>
            <div className="img-principal">
                <img src={MainImage} alt="Foto da Thaynara sorrindo." />
            </div>
        </div>
    );
  };

export default Introduction;
