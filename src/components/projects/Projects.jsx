// src/components/projects/Projects.js
import React from 'react';
import './Projects.style.css';
import todoImage from '../../assets/todo-app.jpg';
import saudacaoImage from '../../assets/saudacao-app.jpg';



// Lista de projetos
const projectList = [
    {
      id: 1,
      name: 'To-Do List App',
      description: 'Um aplicativo simples de lista de tarefas feito em React.',
      image: todoImage
    },
    {
      id: 2,
      name: 'Saudação Dinâmica',
      description: 'Um componente React que personaliza saudações com o nome do usuário.',
      image: saudacaoImage
    },
    // Adicione mais projetos aqui se necessário
  ];

function Projects() {
    return (
        <section className="projects-container">
            <h2> Meus Projetos</h2>
            <div className="projects-grid">
                {projectList.map((project) => (
                    <div key={project.id} className="project-card">
                        <img src={project.image} alt={project.name} className="project-image" />
                        <h3>{project.name}</h3>
                        <p>{project.description}</p>
                    </div>
                ) )}
            </div>
        </section>
    );
}

export default Projects;