import React from 'react';

const Contact: React.FC = () => {
  return (
    <section id="contact">
      <div className="container">
        <h2>Get In Touch</h2>
        <p>Feel free to reach out via email or connect on LinkedIn. Let's build something great together!</p>
        <div className="contact-links">
          <a href="mailto:alan@fandrich.net" target="_blank" rel="noopener noreferrer">Email</a>
          <a href="https://www.linkedin.com/in/alanfandrich/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href="https://github.com/BigBoyAlan" target="_blank" rel="noopener noreferrer">GitHub</a>
        </div>
      </div>
    </section>
  );
};

export default Contact; 