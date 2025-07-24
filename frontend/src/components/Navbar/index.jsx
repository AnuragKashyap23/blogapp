import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import useTheme from '../../hooks/useTheme'; // Adjust path as needed

const Navbar = () => {
  const { isDark, toggleTheme } = useTheme();

  return (
    <nav className="bg-white dark:bg-gray-900 shadow-md transition-colors duration-300 ease-in-out">
      <div className="container mx-auto flex items-center justify-between px-4 py-3">
        
        {/* Logo */}
        <div className="text-2xl font-bold text-primary-600 dark:text-primary-400">
          <Link to="/">MyBlog</Link>
        </div>
        
        {/* Navigation Links */}
        <ul className="hidden md:flex space-x-8 text-gray-700 dark:text-gray-300 font-medium">
          {[
            { to: '/', label: 'Home', end: true },
            { to: '/posts', label: 'Posts' },
            { to: '/about', label: 'About' },
            { to: '/contact', label: 'Contact' },
          ].map(({ to, label, end }) => (
            <li key={to}>
              <NavLink
                to={to}
                end={end}
                className={({ isActive }) =>
                  `hover:text-primary-600 dark:hover:text-primary-400 transition ${
                    isActive
                      ? 'text-primary-600 dark:text-primary-400 font-semibold'
                      : 'text-gray-700 dark:text-gray-300'
                  }`
                }
              >
                {label}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Theme Toggle Button */}
        <button
          onClick={toggleTheme}
          aria-label="Toggle Dark Mode"
          className="ml-4 p-2 rounded-md bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600 transition"
          title="Toggle Dark Mode"
        >
          {isDark ? '☀️' : '🌙'}
        </button>

        {/* Mobile Menu Placeholder (optional) */}
        {/* For mobile menu toggle button you can add here if needed */}
      </div>
    </nav>
  );
};

export default Navbar;
