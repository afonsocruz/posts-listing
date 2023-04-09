import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="w-full h-28 flex items-center justify-center bg-slate-200 absolute bottom-0 right-0">
      <a href="https://www.linkedin.com/in/afonsocruzdev/" target="_blank">
        <h3 className="font-light hover:font-bold">Built by Afonso Cruz</h3>
      </a>
    </footer>
  );
};

export default Footer;
