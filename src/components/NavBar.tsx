import React from 'react';
import { Link } from 'react-router-dom';

// TODO: Create some routes and link them

const NavBar: React.FC = () => {
  return (
    <div>
      <Link to="posts">Posts</Link>
    </div>
  );
};

export default NavBar;
