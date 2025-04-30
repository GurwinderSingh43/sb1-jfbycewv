import React, { useState } from 'react';
import { Code, BarChart } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  date: string;
  description: string;
  objective: string;
  outcome: string;
  techStack: string[];
  icon: React.ReactNode;
}

const Projects = () => {
  const [expandedProject, setExpandedProject] = useState<number | null>(null);

  const toggleExpand = (id: number) => {
    if (expandedProject === id) {
      setExpandedProject(null);
    } else {
      setExpandedProject(id);
    }
  };

  const projects: Project[] = [
    {
      id: 1,
      title: 'Sudoku Solver',
      date: 'December 2024',
      description: 'Puzzle Solving Algorithm',
      objective: 'To develop an algorithm that efficiently solves Sudoku puzzles by dynamically filling the grid while adhering to game constraints.',
      outcome: 'Successfully built a reliable Sudoku-solving tool that solves any valid puzzle in minimal time, enhancing understanding of algorithmic problem-solving and optimization techniques.',
      techStack: ['Java (Core Logic)', 'Backtracking Algorithm (Problem Solving)', 'Data Structures (Grid Representation)'],
      icon: <Code className="h-6 w-6 text-blue-600 dark:text-blue-400" />,
    },
    {
      id: 2,
      title: 'Sales Analytics Dashboard',
      date: 'March 2023',
      description: 'Interactive Data Visualization',
      objective: 'To create an interactive dashboard that visualizes sales trends, revenue performance, and regional metrics to support data-driven decision-making.',
      outcome: 'Delivered an intuitive and insightful dashboard that empowered stakeholders to identify key trends and make informed business decisions efficiently.',
      techStack: ['Tableau (Dashboard Development)', 'SQL (Data Extraction)', 'Data Visualization'],
      icon: <BarChart className="h-6 w-6 text-blue-600 dark:text-blue-400" />,
    },
  ];

  return (
    <section id="projects" className="py-24 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
            Projects
          </h2>
          <div className="mt-2 w-16 h-1 bg-blue-600 dark:bg-blue-400 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className={`bg-blue-50 dark:bg-gray-800 rounded-xl shadow-md overflow-hidden transition-all duration-300 ${
                expandedProject === project.id ? 'ring-2 ring-blue-500 transform scale-[1.02]' : 'hover:shadow-lg'
              }`}
            >
              <div 
                className="p-6 cursor-pointer"
                onClick={() => toggleExpand(project.id)}
              >
                <div className="flex items-start justify-between">
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-blue-100 dark:bg-gray-700 rounded-full flex items-center justify-center mr-4">
                      {project.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                        {project.title}
                      </h3>
                      <p className="text-gray-500 dark:text-gray-400 text-sm">
                        {project.date} | {project.description}
                      </p>
                    </div>
                  </div>
                  <button
                    className="text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400"
                    aria-label={expandedProject === project.id ? "Collapse" : "Expand"}
                  >
                    <svg
                      className={`h-5 w-5 transform transition-transform ${
                        expandedProject === project.id ? 'rotate-180' : ''
                      }`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>
                </div>
                
                <div
                  className={`mt-4 overflow-hidden transition-all duration-300 ${
                    expandedProject === project.id ? 'max-h-96' : 'max-h-0'
                  }`}
                >
                  <div className="space-y-3 text-gray-600 dark:text-gray-300">
                    <div>
                      <h4 className="font-medium text-gray-900 dark:text-white">Objective</h4>
                      <p>{project.objective}</p>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900 dark:text-white">Outcome</h4>
                      <p>{project.outcome}</p>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900 dark:text-white">Tech Stack</h4>
                      <div className="flex flex-wrap gap-2 mt-2">
                        {project.techStack.map((tech, index) => (
                          <span
                            key={index}
                            className="px-3 py-1 bg-blue-100 dark:bg-gray-700 text-blue-800 dark:text-blue-300 text-xs rounded-full"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;