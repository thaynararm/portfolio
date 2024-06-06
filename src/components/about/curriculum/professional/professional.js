import React from 'react';
import { TopicName } from '../../../main/topics/topicsName';
import Experience from './experience';


function Professional() {
    return (
        <section className='curriculum__section'> 
            <TopicName name="Experiências Profissionais" />
            <div className='curriculum__section__professional'>
                <Experience 
                    title="Freelancer - Desenvolvedora Web"
                    enterprise="Grow BPO Financeiro"
                    period="Abr/2024 - Presente"
                    attributions={[
                        "Desenvolvimento de aplicações web utilizando Django e Django Rest Framework para back end e React para front end.", 
                        "Criação e integração de APIs RESTful.", 
                        "Configuração e gerenciamento do Django Admin",
                        "Utilização do PostgreSQL para armazenamento de dados.",
                        "Implementação e implantação das aplicações na AWS."]}/>

                <Experience 
                    title="Estágio - Análise de Dados"
                    enterprise="Fundação Banco do Brasil"
                    period="Set/2023 - Presente"
                    attributions={[
                        "Avaliação de demandas de negócios e análise de dados.",
                        "Colaboração eficaz com equipes.",
                        "Habilidades em Power Query para extração e preparação de dados.",
                        "Utilização do Power BI para criação de dashboards e relatórios.",
                        "Domínio da linguagem DAX para métricas de dashboards e criação de visualizações informativas.",
                        "Aplicação avançada de Excel, SQL e Python para manipulação e análise de dados."]}/>

                <Experience 
                    title="Assistente Administrativo e Financeiro"
                    enterprise="Voxel Gestão Empresarial"
                    period="Dez/2023 - Set/2023"
                    attributions={[
                        "Coleta, organização e análise de dados administrativos.",
                        "Preparação de relatórios gerenciais no Excel.",
                        "Trabalho colaborativo com diferentes departamentos para garantir a consistência na interpretação de dados.",
                        "Comunicação verbal e escrita na transmissão de informações administrativas de forma clara e precisa."]}/>

                <Experience 
                    title="Professora de Matemática"
                    enterprise="Colégio Elite | Método Viana Costa"
                    period="Ago/2019 - Dez/2022"
                    attributions={[
                        "Criação e adaptação de materiais didáticos.",
                        "Condução de aulas dinâmicas e interativas.",
                        "Elaboração e aplicação de avaliações para mensurar o progresso dos alunos.",
                        "Estabelecimento de uma comunicação transparente e eficaz com os pais, compartilhando informações sobre o progresso acadêmico e estratégias de melhoria."]}/>
            </div>
        </section>        
    );
};

export default Professional;
