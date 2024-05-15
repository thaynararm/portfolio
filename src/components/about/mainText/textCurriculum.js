import React from 'react';
import './textAbout.css';
import './textCurriculum.css'
import { TopicName } from '../../main/topics/topicsName';


function TextCurriculum() {
    return (
        <section className='curriculum__schooling'> 
            <TopicName name="Escolaridade" />
            <div className='curriculum__schooling__div'>
                <div>
                    <h2>Pós-Graduação MBA em Andamento - Engenharia de Software</h2>
                    <h3>Universidade de São Paulo (USP)</h3>
                    <p>Início: 05/2024</p>
                    <p>Provável Conclusão: 12/2025</p>
                </div>
                <div>
                    <h2>Graduação em Andamento - Análise e Desenvolvimento de Sistemas</h2>
                    <h3>Universidade Católica de Brasília (UCB)</h3>
                    <p>Início: 01/2023</p>
                    <p>Provável Conclusão: 12/2024</p>
                </div>
                <div>
                    <h2>Graduação Completa - Matemática</h2 >
                    <h3>Universidade de Brasília (UnB)</h3>
                    <p>Início: 08/2018</p>
                    <p>Conclusão: 08/2022</p>
                </div>
            </div>
        </section>
        // <div>
        //     <TopicName name="Experiências Profissionais" />
        //     <div className='curriculum-experience'>
        //         <div className='curriculum-experience-div'>
        //             <p className='curriculum-title'>Freelancer - Desenvolvedora Web</p>
        //             <div className='curriculum-experience-subtitle'>
        //                 <div>
        //                     <p className='curriculum-subtitle'>Grow BPO Financeiro</p>
        //                 </div>
        //                 <div>
        //                     <p className='curriculum-experience-subtitle-date'>Abr/2024 - Presente</p>
        //                 </div>
        //             </div>
        //             <p className='curriculum-experience-text'>
        //                 <li>Desenvolvimento de sites e aplicações web utilizando os frameworks Django e React. </li>
        //                 <li>Autogestão de projetos, incluindo prazos e entregas.</li> 
        //                 <li>Implementação de soluções personalizadas para atender às necessidades do cliente. </li></p>
        //         </div>
        //         <div className='curriculum-experience-div'>
        //             <p className='curriculum-title'>Estágio - Análise de Dados</p>
        //             <div className='curriculum-experience-subtitle'>
        //                 <div>
        //                     <p className='curriculum-subtitle'>Fundação Banco do Brasil</p>
        //                 </div>
        //                 <div>
        //                     <p className='curriculum-experience-subtitle-date'>Set/2023 - Presente</p>
        //                 </div>
        //             </div>
        //             <p className='curriculum-experience-text'>
        //                 <li>Avaliação de demandas de negócios e análise de dados.</li>
        //                 <li>Colaboração eficaz com equipes.</li>
        //                 <li>Habilidades em Power Query para extração e preparação de dados.</li>
        //                 <li>Utilização do Power BI para criação de dashboards e relatórios.</li>
        //                 <li>Domínio da linguagem DAX para métricas de dashboards e criação de visualizações informativas.</li>
        //                 <li>Aplicação avançada de Excel, SQL e Python para manipulação e análise de dados.</li></p>
        //         </div>
        //         <div className='curriculum-experience-div'>
        //             <p className='curriculum-title'>Assistente Administrativo e Financeiro</p>
        //             <div className='curriculum-experience-subtitle'>
        //                 <div>
        //                     <p className='curriculum-subtitle'>Voxel Gestão Empresarial</p>
        //                 </div>
        //                 <div>
        //                     <p className='curriculum-experience-subtitle-date'>Dez/2023 - Set/2023</p>
        //                 </div>
        //             </div>
        //             <p className='curriculum-experience-text'>
        //                 <li>Coleta, organização e análise de dados administrativos.</li>
        //                 <li>Preparação de relatórios gerenciais no Excel.</li>
        //                 <li>Trabalho colaborativo com diferentes departamentos para garantir a consistência na interpretação de dados.</li>
        //                 <li>Comunicação verbal e escrita na transmissão de informações administrativas de forma clara e precisa.</li></p>
        //         </div>
        //         <div className='curriculum-experience-div'>
        //             <p className='curriculum-title'>Professora de Matemática</p>
        //             <div className='curriculum-experience-subtitle'>
        //                 <div>
        //                     <p className='curriculum-subtitle'>Colégio Elite | Método Viana Costa</p>
        //                 </div>
        //                 <div>
        //                     <p className='curriculum-experience-subtitle-date'>Ago/2019 - Dez/2022</p>
        //                 </div>
        //             </div>
        //             <p className='curriculum-experience-text'>
        //                 <li>Criação e adaptação de materiais didáticos.</li>
        //                 <li>Condução de aulas dinâmicas e interativas.</li>
        //                 <li>Elaboração e aplicação de avaliações para mensurar o progresso dos alunos.</li>
        //                 <li>Estabelecimento de uma comunicação transparente e eficaz com os pais, compartilhando informações sobre o progresso acadêmico e estratégias de melhoria.</li></p>
        //         </div>
        //     </div>
        //     <TopicName name="Certificações e Conhecimentos" />
        //     <div className='curriculum-expertise'>
        //         <p className='curriculum-experience-text'>
        //             <li>Lógica de Programação</li>
        //             <li>Linux</li>
        //             <li>JavaScript</li>
        //             <li>HTML</li>
        //             <li>CSS</li>
        //             <li>React</li>
        //             <li>Git e Github</li>
        //             <li>Java</li>
        //             <div className='curriculum-experience-expertise'>
        //                 <li>Orientação a objetos</li>
        //             </div>
        //             <li>Python</li>
        //             <div className='curriculum-experience-expertise'>
        //                 <li>Orientação a Objetos</li>
        //                 <li>Testes Unitários</li>
        //                 <li>Pandas</li>
        //                 <li>Numpy</li>
        //             </div>
        //             <li>Django</li>
        //             <div className='curriculum-experience-expertise'>
        //                 <li>Admin</li>
        //                 <li>CRUD</li>
        //                 <li>API Rest Framework</li>
        //                 <li>Testes</li>
        //             </div>
        //             <li>Análise e Tratamento de Dados</li>
        //             <div className='curriculum-experience-expertise'>
        //                 <li>Excel</li>
        //                 <li>SQL Server</li>
        //                 <li>MySQL</li>
        //                 <li>PostgreSQL</li>
        //             </div>
        //             <li>Power BI</li>
        //             <div className='curriculum-experience-expertise'>
        //                 <li>Linguagem DAX</li>
        //                 <li>Power Query</li>
        //             </div>
        //         </p>
        //     </div>
        // </div>
    );
};

export default TextCurriculum;
