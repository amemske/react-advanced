import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div>
      <h2>NavBar</h2>
      <nav>
        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/about'>About</Link>
          </li>
          <li>
            <Link to='/people'>People</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
