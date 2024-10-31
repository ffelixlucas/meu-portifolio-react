// src/components/contact/Contact.js
import React, { useState } from 'react';
import './Contact.style.css';

function Contact() {
  // Estados para armazenar as informações do formulário
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [mensagem, setMensagem] = useState('');

  function handleSubmit(event) {
    event.preventDefault();
    // Aqui podemos implementar lógica para enviar os dados ou validar
    console.log(`Nome: ${nome}, Email: ${email}, Mensagem: ${mensagem}`);
    alert('Mensagem enviada com sucesso!');
  }

  return (
    <section className="contact-container">
      <h2>Entre em Contato</h2>
      <form className="contact-form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Seu Nome"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          required
        />
        <input
          type="email"
          placeholder="Seu E-mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <textarea
          placeholder="Sua Mensagem"
          value={mensagem}
          onChange={(e) => setMensagem(e.target.value)}
          required
        ></textarea>
        <button type="submit">Enviar</button>
      </form>
    </section>
  );
}

export default Contact;
