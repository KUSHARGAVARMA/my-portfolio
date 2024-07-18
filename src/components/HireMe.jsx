import React from 'react';
import { FaGithub, FaLinkedin, FaMedium, FaYoutube } from 'react-icons/fa';
import avatarImage from "../assets/HireMe.png";

const HireMe = () => {
  return (
    <section id="hire-me" className="py-20 bg-black text-white">
      <div className="container mx-auto px-4 md:px-0 flex flex-col md:flex-row items-center justify-between">
        <div className="w-full md:w-1/3 mb-8 md:mb-0">
          <img src={avatarImage} alt="Hire Me" className="w-72 mx-auto md:mx-0 md:mr-8" />
        </div>
        <div className="w-full md:w-1/3 text-center md: mb-8 md:mb-0">
          <h2 className="text-3xl font-bold mb-4">Wanna Hire me? Or just wanna discuss a cool project to collab on?</h2>
        </div>
        <div className="w-full md:w-1/3 text-center">
          <div className="space-y-2 mb-4">
            <p>New Delhi, Delhi, India</p>
            <p>Email: kushavrm008@gmail.com</p>
            <p>Phone: +91 8505988865</p>
          </div>
          <div className="flex justify-center ">
            <a href="https://github.com/KUSHARGAVARMA" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:text-indigo-400">
              <FaGithub size={30} />
            </a>
            <a href="https://www.linkedin.com/in/kushagra-varma-97433418b/" target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:text-blue-500">
              <FaLinkedin size={30} />
            </a>
            <a href="https://medium.com/@kushavrm008" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-200">
              <FaMedium size={30} />
            </a>
            <a href="https://www.youtube.com/@kushagravarma8" target="_blank" rel="noopener noreferrer" className="text-red-600 hover:text-red-400">
              <FaYoutube size={30} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HireMe;
