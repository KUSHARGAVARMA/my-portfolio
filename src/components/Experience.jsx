import React from 'react';
import { useTheme } from '../ThemeContext';

const experiences = [
  {
    position: "Software Engineer",
    company: "Secomind.AI, California (Remote)",
    duration: "August 2021 - Present",
    responsibilities: [
      "Develops cloud-based device management systems, including vending machine control, using JavaScript, React, Redux, React-Router, Django, and Django Rest Framework.",
      "Creates and customizes dashboard applications for Clea Cloud, enabling direct customer use through React and JavaScript.",
      "Builds support chatbot Chrome extensions with JavaScript, HTML, CSS, and GraphQL, enhancing user interaction.",
      "Leads a team of 2 support engineers, focusing on debugging and troubleshooting.",
      "Improved the Secomind.ai Chatbot Chrome extension, implementing Next.js functionalities with Vanilla JavaScript.",
      "Enhanced the chatbot's knowledge base through proactive stakeholder feedback integration.",
    ],
  },
  {
    position: "Co-Founder",
    company: "LaalTen Tech, UP (Startup)",
    duration: "July 2019 - July 2022",
    responsibilities: [
      "Worked on creating LabVIEW Applications (Block Diagram and Front Panel) and User Dashboard (iFactory) and integrated it with Python and JavaScript to provide customers with analytics, predictive maintenance, and custom connectivity for industrial hardware devices (e.g., generators, motors, sensors).",
      "Worked extensively on ESP32, ATMEGA16, and Bluetooth to provide seamless connectivity between the Android app and the hardware device.",
      "Created controller circuits to manage various in-house built IoT devices, including mood lamps, strip lights, and home automation systems. These controllers can communicate with our in-house Android app.",
    ],
  },
  {
    position: "LabVIEW Engineer (Intern)",
    company: "Exeliq Solutions Pvt Ltd, Ghaziabad",
    duration: "November 2019 - March 2020",
    responsibilities: [
      "Worked on several core LabVIEW modules like Kuka control module, LabVIEW Visions Module, etc.",
      "Deployed fault detection software that is used to detect anomalies in the assembly line of engine manufacturing companies.",
    ],
  },
  {
    position: "LabVIEW Ambassador",
    company: "AKGEC SKILLS FOUNDATION, Ghaziabad",
    duration: "November 2018 - September 2019",
    responsibilities: [
      "Cleared the Certified LabVIEW Associate Developer Certificate exam.",
      "Provided technical assistance on LabVIEW technology to the trainees and developed innovative projects on NI LabVIEW.",
    ],
  },
];

const Experience = () => {
  const { darkMode } = useTheme();

  return (
    <section id="experience" className={`py-20 ${darkMode ? 'bg-gray-800 text-gray-50' : 'bg-gray-50 text-gray-800'} text-left`}>
      <div className="container mx-auto px-4 md:px-0">
        <h2 className={`text-4xl font-bold mb-6 ${darkMode ? 'text-indigo-300' : 'text-indigo-500'}`}>Experience</h2>
        <div className="space-y-8">
          {experiences.map((experience, index) => (
            <div key={index} className={`bg-white ${darkMode ? 'dark:bg-gray-700' : ''} p-6 rounded-lg shadow-lg`}>
              <h3 className={`text-2xl font-bold mb-2 ${darkMode ? 'text-indigo-400' : 'text-indigo-600'}`}>{experience.position}</h3>
              <p className={`text-lg mb-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>{experience.company}</p>
              <p className={`mb-4 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>{experience.duration}</p>
              <ul className="list-disc pl-5 space-y-2">
                {experience.responsibilities.map((responsibility, idx) => (
                  <li key={idx} className={`text-gray-700 ${darkMode ? 'dark:text-gray-300' : ''}`}>{responsibility}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
