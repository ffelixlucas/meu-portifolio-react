import React, { useState } from 'react';
import './Header.style.css';

function Header() {
  const [menuAberto, setMenuAberto] = useState(false);

  function toggleMenu() {
    setMenuAberto(!menuAberto);
  }

  return (
    <header className="header-container">
      <div className="logo">Lucas Fanha Felix</div>
      <div className="hamburger-menu" onClick={toggleMenu}>
        ☰
      </div>
      <nav className={`nav-menu ${menuAberto ? 'active' : ''}`}>
        <ul>
          <li><a href="#about">Sobre</a></li>
          <li><a href="#projects">Projetos</a></li>
          <li><a href="#contact">Contato</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
