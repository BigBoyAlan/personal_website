import React from 'react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer>
      <p>&copy; {currentYear} Alan Fandrich. Built with ❤️.</p>
    </footer>
  );
};

export default Footer; 