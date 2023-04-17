import React from 'react';
import ProfileIcon from './UI/ProfileIcon';
import { Link } from 'react-router-dom';
import { AppContext } from '../context/AppContext';

const Header: React.FC = () => {
  const { user } = React.useContext(AppContext);

  return (
    <header className="w-full h-28 flex items-center justify-center bg-primary relative">
      <Link to={user ? '/posts' : '/'}>
        <h3 className="text-2xl font-semibold text-fluorescent">Postify</h3>
      </Link>
      <ProfileIcon />
    </header>
  );
};

export default Header;
