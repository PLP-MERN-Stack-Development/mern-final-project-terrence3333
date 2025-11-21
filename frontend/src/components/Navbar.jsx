import React from 'react';
import { useAuth } from '../hooks/useAuth.jsx';

const Navbar = () => {
  const { user, logout } = useAuth();

  return (
    <nav className="bg-white shadow p-4 flex justify-between items-center">
      <h1 className="text-xl font-bold text-indigo-600">TeamFlow</h1>
      <div>
        {user ? (
          <div className="flex items-center space-x-4">
            <span className="text-gray-700">{user.name}</span>
            <button
              onClick={logout}
              className="bg-indigo-600 text-white px-3 py-1 rounded hover:bg-indigo-700"
            >
              Logout
            </button>
          </div>
        ) : (
          <span className="text-gray-700">Not logged in</span>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
