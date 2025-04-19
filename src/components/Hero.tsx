import React from 'react';
// Import the image directly. Vite handles bundling.
import profilePic from '../assets/profilepic.png';
// We'll add styles to App.css instead of a separate Hero.css

const Hero: React.FC = () => {
  return (
    <section id="hero" className="hero-section">
      <div className="hero-content">
        <img src={profilePic} alt="Alan Fandrich" className="profile-picture" />
        <div className="intro-text">
          <p>Hey, I'm <span className="name-highlight">Alan Fandrich</span>. Here, you can check out what I'm working on.</p>
          {/* Replace paragraph with stylized identities */}
          <div className="identities">
            <span>Christ Follower</span> <span className="separator">|</span>
            <span>Rock Climber</span> <span className="separator">|</span>
            <span>Project Manager</span>
          </div>
        </div>
        {/* Optional: Add scroll down indicator or other elements */}
      </div>
    </section>
  );
};

export default Hero; 