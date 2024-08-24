import React from 'react';
import { AiOutlineGithub } from 'react-icons/ai';
import project1 from "../assets/writenow.png";
import project2 from "../assets/realtime.png";
import project3 from "../assets/cryptobash.png";
import project4 from "../assets/news.png";
import project5 from "../assets/todo.png";
import { Reveal } from './Reveal';

const projects = [
    {
        img: project1,
        title: "Project #1",
        description: "Write-Now, a web application for document collaboration.",
        links: {
            site: "https://github.com/sanjeevkumar-cpu/WRITE-NOW",
            github: "https://github.com/sanjeevkumar-cpu/WRITE-NOW",
        },
    },
    {
        img: project2,
        title: "Project #2",
        description: "Real-Time tracker made with Node.js, Express, and Socket.IO.",
        links: {
            site: "https://github.com/sanjeevkumar-cpu/real-time-tracker",
            github: "https://github.com/sanjeevkumar-cpu/real-time-tracker",
        },
    },
    {
        img: project3,
        title: "Project #3",
        description: "Crypto Bash website made using React and CoinGecko API.",
        links: {
            site: "https://crypto-bash-up.vercel.app/",
            github: "https://github.com/sanjeevkumar-cpu/cryptobash",
        },
    },
    {
        img: project4,
        title: "Project #4",
        description: "News website using React and News API.",
        links: {
            site: "https://news-teb.vercel.app/",
            github: "https://github.com/sanjeevkumar-cpu/News-Teb",
        },
    },
    {
        img: project5,
        title: "Project #5",
        description: "Todo-list web app using React with local storage.",
        links: {
            site: "https://github.com/sanjeevkumar-cpu/Todo-List",
            github: "https://github.com/sanjeevkumar-cpu/Todo-List",
        },
    },
];

export const Portfolio = () => {
    return (
        <div className='max-w-[1000px] mx-auto p-6 md:my-20' id="portfolio">
            <h2 className='text-3xl font-bold text-gray-200 mb-8'>Portfolio</h2>
            {projects.map((project, index) => (
                <Reveal>
                <div key={index} className={`flex flex-col md:flex-row ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''} mb-12`}>
                    <div className='w-full md:w-1/2 p-4'>
                        <img src={project.img} alt={project.title} className='w-full h-full object-cover rounded-lg shadow-lg'/>
                    </div>
                    <div className='w-full md:w-1/2 p-4 flex flex-col justify-center'>
                        <h3 className='text-2xl font-semibold text-gray-200 mb-4'>{project.title}</h3>
                        <p className='text-gray-300 mb-4'>{project.description}</p>
                        <div className='flex space-x-4'>
                            <a
                                href={project.links.site}
                                className='px-4 py-2 bg-gradient-to-r from-purple-500 to-purple-700 text-white rounded-lg hover:from-purple-600 hover:to-purple-800 transition duration-200 cursor-pointer'
                            >
                                View Site
                            </a>
                            <a
                                href={project.links.github}
                                className='px-4 py-2 bg-gradient-to-r from-purple-500 to-purple-700 text-white rounded-lg hover:from-purple-600 hover:to-purple-800 transition duration-200 cursor-pointer flex items-center'
                            >
                                <AiOutlineGithub className='mr-2' /> GitHub
                            </a>
                        </div>
                    </div>
                </div>
                </Reveal>
            ))}
        </div>
    );
};