import React from 'react';
import './introduction.css';
import MainImage from "./imgs/img-principal-home.png";

function Introduction() {
    return (
        <section className="introduction">
            <div className="introduction__text">
                <h2>Prazer, sou a</h2>
                <h1>THAYNARA MARTINS</h1>
                <h3>Uma matemática apaixonada por dados e códigos.</h3>
                <h4>Desenvolvedora de sistemas Full Stack e com vasto conhecimento em análise de dados. Destaco-me em transformar números em insights e soluções eficientes para desafios complexos.</h4>                
            </div>
            <div className="introduction__img">
                <img src={MainImage} alt="Foto da Thaynara sorrindo." />
            </div>
        </section>
    );
  };

export default Introduction;
