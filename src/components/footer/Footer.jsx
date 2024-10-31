// src/components/footer/Footer.js
import React from 'react';
import './Footer.style.css';

function Footer() {
  return (
    <footer className="footer-container">
      <p>&copy; {new Date().getFullYear()} Lucas Fanha Felix. Todos os direitos reservados.</p>
      <div className="footer-links">
        <a href="https://github.com/ffelixlucas" target="_blank" rel="noopener noreferrer">
          GitHub
        </a>
        <a href="https://www.linkedin.com/in/lucasfanhafelix/" target="_blank" rel="noopener noreferrer">
          LinkedIn
        </a>
      </div>
    </footer>
  );
}

export default Footer;
