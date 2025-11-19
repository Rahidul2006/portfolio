import React from 'react';
import './Projects.css';

export default function Projects() {
  const projects = [
    { id: 1, title: 'E-Commerce Platform', description: 'Full-stack e-commerce with React and Node.js' },
    { id: 2, title: 'Social Media App', description: 'Real-time social platform with WebSockets' },
    { id: 3, title: 'Task Management System', description: 'Collaborative task management tool' },
    { id: 4, title: 'AI Chat Bot', description: 'Conversational AI using machine learning' },
    { id: 5, title: 'Analytics Dashboard', description: 'Real-time data visualization dashboard' },
    { id: 6, title: 'Mobile Weather App', description: 'Weather app with React Native' },
    { id: 7, title: 'CRM System', description: 'Customer relationship management platform' },
    { id: 8, title: 'Video Streaming Service', description: 'Scalable video streaming platform' },
    { id: 9, title: 'Blog Platform', description: 'Content management system with CMS' },
    { id: 10, title: 'Payment Gateway Integration', description: 'Secure payment processing system' }
  ];

  return (
    <section id="portfolio" className="projects">
      <div className="container">
        <h2 className="section-title">PROJECTS</h2>
        <p className="section-subtitle">Have a look at my Projects</p>
        
        <div className="projects-stats">
          <div className="stat">
            <div className="stat-number">10+</div>
            <div className="stat-text">Completed Projects</div>
          </div>
          <div className="stat">
            <div className="stat-number">3K+</div>
            <div className="stat-text">Users Reached</div>
          </div>
        </div>

        <div className="projects-grid">
          {projects.map((project) => (
            <div key={project.id} className="project-card">
              <div className="project-image">
                <div className="image-placeholder">{project.id}</div>
              </div>
              <div className="project-overlay">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <a href="#" className="project-link">View Project →</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
