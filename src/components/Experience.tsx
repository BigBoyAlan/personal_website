import React from 'react';

const Experience: React.FC = () => {
  return (
    <section id="experience">
      <h2>Experience</h2>
      <div>
        <h3>[Your Role] @ RelevAInce</h3>
        <p><em>[Start Date] - Present</em></p>
        <p>
          Describe your responsibilities and achievements at RelevAInce. Connect it to your skills and passions (e.g., building scalable systems, learning new tech, mentoring).
        </p>
      </div>
      {/* Add previous roles if desired */}

      {/* Subtle hint for the easter egg */}
      <p className="easter-egg-hint">
        P.S. Old-school gamers might find a familiar sequence rewarding...
      </p>
    </section>
  );
};

export default Experience; 