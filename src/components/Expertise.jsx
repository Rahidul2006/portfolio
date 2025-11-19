import React from 'react';
import './Expertise.css';

export default function Expertise() {
  const expertiseItems = [
    {
      id: 1,
      title: 'Full Stack Web Development',
      description: 'I\'m a full-stack developer skilled in TypeScript, Node.js, React, Django, Python, C# and .NET. I can handle both front-end and back-end development, building user-friendly interfaces as well as strong server-side systems and databases.',
      icon: '⚡'
    },
    {
      id: 2,
      title: 'App Development',
      description: 'In the past few months, I have been actively developing beginner to intermediate level mobile applications using React Native. My portfolio showcases a range of projects that demonstrate my proficiency in creating cross-platform mobile apps.',
      icon: '📱'
    },
    {
      id: 3,
      title: 'Automation With TestComplete',
      description: 'I\'m also experienced in automation using TestComplete. I\'ve worked on creating reliable and reusable test scripts to improve testing efficiency. My skills help in automating complex scenarios, reducing manual effort.',
      icon: '🤖'
    }
  ];

  return (
    <section id="expertise" className="expertise">
      <div className="container">
        <h2 className="section-title">MY EXPERTISE</h2>
        <p className="section-subtitle">What I Do</p>
        <div className="expertise-grid">
          {expertiseItems.map((item) => (
            <div key={item.id} className="expertise-card">
              <div className="expertise-icon">{item.icon}</div>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
