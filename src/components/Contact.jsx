import React from 'react';
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import { motion } from "framer-motion";
import { Reveal } from './Reveal';


export const Contact = () => {
  return (
    <div className="px-6 max-w-[1000px] mx-auto md:my-12" id="contact">
      <Reveal>
      <div className="grid md:grid-cols-2 gap-10 place-items-center">
        {/* About Me Section */}
        <div className="text-gray-300">
          <h3 className="text-4xl font-semibold mb-5">About <span>Me</span></h3>
          <p className="text-justify leading-7 w-11/12 mx-auto">
            🌐 I'm a web development enthusiast, skilled in HTML, CSS, and JavaScript, who loves crafting engaging online experiences. Learning more day by day.
            <br />
            🌟 Currently, I'm brushing up my Data Structures & Algorithms knowledge to build a rock-solid foundation in software development.
            <br />
            🚀 I thrive on challenges and continuous learning, always seeking opportunities to contribute my skills to innovative tech projects.
          </p>
          <div className="flex mt-10 items-center gap-7">
            <div className="bg-gray-800/40 p-4 rounded-lg">
              <h3 className="md:text-4xl text-2xl font-semibold text-white">5<span>+</span></h3>
              <p className="text-xs md:text-base"><span>Projects</span></p>
            </div>
          </div>
        </div>

        {/* Contact Form Section */}
        <form 
          action="https://getform.io/f/bxojlmja"
          method="POST"
          className="w-full p-5 md:p-12"
          id="form"
        >
          <p className="text-gray-100 font-bold text-xl mb-2">Let´s connect!</p>
          <input
            type="text"
            id="name"
            placeholder="Your Name ..."
            name="name"
            className="mb-2 w-full rounded-md border border-purple-600 py-2 pl-2 pr-4"
          />
          <input
            type="email"
            id="email"
            placeholder="Your Email ..."
            name="email"
            className="mb-2 w-full rounded-md border border-purple-600 py-2 pl-2 pr-4"
          />
          <textarea
            name="textarea"
            id="textarea"
            cols="30"
            rows="4"
            placeholder="Your Message ..."
            className="mb-2 w-full rounded-md border border-purple-600 py-2 pl-2 pr-4"
          />
          <button
            type="submit"
            className="w-full py-3 rounded-md text-gray-100 font-semibold text-xl bg-primary-color"
          >
            Send Message
          </button>
        </form>
      </div>
      </Reveal>
    </div>
  );
};
