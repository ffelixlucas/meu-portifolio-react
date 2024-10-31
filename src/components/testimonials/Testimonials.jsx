// src/components/testimonials/Testimonials.js
import React, { useState, useEffect } from 'react';
import './Testimonials.style.css';

function Testimonials() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  // Testemunhos de exemplo (placeholders)
  const testimonials = [
    {
      name: "John Doe",
      feedback: "Lucas é um profissional incrível. Ele realmente se importa com o que faz e está sempre disposto a aprender mais!",
    },
    {
      name: "Jane Smith",
      feedback: "Trabalhar com Lucas foi uma ótima experiência. Ele trouxe ótimas ideias e fez um trabalho excelente!",
    },
    {
      name: "Michael Johnson",
      feedback: "Lucas é extremamente dedicado e tem uma grande habilidade para resolver problemas complexos com simplicidade.",
    },
  ];

  // UseEffect para trocar automaticamente o testemunho a cada 5 segundos
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000); // Muda o testemunho a cada 5 segundos

    return () => clearInterval(timer); // Limpa o timer quando o componente é desmontado
  }, [testimonials.length]);

  return (
    <section className="testimonials-container">
      <h2>O que dizem sobre mim</h2>
      <div className="testimonial">
        <p>"{testimonials[currentTestimonial].feedback}"</p>
        <h4>- {testimonials[currentTestimonial].name}</h4>
      </div>
    </section>
  );
}

export default Testimonials;
