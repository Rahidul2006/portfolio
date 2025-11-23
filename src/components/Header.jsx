import React, { useState, useEffect } from 'react';
import './Header.css';
import profilePhoto from '../assets/photo.png';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="header-container">
        <div className="logo">
          <img src={profilePhoto} alt="Rahidul Khan" className='logoimg' />
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
