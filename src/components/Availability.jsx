import React from 'react';
import './Availability.css';
import resumePDF from '../assets/Rahidul Khan Updated resume.pdf';
export default function Availability() {
  return (
    <section className="availability">
      <div className="container">
        <h2 className="section-title">MY AVAILABILITY</h2>
        
        <div className="availability-grid">
          <div className="availability-card">
            <div className="availability-icon">💼</div>
            <h3>Part Time Contribution</h3>
            <p>Available for consulting and part-time projects to help companies innovate.</p>
            <a href={resumePDF} className="hire-btn" target="_blank" rel="noopener noreferrer">View Resume</a>
          </div>
          
          <div className="availability-card highlight">
            <div className="availability-icon">🚀</div>
            <h3>I'm Available For Full Time Work</h3>
            <p>Open to exciting full-time opportunities and project collaborations.</p>
            <a href="#contact" className="hire-btn">Contact Me Now</a>
          </div>
        </div>
      </div>
    </section>
  );
}
