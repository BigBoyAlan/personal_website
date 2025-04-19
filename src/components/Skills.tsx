import React from 'react';

const Skills: React.FC = () => {
  const skills = [
    'Backend Development (Python, FastAPI)',
    'Database Management (PostgreSQL, Milvus)',
    'Machine Learning Engineering (RAG Pipelines, Model Deployment & Inference)',
    'System Design (State Machines, Scalable Architectures)',
    'Cloud & Deployment',
    'Frontend Development & UI/UX Principles',
    'Project Management',
    'Production-Level Code Practices'
    // Add more specific skills/tools
  ];

  return (
    <section id="skills">
      <div className="container">
        <h2>Technical Expertise</h2>
        <div className="skills-list">
          {skills.map((skill, index) => (
            <div key={index} className="skill-item">
              {skill}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills; 