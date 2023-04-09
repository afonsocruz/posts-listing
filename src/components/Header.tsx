import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="w-full h-28 flex items-center justify-center bg-primary">
      <h3 className="text-2xl font-semibold text-fluorescent">
        Posts from API
      </h3>
    </header>
  );
};

export default Header;
