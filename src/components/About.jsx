import React, { useState } from 'react';
import './About.css';
import reactIcon from '../assets/skils-svg/react-svgrepo-com.svg';
import nodeIcon from '../assets/skils-svg/node-js-svgrepo-com.svg';
import mongoIcon from '../assets/skils-svg/mongo-svgrepo-com.svg';
import gitIcon from '../assets/skils-svg/git-svgrepo-com.svg';
import dockerIcon from '../assets/skils-svg/docker-svgrepo-com.svg';
import jsIcon from '../assets/skils-svg/js-svgrepo-com.svg';
import pythonIcon from '../assets/skils-svg/python-svgrepo-com.svg';
import htmlIcon from '../assets/skils-svg/html-5-svgrepo-com.svg';
import cssIcon from '../assets/skils-svg/css-3-svgrepo-com.svg';
import tailwindIcon from '../assets/skils-svg/tailwindcss-icon-svgrepo-com.svg';
import mysqlIcon from '../assets/skils-svg/mysql-logo-svgrepo-com.svg';
import expressIcon from '../assets/skils-svg/expressjs.svg';
import typeScriptIcon from '../assets/skils-svg/typescript-logo-svgrepo-com.svg';
import linuxIcon from '../assets/skils-svg/linux-svgrepo-com.svg';
import firebaseIcon from '../assets/skils-svg/firebase-svgrepo-com.svg';
import profilePhoto from '../assets/formal.png';

export default function About() {
  const [activeTab, setActiveTab] = useState('biography');

  const biography = {
    name: 'Rahidul',
    email: 'krahidul869@gmail.com',
    role: 'Full Stack Developer',
    linkedin: 'https://linkedin.com/in/rahidul-khan-6a3922269',
    bio: 'Passionate and Innovative Developer Committed to Driving Positive Societal Impact Through Creativity. Proven Track Record of Effective Problem Solving, Hard Work, and Originality. Enthusiastic about Delivering Meaningful Contributions and Inspiring Others.'
  };

  const skills = [
    { category: 'Frontend', items: [
      { name: 'React', icon: reactIcon },
      { name: 'TypeScript', icon: typeScriptIcon },
      { name: 'HTML', icon: htmlIcon },
      { name: 'CSS3', icon: cssIcon },
      { name: 'JavaScript', icon: jsIcon },
      { name: 'Tailwind', icon: tailwindIcon }
    ]},
    { category: 'Backend', items: [
      { name: 'Node.js', icon: nodeIcon },
      { name: 'Python', icon: pythonIcon },
      { name: 'Express.js', icon: expressIcon }
    ]},
    { category: 'Database', items: [
      { name: 'MongoDB', icon: mongoIcon },
      { name: 'MySQL', icon: mysqlIcon },
      { name: 'Firebase', icon: firebaseIcon },
    ]},
    { category: 'Tools', items: [
      { name: 'Git', icon: gitIcon },
      { name: 'Docker', icon: dockerIcon },
      { name:'linux', icon: linuxIcon}
    ]}
  ];

  const frontendSkills = ['React', 'TypeScript','HTML', 'CSS3','JavaScript', 'Tailwind'];


  const experience = [
    {
      role: 'Senior Developer',
      company: 'Tech Company Inc.',
      period: '2023 - Present',
      description: 'Led development of scalable web applications and mentored junior developers.'
    },
    {
      role: 'Full Stack Developer',
      company: 'Digital Solutions Ltd',
      period: '2022 - 2023',
      description: 'Built and maintained multiple full-stack applications using modern technologies.'
    },
    {
      role: 'Junior Developer',
      company: 'StartUp Hub',
      period: '2021 - 2022',
      description: 'Contributed to frontend and backend development of web applications.'
    }
  ];

  return (
    <section id="about" className="about">
      <div className="container">
        <h2 className="section-title">ABOUT ME</h2>
        <p className="section-subtitle">I can develop that help people</p>

        <div className="about-wrapper">
          <div className="about-profile">
            <div className="profile-image">
              <div className="image-placeholder"><img src={profilePhoto} alt="Photo" /></div>
            </div>
            <h3>{biography.name}</h3>
            <p className="role">{biography.role}</p>
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
                    <p><strong>LinkedIn:</strong> {biography.linkedin}</p>
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
                          <div key={i} className="skill-tag-item">
                            {skill.icon ? (
                              <img src={skill.icon} alt={skill.name} className="skill-icon" title={skill.name} />
                            ) : (
                              <span className="skill-name-text">{skill.name}</span>
                            )}
                          </div>
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
