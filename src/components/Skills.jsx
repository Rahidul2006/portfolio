import React from 'react';
import './Skills.css';
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

export default function Skills() {
  const skillCategories = [
    {
      title: 'Frontend',
      
      skills: [
        { name: 'React', level: 95, icon: reactIcon },
        { name: 'TypeScript', level: 90, icon: typeScriptIcon },
        { name: 'CSS3', level: 95, icon: cssIcon },
        { name: 'HTML5', level: 95, icon: htmlIcon },
        { name: 'Tailwind CSS', level: 90, icon: tailwindIcon },
        { name: 'JavaScript', level: 95, icon: jsIcon }
      ]
    },
    {
      title: 'Backend',
    
      skills: [
        { name: 'Node.js', level: 90, icon: nodeIcon },
        { name: 'Python', level: 85, icon: pythonIcon },
        { name: 'Express.js', level: 85, icon: expressIcon }
      ]
    },

    {
      title: 'Databases',
    
      skills: [
        { name: 'MongoDB', level: 88, icon: mongoIcon },
        { name: 'MySQL', level: 85, icon: mysqlIcon },
        { name: 'Firebase', level: 80, icon: firebaseIcon }
      ]
    },
    {
      title: 'Tools & DevOps',
    
      skills: [
        { name: 'Git', level: 95, icon: gitIcon },
        { name: 'Docker', level: 80, icon: dockerIcon },
        { name: 'Linux', level: 85, icon: linuxIcon }
      ]
    },
    
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
                
                <h3>{category.title}</h3>
              </div>
              
              <div className="skills-list">
                {category.skills.map((skill, i) => (
                  <div key={i} className="skill-item">
                    <div className="skill-header">
                      <span className="skill-name"><img src={skill.icon} alt={skill.name} className="skill-icon" /></span>
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

        
      </div>
    </section>
  );
}
