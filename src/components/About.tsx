import React from 'react';
import { Code, BarChart as ChartBar, DatabaseIcon } from 'lucide-react';
const='/abc.jpg';
const='/BEST Gurwinder General CV.docx';
const About = () => {
  return (
    <section
      id="about"
      className="py-24 bg-white dark:bg-gray-900"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
            About Me
          </h2>
          <div className="mt-2 w-16 h-1 bg-blue-600 dark:bg-blue-400 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-blue-50 dark:bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
            <div className="w-12 h-12 bg-blue-100 dark:bg-gray-700 rounded-full flex items-center justify-center mb-4">
              <Code className="h-6 w-6 text-blue-600 dark:text-blue-400" />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">Developer</h3>
            <p className="text-gray-600 dark:text-gray-300">
              I'm passionate about writing clean, efficient code and solving complex problems. My focus is on
              creating robust software solutions that make a difference.
            </p>
          </div>

          <div className="bg-blue-50 dark:bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
            <div className="w-12 h-12 bg-blue-100 dark:bg-gray-700 rounded-full flex items-center justify-center mb-4">
              <ChartBar className="h-6 w-6 text-blue-600 dark:text-blue-400" />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">Data Enthusiast</h3>
            <p className="text-gray-600 dark:text-gray-300">
              I enjoy exploring data patterns and creating insightful visualizations. From building dashboards
              to analyzing trends, I leverage data to derive valuable insights.
            </p>
          </div>

          <div className="bg-blue-50 dark:bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
            <div className="w-12 h-12 bg-blue-100 dark:bg-gray-700 rounded-full flex items-center justify-center mb-4">
              <DatabaseIcon className="h-6 w-6 text-blue-600 dark:text-blue-400" />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">Problem Solver</h3>
            <p className="text-gray-600 dark:text-gray-300">
              I thrive on tackling challenging problems with algorithmic thinking. My experience with data
              structures and algorithms helps me approach complex issues systematically.
            </p>
          </div>
        </div>

        <div className="mt-16 bg-blue-50 dark:bg-gray-800 p-8 rounded-xl shadow-md">
          <h3 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">My Journey</h3>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            As a Computer Science Engineering student at Lovely Professional University, I've been consistently
            building my technical skills across various domains. My journey began with a strong foundation in
            programming languages and data structures, which I've been expanding through projects, coursework,
            and self-directed learning.
          </p>
          <p className="text-gray-600 dark:text-gray-300">
            I'm particularly interested in data analytics and algorithmic problem solving. My projects, like
            the Sudoku Solver and Sales Analytics Dashboard, demonstrate my ability to apply technical skills
            to create practical solutions. I'm continuously growing my expertise in Python, R, Java, and SQL,
            while also developing visualization skills with tools like Tableau and Power BI.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
