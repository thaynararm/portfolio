import React from 'react';
// import './textAbout.css';
// import './textCurriculum.css'
import { TopicName } from '../../../main/topics/topicsName';
import Education from '../../curriculum/schooling/education';


function Schooling() {
    return (
        <section className='curriculum__section'> 
            <TopicName name="Escolaridade" />
            <div className='curriculum__section__schooling'>
                <Education 
                    title="Pós-Graduação MBA em Andamento - Engenharia de Software"
                    university="Universidade de São Paulo (USP)"
                    start="Início: 05/2024"
                    end="Provável Conclusão: 12/2025" />
                <Education 
                    title="Graduação em Andamento - Análise e Desenvolvimento de Sistemas"
                    university="Universidade Católica de Brasília (UCB)"
                    start="Início: 01/2023"
                    end="Provável Conclusão: 12/2024" />
                <Education 
                    title="Graduação Completa - Matemática"
                    university="Universidade de Brasília (UnB)"
                    start="Início: 08/2018"
                    end="Conclusão: 08/2022" />
            </div>
        </section>        
    );
};

export default Schooling;
