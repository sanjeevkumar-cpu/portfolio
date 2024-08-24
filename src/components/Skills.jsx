import React from 'react'
import { Reveal } from './Reveal';

import {
  DiHtml5,
  DiCss3,
  DiBootstrap,
  DiJavascript1,
  DiReact,
  DiNodejsSmall,
  DiMongodb,
  DiGithubBadge,
} from "react-icons/di"
import { SiExpress } from "react-icons/si"

const skills = [
  {
    category: 'Frontend',
    technologies: [
      { name: 'HTML', icon: <DiHtml5 className='text-orange-600' /> },
      { name: 'CSS', icon: <DiCss3 className='text-blue-600' /> },
      { name: 'Bootstrap', icon: <DiBootstrap className='text-purple-600' /> },
      { name: 'JavaScript', icon: <DiJavascript1 className='text-yellow-500' /> },
      { name: 'React', icon: <DiReact className='text-blue-500' /> },
    ],
  },
  {
    category: 'Fullstack',
    technologies: [
      { name: 'Node.js', icon: <DiNodejsSmall className='text-green-500' /> },
      { name: 'Express', icon: <SiExpress className='text-gray-200' /> },
      { name: 'MongoDB', icon: <DiMongodb className='text-green-600' /> },
      { name: 'GitHub', icon: <DiGithubBadge className='text-gray-600' /> },
    ],
  },
]

export const Skills = () => {
  return (
    <div className='flex flex-col justify-center items-center px-4 text-gray-200 pb-8 md:py-12' id='skills'>
      <Reveal>
        <h2 className='text-3xl font-extrabold mb-6 text-center text-yellow-400'>My Skills</h2>
        <p className='text-center mb-8 text-md text-gray-300'>
          I have experience working on a variety of Frontend and Fullstack projects. Here are some of the key technologies I use:
        </p>
        <div className='flex flex-wrap justify-center gap-12'>
          {skills.map((skill, index) => (
            <div
              key={index}
              className='border-2 border-gray-700 p-6 rounded-xl bg-gray-900 hover:bg-gray-800 shadow-xl transition-all duration-300 w-64 text-center'
            >
              <h3 className='text-xl font-bold mb-4 text-white'>{skill.category}</h3>
              <div className='flex flex-col items-center space-y-3'>
                {skill.technologies.map((tech, idx) => (
                  <div key={idx} className='flex items-center justify-center space-x-2 text-white'>
                    <span className='text-3xl'>{tech.icon}</span>
                    <span className='text-lg'>{tech.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Reveal>
    </div>
  )
}
