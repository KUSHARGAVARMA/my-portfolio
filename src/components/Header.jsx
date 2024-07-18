import React from 'react';
import { useTheme } from '../ThemeContext';
import CustomAvatar from './CustomAvatar';

const Header = () => {
  const { darkMode } = useTheme();

  return (
    <header id="header" className={`min-h-screen flex flex-col items-center justify-center pt-16 ${darkMode ? 'bg-gray-800' : 'bg-gray-50'}`}>
      <div className="container mx-auto flex flex-col items-center justify-between px-4 md:px-0">
        <div className="mb-8">
          <CustomAvatar seed="Kushagra" size="200px" />
        </div>
        <div className="text-center md:text-left">
          <h1 className={`text-4xl md:text-5xl font-bold mb-4 ${darkMode ? 'text-indigo-300' : 'text-indigo-500'}`}>
            Hi, my name is <span className={`${darkMode ? 'text-indigo-500' : 'text-indigo-800'}`}>Kushagra Varma</span>
          </h1>
          <p className={`text-base md:text-xl ${darkMode ? 'text-gray-300' : 'text-gray-600'} mb-8`}>
            I have built many industry-grade projects from scratch and am armed with many technological skills useful for tech projects. With 4.5 years of full-stack development experience, including 3.5 years in dynamic startup environments, I am currently seeking new and challenging opportunities. In my spare time, I enjoy building IoT projects that bridge the gap between hardware and software, exploring the latest technologies, or jamming with my vocals and instruments.
          </p>
          <div className="flex flex-wrap justify-center md:justify-start space-x-4 mb-8">
            <div className={`py-2 md:py-4 px-4 md:px-6 rounded-lg ${darkMode ? 'bg-indigo-500 text-gray-800' : 'bg-indigo-600 text-white'} mb-4 md:mb-0`}>
              <p className="text-xl md:text-2xl font-bold">10+</p>
              <p>Verified Skills</p>
            </div>
            <div className={`py-2 md:py-4 px-4 md:px-6 rounded-lg ${darkMode ? 'bg-indigo-500 text-gray-800' : 'bg-indigo-600 text-white'} mb-4 md:mb-0`}>
              <p className="text-xl md:text-2xl font-bold">5</p>
              <p>Professional Projects</p>
            </div>
            <div className={`py-2 md:py-4 px-4 md:px-6 rounded-lg ${darkMode ? 'bg-indigo-500 text-gray-800' : 'bg-indigo-600 text-white'} mb-4 md:mb-0`}>
              <p className="text-xl md:text-2xl font-bold">3.5+ years</p>
              <p>Startup Experience</p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
