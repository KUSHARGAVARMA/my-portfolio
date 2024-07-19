import React from 'react';
import { SiReact, SiJavascript, SiHtml5, SiCss3, SiPython, SiDlib, SiNodedotjs, SiMongodb, SiRedux,SiC,SiAmazonec2,SiPostman} from 'react-icons/si';
import { useTheme } from '../ThemeContext';

const projects = [
  {
    title: "E-Commerce App",
    description: "Built a robust e-commerce app using React. Implemented dynamic product listings, search, multi-language support, and responsive design.",
    demoLink: "https://mystore-ecom-fe.vercel.app/",
    repoLink: "https://github.com/KUSHARGAVARMA/mystore-ecom-fe",
    technologies: ["React", "React Router", "Material UI", "React State & Props"],
    icons: [<SiReact />, <SiReact />,  <SiReact />],
  },
  {
    title: "Hostel Attendace System",
    description: "Developed a system using Python and the DLIB library for face detection and gate control.",
    technologies: ["Python", "Embedded Systems","DLIB","AWS Cloud"],
    icons: [<SiPython />, <SiC/>,<SiDlib />,<SiAmazonec2/>],
  },
  {
    title: "Dreamfolks-Rupay Credit Card Airport Lounge Entry System",
    description: "An automated system for lounge entry at Delhi airport.",
    technologies: ["Python","Postman","Embedded Systems","JavaScript", "HTML5", "CSS3"],
    icons: [<SiPython/>,<SiPostman/>,<SiC/>,<SiJavascript />, <SiHtml5 />, <SiCss3 />],
  },
  {
    title: "OyeBusy Blog",
    description: "Created a blog listing services provided by Oye Busy Services.",
    technologies: ["React", "Redux", "Node.js"],
    icons: [<SiReact />, <SiRedux />, <SiNodedotjs />],
  },
  {
    title: "Talaash Magazine",
    description: "Blog reading site where users can read and upload content.",
    technologies: ["React", "Node.js", "MongoDB"],
    icons: [<SiReact />, <SiNodedotjs />, <SiMongodb />],
  },
];

const Projects = () => {
  const { darkMode } = useTheme();

  return (
    <section id="projects" className={`py-20 ${darkMode ? 'bg-gray-800 text-gray-50' : 'bg-gray-50 text-gray-800'} text-left`}>
      <div className="container mx-auto">
        <h2 className={`text-4xl font-bold mb-6 ${darkMode ? 'text-indigo-300' : 'text-indigo-500'}`}>My Projects</h2>
        <div className="space-y-8">
          {projects.map((project, index) => (
            <div key={index} className={`bg-white ${darkMode ? 'dark:bg-gray-700' : ''} p-6 rounded-lg shadow-lg flex flex-col md:flex-row items-center`}>
              <div className="md:w-1/2">
                <h3 className={`text-2xl font-bold mb-2 ${darkMode ? 'text-indigo-400' : 'text-indigo-600'}`}>{project.title}</h3>
                <p className={`text-lg mb-4 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>{project.description}</p>
                {project.demoLink && (
                  <a href={project.demoLink} target="_blank" rel="noopener noreferrer" className={`bg-indigo-600 text-white ${darkMode ? 'dark:bg-indigo-500 dark:text-gray-800' : ''} py-2 px-4 rounded hover:bg-indigo-700 mr-2`}>
                    Live Demo
                  </a>
                )}
                {project.repoLink && (
                  <a href={project.repoLink} target="_blank" rel="noopener noreferrer" className={`bg-indigo-600 text-white ${darkMode ? 'dark:bg-indigo-500 dark:text-gray-800' : ''} py-2 px-4 rounded hover:bg-indigo-700`}>
                    GitHub Repo
                  </a>
                )}
              </div>
              <div className="md:w-1/2 mt-4 md:mt-0">
                {project.technologies && (
                  <div className="flex flex-wrap justify-start md:justify-end space-x-2">
                    {project.technologies.map((tech, idx) => (
                      <span key={idx} className={`bg-gray-200 ${darkMode ? 'dark:bg-gray-600' : ''} py-1 px-3 rounded-full text-indigo-600 ${darkMode ? 'dark:text-indigo-300' : ''} font-semibold m-1 flex items-center space-x-2`}>
                        {project.icons[idx]}
                        <span>{tech}</span>
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
