import React from 'react';
import './textAbout.css';
import { TopicName } from '../../main/topics/topicsName';


function SecondTextAbout() {
    return (
        <div className="second-text-about">
            <TopicName name="Diversificando Caminhos" />
            <p className='texto-topicos'>Após concluir minha graduação em Matemática, ingressei novamente na Universidade de Brasília, dessa vez para cursar Ciências Contábeis já que eu também nutria um interesse pelo mundo financeiro. Ao longo do segundo semestre de 2022, conciliei a docência com os estudos de Ciências Contábeis, mas percebi que a profissão já não me fazia mais feliz. Decidi deixar a sala de aula no início de 2023 e iniciar como assistente financeira em uma empresa de gestão financeira, com o intuito de aplicar meus conhecimentos contábeis e aprender mais sobre esse novo universo.</p>
            <p className='texto-topicos'>Apesar de encontrar satisfação no mundo financeiro, minha afinidade pela tecnologia permanecia. Assim, também no início de 2023, decidi ingressar na graduação de Análise e Desenvolvimento de Sistemas na Universidade Católica de Brasília (UCB). E após um semestre conciliando ambas as áreas, optei por seguir exclusivamente na área da TI, abandonando minha jornada nas finanças.</p>
            <TopicName name="Transição para a TI" />
            <p className='texto-topicos'>Quando decidi seguir exclusivamente com a Tecnologia, minha primeira escolha foi adentrar o mundo do desenvolvimento web. Em paralelo aos estudos da graduação, busquei aprofundar meus conhecimentos nesse campo através de cursos. Onde de fato mergulhei em HTML, CSS, JavaScript e, principalmente, na linguagem Python. Estudei a fundo a orientação a objetos, frameworks, bibliotecas, desenvolvimento de API's, entre outros assuntos dessa área.</p>
            <p className='texto-topicos'>Ao longo desse processo, percebi a necessidade de expandir minha gama de habilidades para além do Python. Foi então que iniciei um estágio como analista de dados na Fundação Banco do Brasil, no qual fui apresentada ao vasto universo dos dados, que também me encantaram. Durante o estágio, no qual estou até hoje, tenho a oportunidade de trabalhar com linguagens como SQL e DAX, além de criar dashboards em Power BI e a extrair e tratar dados em suas mais variadas formas.</p>
            <p className='texto-topicos'>Diante dessa experiência e dessa necessidade que senti em expandir meus conhecimentos, decidi dar início aos estudos em JAVA e também me aprofundar em React. Dessa forma, reservei o Python principalmente para a análise de dados, enquanto estudo novas linguagens e tecnologias para o desenvolvimento web, tanto no back-end quanto no front-end.</p>
            <TopicName name="Ampliando Horizontes" />
            <p className='texto-topicos'>No meu atual estágio na Fundação Banco do Brasil, tenho várias oportunidades de adquirir conhecimento para além de codar. Posso liderar projetos, apresentar resultados a executivos e participar de forma colaborativa em reuniões de equipe, fóruns e comitês. Além disso, estar inserida em um ambiente corporativo de grande impacto social é uma parte essencial de minha experiência, tendo em vista que a Fundação tem como objetivo promover, apoiar, incentivar e patrocinar ações sociais. Essa vivência não apenas contribui para o meu desenvolvimento profissional, mas também me proporciona um significativo crescimento pessoal.</p>
            <p className='texto-topicos'>Visando continuar nessa trajetória ascendente de aprimoramento de conhecimentos, estou avançando mais um degrau em minha jornada profissional cursando minha primeira Pós-graduação Lato sensu - MBA em Engenharia de Software na Universidade de São Paulo (MBA USP/Esalq). Esta oportunidade representa uma maneira de me inserir no mercado de forma mais ativa, combinando teoria e prática para aprimorar minhas habilidades e conhecimentos em desenvolvimento de software.</p>
        </div>
    );
};

export default SecondTextAbout;
