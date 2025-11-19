import React from 'react';
import './Milestones.css';

export default function Milestones() {
  const milestones = [
    {
      id: 1,
      title: 'Grade Point Calculator – A Student-Friendly SGPA & CGPA Tool',
      description: 'Launched a comprehensive solution for students to compute SGPA and CGPA, generate digital marks cards, and instantly email grade cards.',
      impact: '8,500+ users and counting. Widely used across departments and trusted by students from multiple batches.',
      link: 'https://example.com',
      stats: [
        { number: '8.5K+', label: 'Active Users' },
        { number: '3', label: 'Departments' },
        { number: '10+', label: 'Batches Served' }
      ]
    },
    {
      id: 2,
      title: 'Mobile Learning Platform',
      description: 'Built a cross-platform mobile application using React Native for interactive learning experiences.',
      impact: '2,000+ downloads with 4.5-star rating on app stores.',
      link: 'https://example.com',
      stats: [
        { number: '2K+', label: 'Downloads' },
        { number: '4.5⭐', label: 'Rating' },
        { number: '50+', label: 'Lessons' }
      ]
    }
  ];

  return (
    <section id="achievement" className="milestones">
      <div className="container">
        <h2 className="section-title">MILESTONES</h2>
        <p className="section-subtitle">Have a look at my Milestones</p>
        <div className="milestones-grid">
          {milestones.map((milestone) => (
            <div key={milestone.id} className="milestone-card">
              <div className="milestone-content">
                <h3>{milestone.title}</h3>
                <p className="milestone-description">{milestone.description}</p>
                <p className="milestone-impact">{milestone.impact}</p>
                <div className="milestone-stats">
                  {milestone.stats.map((stat, idx) => (
                    <div key={idx} className="stat-item">
                      <div className="stat-number">{stat.number}</div>
                      <div className="stat-label">{stat.label}</div>
                    </div>
                  ))}
                </div>
                <a href={milestone.link} className="milestone-link">View Project →</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
