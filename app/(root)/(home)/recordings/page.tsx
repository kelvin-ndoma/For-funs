import React from 'react';
import { digitalMarketingSkills } from '@/Marketing/Digital'; // Importing the digitalMarketingSkills array from the TypeScript file

const Recordings = () => {
  return (
    <section className="flex flex-col gap-6 justify-center items-center">
      <h1 className='text-4xl text-white font-bold mb-6 '>
        Explore My Skills
      </h1>
      <section className="flex flex-wrap gap-6 justify-center">
        {digitalMarketingSkills.map((skill, index) => (
          <div key={index} className="bg-white rounded-lg p-6 shadow-lg flex flex-col items-center w-full sm:w-1/2 md:w-1/4">
           
            <img src={skill.imageUrl} alt={skill.skillName} className="w-16 h-16 mb-4" />
            <h2 className="text-xl font-semibold mb-2">{skill.skillName}</h2>
            <p className="text-center text-gray-700">{skill.description}</p>
          </div>
        ))}
      </section>
    </section>
  );
};

export default Recordings;
