import React from 'react';

const Experience: React.FC = () => {
  return (
    <section id="experience">
      <div className="container">
        <h2>Experience</h2>
        <div className="experience-item">
          <h3>Project Lead @ RelevAInce</h3>
          <p><em>March 2024 - Present</em></p>
          <p>
            Leading team initiatives, assigning features and tasks, managing infrastructure (Unix/Linux environments), and contributing to software engineering efforts including backend endpoints and ingestion routines.
          </p>
        </div>
        {/* Add previous roles as more experience-item divs if desired */}
      </div>
    </section>
  );
};

export default Experience; 