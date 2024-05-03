import React from 'react';
import './textAbout.css';
import { TopicName } from '../../main/topics/topicsName';


function TextAbout() {
    return (
        <div className="texto-about">
            <p>Olá! Meu nome é Thaynara Rodrigues Martins.</p>
            <p> Sou uma matemática, nascida e criada em Brasília - DF, apaixonada por tecnologia e com uma história única e diversificada. Minha jornada até aqui é uma mistura de paixão, determinação e aprendizado constante onde cada desafio enfrentado foi um degrau na escada do meu crescimento pessoal e profissional.</p>
            <TopicName name="Raízes na Matemática e no Desenvolvimento" />
            <p className='texto-topicos'>O mundo da matemática e da tecnologia sempre me fascinou desde cedo. Com habilidades naturalmente melhores nessa área, sempre fui aluna destaque em matemática e ciências exatas quando se tratava de notas. Já no meu tempo livre, costumava passar horas me aventurando por códigos HTML e CSS. Mesmo não sabendo exatamente como aquilo funcionava, minha curiosidade me levava a modificar medidas e experimentar, e percebia maravilhada como essas pequenas alterações podiam transformar o layout de uma página. E foi assim que minha paixão pelo desenvolvimento começou a florescer.</p>
            <TopicName name="Matemática e Ensino" />
            <p className='texto-topicos'>Ingressei na Universidade de Brasília (UnB) no segundo semestre de 2018 para cursar matemática. Durante minha graduação, a programação se fez presente em minha vida novamente, quando tive meu primeiro contato com o backend através das aulas do departamento de tecnologia. Nesse período combinei os estudos acadêmicos com a prática da docência, ministrando aulas particulares, em cursinhos, e participando de estágios em salas de aula. Ao final do primeiro semestre de 2022, recebi uma proposta para assumir um cargo como professora regente. Foi quando solicitei outorga antecipada e realizei uma prova antes do término do semestre para obter o certificado de conclusão e assim assumir turmas do ensino fundamental e médio. Como professora regente, ministrei aulas durante 6 meses, até o final de dezembro de 2022.</p>
        </div>
    );
};

export default TextAbout;
