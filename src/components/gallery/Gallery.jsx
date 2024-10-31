// src/components/gallery/Gallery.js
import React, { useState } from 'react';
import './Gallery.style.css';

// Importando imagens da pasta assets
import project1 from '../../assets/project1.jpg';
import project2 from '../../assets/project2.jpg';
import project3 from '../../assets/project3.jpg';

function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null);

  const projects = [
    {
      id: 1,
      name: 'Projeto To-Do List',
      image: project1,
      description: 'Um aplicativo simples de lista de tarefas desenvolvido em React.',
    },
    {
      id: 2,
      name: 'Projeto Saudação Dinâmica',
      image: project2,
      description: 'Componente React que personaliza saudações com base no nome do usuário.',
    },
    {
      id: 3,
      name: 'Projeto Contador',
      image: project3,
      description: 'Um contador que permite incrementar e decrementar valores.',
    },
  ];

  //função para abrir a lightbox ao clicar em uma imagem

  function openLightbox(image){
    setSelectedImage(image);
  }

  //função para fechar a lightbox ao clicar fora da imagem
  function closeLightbox(){
    setSelectedImage(null);
  }


  return (
    <section className="gallery-container">
      <h2>Galeria de Projetos</h2>
      <div className="gallery-grid">
        {projects.map((project) => (
          <div key={project.id} className="gallery-item" onClick={() => openLightbox(project.image)}>
            <img src={project.image} alt={project.name} />
            <div className="gallery-info">
              <h3>{project.name}</h3>
              <p>{project.description}</p>
            </div>
          </div>
        ))}
      </div>

     {/*renderiza apenas a imagem selecionada*/}
     {selectedImage && (
        <div className='lightbox' onClick={closeLightbox}>
           <img src={selectedImage} alt="Projeto Ampliado" /> 
        </div>
     )} 



    </section>
  );
}

export default Gallery;
