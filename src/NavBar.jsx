import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav className="bg-blue-600 p-4">
      <ul className="flex space-x-4 text-white font-semibold">
        <li>
          <Link to="/" className="hover:underline">Post</Link>
        </li>
        <li>
          <Link to="/viewall" className="hover:underline">Viewall</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
