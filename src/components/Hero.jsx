import React from 'react';
import './Hero.css';

export default function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <div className="hero-text">
          <h1 className="welcome">WELCOME</h1>
          <div className="greeting">
            <span className="wave">👋</span>
            <h2>I'm Rahidul</h2>
          </div>
          <p className="tagline">Full Stack Developer | Web Designer | App Developer</p>
          <div className="social-links">
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-icon">in</a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-icon">📷</a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="social-icon">⭐</a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="social-icon">▶</a>
          </div>
        </div>
        <div className="hero-image">
          <div className="profile-placeholder">
            <span>👨‍💻</span>
          </div>
        </div>
      </div>
    </section>
  );
}
