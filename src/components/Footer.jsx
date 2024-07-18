import React from 'react';
import { useTheme } from '../ThemeContext';

const Footer = () => {
  const { darkMode } = useTheme();

  return (
    <footer className={`py-4 ${darkMode ? 'bg-gray-700 text-gray-300' : 'bg-gray-200 text-gray-700'} text-center`}>
      <div className="container mx-auto">
        <p>&copy; {new Date().getFullYear()} Kushagra Varma. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
