// src/components/aboutMe/AboutMe.js
import React from 'react';
import './AboutMe.style.css';
import profileImage from '../../assets/profile.jpg'; // Importando a imagem

function AboutMe() {
  return (
    <section className="aboutme-container">
      <img src={profileImage} alt="Foto de Lucas" className="profile-picture" />
      <div className="aboutme-content">
        <h2>Sobre Mim</h2>
        <p>Oi, eu sou o Lucas Fanha Felix! Estou me formando em Análise e Desenvolvimento de Sistemas, e sou apaixonado por programação, especialmente por criar projetos em React. Estou constantemente aprendendo e desenvolvendo novas habilidades em tecnologia.</p>

        <div className='skills'>
            <h3> habilidades</h3>
            <ul>
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
                <li>React.Js</li>
                <li>Git & GitHub</li>
            </ul>
        </div>
      </div>
    </section>
  );
}

export default AboutMe;
