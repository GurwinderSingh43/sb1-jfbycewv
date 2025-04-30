import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-white to-blue-50 dark:from-gray-900 dark:to-gray-800 pt-16"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="md:w-1/2 space-y-6 text-center md:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white">
              <span className="block">Hi, I'm</span>
              <span className="block mt-2 text-blue-600 dark:text-blue-400">
                Gurwinder Singh
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300">
              Computer Science Engineer & Data Enthusiast
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl">
              Passionate about building solutions that matter. Focusing on data analytics,
              algorithm design, and software development.
            </p>
            <div className="flex space-x-4 justify-center md:justify-start">
              <a
                href="mailto:gurisaggu2002@gmail.com"
                className="p-3 rounded-full bg-blue-100 hover:bg-blue-200 dark:bg-gray-800 dark:hover:bg-gray-700 text-blue-600 dark:text-blue-400 transition-colors duration-300"
                aria-label="Email"
              >
                <Mail className="h-5 w-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/gurwindersingh001"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-blue-100 hover:bg-blue-200 dark:bg-gray-800 dark:hover:bg-gray-700 text-blue-600 dark:text-blue-400 transition-colors duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="https://github.com/GurwinderSingh43"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-blue-100 hover:bg-blue-200 dark:bg-gray-800 dark:hover:bg-gray-700 text-blue-600 dark:text-blue-400 transition-colors duration-300"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </a>
            </div>
            <div className="pt-4">
              <a
                href="#about"
                className="inline-block px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors duration-300 shadow-md hover:shadow-lg"
              >
                Explore My Work
              </a>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden">
              <img 
                src="/profile.jpg" 
                alt="Gurwinder Singh"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;