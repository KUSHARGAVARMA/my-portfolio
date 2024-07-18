import React from 'react';
import { SiJavascript, SiPython, SiPostgresql, SiReact, SiRedux, SiExpress, SiGit, SiLabview, SiPostman, SiMqtt } from 'react-icons/si';
import { useTheme } from '../ThemeContext';

const skills = [
  { name: "JavaScript", icon: <SiJavascript size={32} className="text-yellow-500" /> },
  { name: "Python", icon: <SiPython size={32} className="text-blue-500" /> },
  { name: "SQL", icon: <SiPostgresql size={32} className="text-blue-600" /> },
  { name: "LabVIEW", icon: <SiLabview size={32} className="text-yellow-600" /> },
  { name: "React", icon: <SiReact size={32} className="text-blue-400" /> },
  { name: "Redux", icon: <SiRedux size={32} className="text-purple-500" /> },
  { name: "Express.js", icon: <SiExpress size={32} className="text-gray-800" /> },
  { name: "Git", icon: <SiGit size={32} className="text-red-600" /> },
  { name: "GitHub Actions", icon: <SiGit size={32} className="text-black" /> },
  { name: "Postman", icon: <SiPostman size={32} className="text-orange-500" /> },
  { name: "PostgreSQL", icon: <SiPostgresql size={32} className="text-blue-600" /> },
  { name: "MQTT", icon: <SiMqtt size={32} className="text-purple-600" /> },
];

const Skills = () => {
  const { darkMode } = useTheme();

  return (
    <section id="skills" className={`py-20 ${darkMode ? 'bg-gray-800 text-gray-50' : 'bg-gray-50 text-gray-800'} text-left`}>
      <div className="container mx-auto">
        <h2 className={`text-4xl font-bold mb-6 ${darkMode ? 'text-indigo-300' : 'text-indigo-500'}`}>Skills</h2>
        <div className="flex flex-wrap">
          {skills.map((skill, index) => (
            <div key={index} className={`bg-gray-200 ${darkMode ? 'dark:bg-gray-700' : ''} py-4 px-6 rounded-lg m-2 flex items-center space-x-2`}>
              {skill.icon}
              <span className={`text-indigo-600 ${darkMode ? 'dark:text-indigo-300' : ''} font-semibold`}>{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
