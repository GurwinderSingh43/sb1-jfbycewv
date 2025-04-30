import React from 'react';
import { Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-lg font-semibold">Gurwinder Singh</p>
            <p className="text-gray-400">Computer Science Engineer</p>
          </div>

          <div className="flex items-center space-x-4">
            <a
              href="mailto:gurisaggu2002@gmail.com"
              className="text-gray-400 hover:text-white transition-colors duration-200"
            >
              Email
            </a>
            <span className="text-gray-600">•</span>
            <a
              href="https://www.linkedin.com/in/gurwindersingh001"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors duration-200"
            >
              LinkedIn
            </a>
            <span className="text-gray-600">•</span>
            <a
              href="https://github.com/GurwinderSingh43"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors duration-200"
            >
              GitHub
            </a>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-800 text-center">
          <p className="text-gray-400 flex items-center justify-center">
            © {currentYear} Gurwinder Singh. Built with 
            <Heart className="h-4 w-4 text-red-500 mx-1" fill="currentColor" /> and React.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;