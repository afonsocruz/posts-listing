import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="w-full h-28 flex items-center justify-center bg-primary">
      <a href="https://www.linkedin.com/in/afonsocruzdev/" target="_blank">
        <h3 className="font-light opacity-80 text-fluorescent hover:opacity-100">
          Built by Afonso Cruz
        </h3>
      </a>
    </footer>
  );
};

export default Footer;
