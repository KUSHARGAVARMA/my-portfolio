import React from 'react';

const Achievements = () => {
  return (
    <section id="achievements" className="py-20 bg-white text-center">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold mb-6">Achievements</h2>
        <ul className="list-disc list-inside text-left max-w-2xl mx-auto">
          <li className="text-lg mb-2">Certified LabVIEW Associate Developer - National Instruments 2019</li>
          <li className="text-lg mb-2">Led a team of 2 support engineers, focusing on debugging and troubleshooting</li>
          <li className="text-lg mb-2">Enhanced the Secomind.ai Chatbot Chrome extension, implementing Next.js functionalities with Vanilla JavaScript</li>
          <li className="text-lg mb-2">Cleared the Certified LabVIEW Associate Developer Certificate exam</li>
        </ul>
      </div>
    </section>
  );
};

export default Achievements;
