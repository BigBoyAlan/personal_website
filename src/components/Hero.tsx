import React from 'react';

const Hero: React.FC = () => {
  return (
    <section id="hero">
      <h1>Alan Fandrich</h1>
      <p>Christ Follower | Rock Climber | Project Manager</p>
      <p>Passionate about learning, building, and inspiring others.</p>
      {/* Optional: Add a profile picture here */}
      {/* Example: <img src="/path/to/your/image.jpg" alt="Profile Picture" style={{ width: '150px', height: '150px', borderRadius: '50%', marginTop: '20px' }} /> */}
    </section>
  );
};

export default Hero; 