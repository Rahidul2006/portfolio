import React from 'react';
import './Projects.css';

export default function Projects() {
  const projects = [
    { id: 1, img:"src/assets/demo.png", link:"https://github.com/Rahidul2006", title: 'Resume Builder App', description: 'Full-stack resume builder with React and Node.js' },
    { id: 2, img:"src/assets/demo.png", link:"https://github.com/Rahidul2006", title: 'Social Media App', description: 'Real-time social platform with WebSockets' },
    { id: 3, img:"src/assets/demo.png", link:"https://github.com/Rahidul2006", title: 'Task Management System', description: 'Collaborative task management tool' },
    { id: 4, img:"src/assets/demo.png", link:"https://github.com/Rahidul2006", title: 'AI Chat Bot', description: 'Conversational AI using machine learning' },
    { id: 5, img:"src/assets/demo.png", link:"https://github.com/Rahidul2006", title: 'Analytics Dashboard', description: 'Real-time data visualization dashboard' },
    { id: 6, img:"src/assets/demo.png", link:"https://github.com/Rahidul2006", title: 'Mobile Weather App', description: 'Weather app with React Native' },
    { id: 7, img:"src/assets/demo.png", link:"https://github.com/Rahidul2006", title: 'CRM System', description: 'Customer relationship management platform' },
    { id: 8, img:"src/assets/demo.png", link:"https://github.com/Rahidul2006", title: 'Video Streaming Service', description: 'Scalable video streaming platform' },
      ];

  return (
    <section id="portfolio" className="projects">
      <div className="container">
        <h2 className="section-title">PROJECTS</h2>
        <p className="section-subtitle">Have a look at my Projects</p>

        <div className="projects-grid">
          {projects.map((project) => (
            <div key={project.id} className="project-card" style={{ backgroundImage: `url(${project.img})` }}>
              <div className="project-image">
                <div className="image-placeholder"> <img src={project.img} alt={project.title} /> </div>
              </div>
              <div className="project-overlay">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <a href={project.link} className="project-link">View Project →</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
