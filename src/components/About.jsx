import React, { useState } from 'react';
import './About.css';

export default function About() {
  const [activeTab, setActiveTab] = useState('biography');

  const biography = {
    name: 'Rahidul',
    email: 'krahidul869@gmail.com',
    role: 'Full Stack Developer',
    bio: 'Passionate and Innovative Developer Committed to Driving Positive Societal Impact Through Creativity. Proven Track Record of Effective Problem Solving, Hard Work, and Originality. Enthusiastic about Delivering Meaningful Contributions and Inspiring Others.'
  };

  const skills = [
    { category: 'Frontend', items: ['React', 'TypeScript', 'CSS3', 'Vite', 'Tailwind'] },
    { category: 'Backend', items: ['Node.js', 'Python', 'Django', 'C#', '.NET'] },
    { category: 'Mobile', items: ['React Native', 'iOS', 'Android'] },
    { category: 'Tools', items: ['Git', 'Docker', 'AWS', 'MongoDB', 'PostgreSQL'] }
  ];

//   const experience = [
//     {
//       role: 'Senior Developer',
//       company: 'Tech Company Inc.',
//       period: '2023 - Present',
//       description: 'Led development of scalable web applications and mentored junior developers.'
//     },
//     {
//       role: 'Full Stack Developer',
//       company: 'Digital Solutions Ltd',
//       period: '2022 - 2023',
//       description: 'Built and maintained multiple full-stack applications using modern technologies.'
//     },
//     {
//       role: 'Junior Developer',
//       company: 'StartUp Hub',
//       period: '2021 - 2022',
//       description: 'Contributed to frontend and backend development of web applications.'
//     }
//   ];

  return (
    <section id="about" className="about">
      <div className="container">
        <h2 className="section-title">ABOUT ME</h2>
        <p className="section-subtitle">I can develop that help people</p>

        <div className="about-wrapper">
          <div className="about-profile">
            <div className="profile-image">
              <div className="image-placeholder">👨‍💼</div>
            </div>
            <h3>{biography.name}</h3>
            <p className="role">{biography.role}</p>
            <p className="company">@ {biography.company}</p>
          </div>

          <div className="about-content">
            <div className="tabs">
              <button 
                className={`tab ${activeTab === 'biography' ? 'active' : ''}`}
                onClick={() => setActiveTab('biography')}
              >
                BIOGRAPHY
              </button>
              <button 
                className={`tab ${activeTab === 'skills' ? 'active' : ''}`}
                onClick={() => setActiveTab('skills')}
              >
                SKILLS
              </button>
              {/* <button 
                className={`tab ${activeTab === 'experience' ? 'active' : ''}`}
                onClick={() => setActiveTab('experience')}
              >
                EXPERIENCE
              </button> */}
            </div>

            <div className="tab-content">
              {activeTab === 'biography' && (
                <div className="biography">
                  <p>{biography.bio}</p>
                  <div className="contact-info">
                    <p><strong>Name:</strong> {biography.name}</p>
                    <p><strong>Email:</strong> {biography.email}</p>
                  </div>
                </div>
              )}

              {activeTab === 'skills' && (
                <div className="skills-content">
                  {skills.map((skillGroup, idx) => (
                    <div key={idx} className="skill-group">
                      <h4>{skillGroup.category}</h4>
                      <div className="skill-tags">
                        {skillGroup.items.map((skill, i) => (
                          <span key={i} className="skill-tag">{skill}</span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {activeTab === 'experience' && (
                <div className="experience-content">
                  {experience.map((exp, idx) => (
                    <div key={idx} className="experience-item">
                      <h4>{exp.role}</h4>
                      <p className="company-name">{exp.company} • {exp.period}</p>
                      <p className="experience-desc">{exp.description}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
