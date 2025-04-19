import React from 'react';
import './Home.css'; // We'll create this CSS file next

const Home: React.FC = () => {
  return (
    <section id="home" className="home-intro">
      <div className="intro-text">
        <span className="greeting">HI, I'M</span>
        <span className="name">ALAN</span>
        {/* You can add a subtitle or a brief tagline here if you like */}
        {/* <p className="tagline">Building things for the web.</p> */}
      </div>
    </section>
  );
};

export default Home; 