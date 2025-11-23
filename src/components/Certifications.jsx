import React from 'react';
import './Certifications.css';

export default function Certifications() {
  const certifications = [
    {
      id: 1,
      title: 'SIT Tumkur WIE Women IEEE National Hackathon',
      issuer: 'IEEE & SIT Tumkur',
      description: 'Secured the Finalist Position where we implemented a real-life Hospital Management System - Covid-O-Win.',
      date: '2022',
      link: 'https://example.com/cert1'
    },
    {
      id: 2,
      title: 'BMSCE CIIE Digithon 26 Hour Online Hackathon',
      issuer: 'BMSCE',
      description: 'Secured the First Runner Up Position showcasing innovative ideas to make institutions go digital.',
      date: '2022',
      link: 'https://example.com/cert2'
    },

  ];

  return (
    <section id="certification" className="certifications">
      <div className="container">
        <h2 className="section-title">CERTIFICATIONS</h2>
        <p className="section-subtitle">Have a look at my Certifications</p>
        
        <div className="certifications-grid">
          {certifications.map((cert, index) => (
            <div key={cert.id} className="certification-card">
              <div className="cert-number">{index + 1}</div>
              <h3>{cert.title}</h3>
              <p className="cert-issuer">{cert.issuer}</p>
              <p className="cert-description">{cert.description}</p>
              <p className="cert-date">{cert.date}</p>
              <a href={cert.link} className="cert-link">View Certificate →</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
