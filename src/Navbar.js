import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  const [isDarkMode, setIsDarkMode] = useState(localStorage.theme === 'dark');

  const toggleTheme = () => {
    const newTheme = isDarkMode ? 'light' : 'dark';
    document.documentElement.classList.toggle('dark', !isDarkMode);
    localStorage.theme = newTheme;
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className="flex justify-between px-8 py-4 bg-gray-100 dark:bg-gray-800">
      <img src="./logo.png" alt="Logo" className="w-28 h-8" />
      
      <div className="flex items-center gap-4">
        <Link to="/fr">
          <button className="p-2 font-bold text-lg">Français</button>
        </Link>
        <Link to="/en">
          <button className="p-2 font-bold text-lg">English</button>
        </Link>
        <button onClick={toggleTheme} className="p-2 bg-blue-300 rounded">
          {isDarkMode ? 'Light Mode' : 'Dark Mode'}
        </button>
      </div>
    </div>
  );
}

export default Navbar;
