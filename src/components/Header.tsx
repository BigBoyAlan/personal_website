import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="site-header">
      <div className="header-container">
        <div className="logo">
          <a href="#hero">AF</a>
        </div>
        <nav className="main-nav">
          <ul>
            <li><a href="#about">About</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#experience">Experience</a></li>
          </ul>
        </nav>
        <div className="header-actions">
          <a href="#contact" className="contact-button">Contact Me</a>
        </div>
      </div>
    </header>
  );
};

export default Header; 