import React from 'react';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <p>Created By <strong>Rahidul</strong> With ❤️</p>
          <div className="footer-links">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">YouTube</a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer">GitHub</a>
          </div>
          <a href="whatsapp://send?text=Check out this portfolio" className="whatsapp-link">Share on WhatsApp</a>
        </div>
        <p className="copyright">&copy; 2025 Rahidul. All rights reserved.</p>
      </div>
    </footer>
  );
}
