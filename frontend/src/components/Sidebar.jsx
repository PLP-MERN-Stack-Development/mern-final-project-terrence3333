import React from 'react';
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
  return (
    <aside className="w-64 bg-white shadow flex-shrink-0">
      <div className="p-4">
        <nav className="flex flex-col space-y-2">
          <NavLink
            to="/dashboard"
            className={({ isActive }) =>
              `p-2 rounded hover:bg-indigo-100 ${isActive ? 'bg-indigo-200 font-bold' : ''}`
            }
          >
            Dashboard
          </NavLink>
          <NavLink
            to="/projects"
            className={({ isActive }) =>
              `p-2 rounded hover:bg-indigo-100 ${isActive ? 'bg-indigo-200 font-bold' : ''}`
            }
          >
            Projects
          </NavLink>
        </nav>
      </div>
    </aside>
  );
};

export default Sidebar;
