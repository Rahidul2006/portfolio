import React, { useState } from 'react';
import './Header.css';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">
          <a href="#home">Rahidul Khan</a>
        </div>
        <nav className={`nav ${isMenuOpen ? 'active' : ''}`}>
          <button onClick={() => scrollToSection('home')} className="nav-link">Home</button>
          <button onClick={() => scrollToSection('expertise')} className="nav-link">Expertise</button>
          {/* <button onClick={() => scrollToSection('achievement')} className="nav-link">Milestones</button> */}
          <button onClick={() => scrollToSection('portfolio')} className="nav-link">Projects</button>
          <button onClick={() => scrollToSection('about')} className="nav-link">About</button>
          <button onClick={() => scrollToSection('resume')} className="nav-link">Skills</button>
          <button onClick={() => scrollToSection('certification')} className="nav-link">Certifications</button>
          <button onClick={() => scrollToSection('contact')} className="nav-link">Contact</button>
        </nav>
        <button className="menu-toggle" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          ☰
        </button>
      </div>
    </header>
  );
}
