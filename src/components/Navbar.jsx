import React, { useState, useEffect } from 'react';
import { FaGithub, FaLinkedin, FaMedium, FaYoutube } from 'react-icons/fa';
import { useTheme } from '../ThemeContext';
import avatarImage from '../assets/HireMe.png';

const Navbar = () => {
  const { darkMode, toggleTheme } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const scrollToHeader = () => {
    document.getElementById('header').scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? (darkMode ? 'bg-gray-900 shadow-lg' : 'bg-white shadow-lg') : 'bg-transparent'}`}>
      <div className="container mx-auto flex justify-between items-center py-4 px-4 md:px-0">
        <div className="flex items-center space-x-4 cursor-pointer" onClick={scrollToHeader}>
          <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-indigo-500">
            <img src={avatarImage} alt="Hire Me" className="w-full h-full object-cover" />
          </div>
          {scrolled && <h1 className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>Kushagra Varma</h1>}
        </div>
        <div className="md:hidden" onClick={toggleMenu}>
          <div className="cursor-pointer">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </div>
        </div>
        <ul className={`hidden md:flex space-x-6 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
          <li><a href="#about" className="hover:text-indigo-500">About</a></li>
          <li><a href="#skills" className="hover:text-indigo-500">Skills</a></li>
          <li><a href="#projects" className="hover:text-indigo-500">Projects</a></li>
          <li><a href="#experience" className="hover:text-indigo-500">Experience</a></li>
          <li><a href="#contact" className="hover:text-indigo-500">Contact</a></li>
        </ul>
        <div className="hidden md:flex space-x-4 items-center">
          <a href="https://github.com/KUSHARGAVARMA" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-500"><FaGithub size={24} className="text-indigo-600" /></a>
          <a href="https://www.linkedin.com/in/kushagra-varma-97433418b/" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-500"><FaLinkedin size={24} className="text-indigo-600" /></a>
          <a href="https://medium.com/@kushavrm008" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-500"><FaMedium size={24} className="text-indigo-600" /></a>
          <a href="https://www.youtube.com/@kushagravarma8" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-500"><FaYoutube size={24} className="text-indigo-600" /></a>
          <button
            onClick={toggleTheme}
            className={`py-2 px-4 rounded ${darkMode ? 'bg-gray-800 text-white' : 'bg-indigo-600 text-white'} hover:bg-indigo-700`}
          >
            {darkMode ? 'Light Mode' : 'Dark Mode'}
          </button>
        </div>
      </div>
      {menuOpen && (
        <div className={`md:hidden ${darkMode ? 'bg-gray-900' : 'bg-white'} shadow-lg`}>
          <ul className="flex flex-col items-center space-y-6 py-4">
            <li><a href="#about" className="hover:text-indigo-500" onClick={() => setMenuOpen(false)}>About</a></li>
            <li><a href="#skills" className="hover:text-indigo-500" onClick={() => setMenuOpen(false)}>Skills</a></li>
            <li><a href="#projects" className="hover:text-indigo-500" onClick={() => setMenuOpen(false)}>Projects</a></li>
            <li><a href="#experience" className="hover:text-indigo-500" onClick={() => setMenuOpen(false)}>Experience</a></li>
            <li><a href="#contact" className="hover:text-indigo-500" onClick={() => setMenuOpen(false)}>Contact</a></li>
          </ul>
          <div className="flex flex-col items-center space-y-4 py-4">
            <a href="https://github.com/KUSHARGAVARMA" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-500"><FaGithub size={24} className="text-indigo-600" /></a>
            <a href="https://www.linkedin.com/in/kushagra-varma-97433418b/" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-500"><FaLinkedin size={24} className="text-indigo-600" /></a>
            <a href="https://medium.com/@kushavrm008" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-500"><FaMedium size={24} className="text-indigo-600" /></a>
            <a href="https://www.youtube.com/@kushagravarma8" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-500"><FaYoutube size={24} className="text-indigo-600" /></a>
            <button
              onClick={toggleTheme}
              className={`py-2 px-4 rounded ${darkMode ? 'bg-gray-800 text-white' : 'bg-indigo-600 text-white'} hover:bg-indigo-700`}
            >
              {darkMode ? 'Light Mode' : 'Dark Mode'}
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
