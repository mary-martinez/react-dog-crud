import React from 'react';
import { NavLink } from 'react-router-dom';
import { logout } from '../../services/users';
import './Header.css';

export default function Header({ currentUser, setCurrentUser }) {
  const handleLogout = async () => {
    await logout();
    setCurrentUser(null);
  };

  return (
    <div>
      <ul>
        <li>
          <NavLink exact to='/'>
            Home
          </NavLink>
        </li>
        {currentUser && (
          <li>
            <NavLink exact to='/admin'>
              Add a Dog
            </NavLink>
          </li>)}
        {currentUser && (
          <li onClick={handleLogout}>logout</li>
        )}
        {!currentUser && (
          <li>
            <NavLink exact to='/auth'>
              Log In
            </NavLink>
          </li>
        )}
      </ul>
    </div>
  );
}
