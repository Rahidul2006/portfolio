import React from 'react';
import './Skills.css';

export default function Skills() {
  const skillCategories = [
    {
      title: 'Frontend',
      icon: '🎨',
      skills: [
        { name: 'React', level: 95 },
        { name: 'TypeScript', level: 90 },
        { name: 'CSS3', level: 95 },
        { name: 'Vite', level: 85 },
        { name: 'Tailwind CSS', level: 90 },
        { name: 'JavaScript', level: 95 }
      ]
    },
    {
      title: 'Backend',
      icon: '⚙️',
      skills: [
        { name: 'Node.js', level: 90 },
        { name: 'Python', level: 85 },
        { name: 'Django', level: 80 },
        { name: 'C#', level: 75 },
        { name: '.NET', level: 75 },
        { name: 'Express.js', level: 85 }
      ]
    },
    {
      title: 'Mobile',
      icon: '📱',
      skills: [
        { name: 'React Native', level: 85 },
        { name: 'iOS', level: 70 },
        { name: 'Android', level: 70 },
        { name: 'Flutter', level: 60 }
      ]
    },
    {
      title: 'Databases',
      icon: '🗄️',
      skills: [
        { name: 'MongoDB', level: 88 },
        { name: 'PostgreSQL', level: 90 },
        { name: 'MySQL', level: 85 },
        { name: 'Firebase', level: 80 }
      ]
    },
    {
      title: 'Tools & DevOps',
      icon: '🛠️',
      skills: [
        { name: 'Git', level: 95 },
        { name: 'Docker', level: 80 },
        { name: 'AWS', level: 75 },
        { name: 'CI/CD', level: 80 },
        { name: 'Linux', level: 85 }
      ]
    },
    {
      title: 'Testing',
      icon: '✅',
      skills: [
        { name: 'Jest', level: 85 },
        { name: 'Pytest', level: 80 },
        { name: 'TestComplete', level: 90 },
        { name: 'Selenium', level: 75 }
      ]
    }
  ];

  return (
    <section id="resume" className="skills">
      <div className="container">
        <h2 className="section-title">TECHNICAL SKILLS</h2>
        <p className="section-subtitle">My Expertise</p>

        <div className="skills-container">
          {skillCategories.map((category, idx) => (
            <div key={idx} className="skill-category">
              <div className="category-header">
                <span className="category-icon">{category.icon}</span>
                <h3>{category.title}</h3>
              </div>
              
              <div className="skills-list">
                {category.skills.map((skill, i) => (
                  <div key={i} className="skill-item">
                    <div className="skill-header">
                      <span className="skill-name">{skill.name}</span>
                      <span className="skill-percentage">{skill.level}%</span>
                    </div>
                    <div className="skill-bar">
                      <div 
                        className="skill-progress" 
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="skills-summary">
          <div className="summary-card">
            <div className="summary-number">15+</div>
            <div className="summary-text">Programming Languages</div>
          </div>
          <div className="summary-card">
            <div className="summary-number">20+</div>
            <div className="summary-text">Tools & Technologies</div>
          </div>
          <div className="summary-card">
            <div className="summary-number">10+</div>
            <div className="summary-text">Years Experience</div>
          </div>
          <div className="summary-card">
            <div className="summary-number">6</div>
            <div className="summary-text">Skill Categories</div>
          </div>
        </div>
      </div>
    </section>
  );
}
