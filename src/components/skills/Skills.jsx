// src/components/skills/Skills.js
import React from 'react';
import './Skills.style.css';

function Skills() {
  const skills = [
    { name: "HTML", level: 70 },
    { name: "CSS", level: 65 },
    { name: "JavaScript", level: 40 },
    { name: "React", level: 50 },
    { name: "Node.js", level: 35 },
  ];

  return (
    <section className="skills-container">
      <h2>Minhas Habilidades</h2>
      <div className="skills-list">
        {skills.map((skill, index) => (
          <div key={index} className="skill">
            <span className="skill-name">{skill.name}</span>
            <div className="skill-bar">
              <div
                className="skill-level"
                style={{ width: `${skill.level}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
