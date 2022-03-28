import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Header() {
  return (
    <div>
      <ul>
        <li>
          <NavLink to='Home'>
            Home
          </NavLink>
        </li>
      </ul>
    </div>
  );
}
