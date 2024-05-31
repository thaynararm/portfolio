import React from 'react';
import { TopicName } from '../../../main/topics/topicsName';
import Learning from './learning';



function Knowledges() {
    return (
        <section className='curriculum__section'>
            <TopicName name="Certificações e Conhecimentos" />
            <div className='curriculum__section__knowledges'>
                <Learning
                    learning="Lógica de Programação"
                    attributions={[]} />
                <Learning
                    learning="CSS"
                    attributions={[]} />
                <Learning
                    learning="Python"
                    attributions={[
                        "Orientação a Objetos",
                        "Testes Unitários",
                        "Pandas",
                        "Numpy"
                    ]} />
                <Learning
                    learning="Linux"
                    attributions={[]} />
                <Learning
                    learning="React"
                    attributions={[]} />
                <Learning
                    learning="Django"
                    attributions={[
                        "Admin",
                        "CRUD",
                        "API Rest Framework",
                        "Testes"
                    ]} />
                <Learning
                    learning="Git e Github"
                    attributions={[]} />
                <Learning
                    learning="Java"
                    attributions={["Orientação a objetos"]} />
                <Learning
                    learning="Análise e Tratamento de Dados"
                    attributions={[
                        "Excel",
                        "SQL Server",
                        "MySQL",
                        "PostgreSQL"
                    ]} />
                <Learning
                    learning="JavaScript"
                    attributions={[]} />
                <Learning
                    learning="AWS"
                    attributions={[
                        "EC2",
                        "S3"
                    ]} />
                <Learning
                    learning="Power BI"
                    attributions={[
                        "Linguagem DAX",
                        "Power Query"
                    ]} />
                <Learning
                    learning="HTML"
                    attributions={[]} />

            </div>
        </section>
    );
};

export default Knowledges;
