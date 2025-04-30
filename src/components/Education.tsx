import React from 'react';
import { GraduationCap, Award, Briefcase } from 'lucide-react';

const Timeline = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="relative">
      <div className="absolute left-0 top-0 ml-4 sm:ml-5 h-full w-0.5 bg-blue-200 dark:bg-blue-900"></div>
      <div className="space-y-12">{children}</div>
    </div>
  );
};

interface TimelineItemProps {
  title: string;
  subtitle: string;
  date: string;
  description?: string;
  icon: React.ReactNode;
  lastItem?: boolean;
}

const TimelineItem = ({ title, subtitle, date, description, icon, lastItem }: TimelineItemProps) => {
  return (
    <div className="relative flex items-start group">
      <div className="absolute left-0 top-0 ml-2 sm:ml-3 mt-1 w-4 h-4 rounded-full bg-white border-2 border-blue-500 dark:bg-gray-800 z-10 group-hover:bg-blue-500 transition-colors duration-300"></div>
      <div className="ml-12 sm:ml-14">
        <div className="flex flex-col sm:flex-row sm:items-center gap-2">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{title}</h3>
          <span className="hidden sm:inline text-gray-400">•</span>
          <p className="text-sm text-gray-500 dark:text-gray-400">{subtitle}</p>
        </div>
        <p className="text-sm text-blue-600 dark:text-blue-400 font-medium mb-2">{date}</p>
        {description && <p className="text-gray-600 dark:text-gray-300">{description}</p>}
      </div>
      <div className="absolute -left-1 top-0 sm:left-0 mt-0.5 w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center">
        {icon}
      </div>
    </div>
  );
};

const Education = () => {
  return (
    <section id="education" className="py-24 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
            Education & Training
          </h2>
          <div className="mt-2 w-16 h-1 bg-blue-600 dark:bg-blue-400 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
          <div>
            <h3 className="text-2xl font-semibold mb-6 text-gray-900 dark:text-white flex items-center">
              <GraduationCap className="w-6 h-6 mr-2 text-blue-600 dark:text-blue-400" />
              Education
            </h3>
            <Timeline>
              <TimelineItem
                title="Lovely Professional University"
                subtitle="B.Tech in Computer Science and Engineering"
                date="August 2022 - Present"
                description="CGPA: 7.16"
                icon={<GraduationCap className="w-4 h-4 text-blue-600 dark:text-blue-400" />}
              />
              <TimelineItem
                title="Rose Mary Convent School"
                subtitle="Intermediate Education"
                date="April 2019 - 2021"
                description="Percentage: 75%"
                icon={<GraduationCap className="w-4 h-4 text-blue-600 dark:text-blue-400" />}
              />
              <TimelineItem
                title="Akal Academy Cheema"
                subtitle="Secondary Education"
                date="April 2018 - 2019"
                description="Percentage: 79.6%"
                icon={<GraduationCap className="w-4 h-4 text-blue-600 dark:text-blue-400" />}
                lastItem={true}
              />
            </Timeline>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-6 text-gray-900 dark:text-white flex items-center">
              <Briefcase className="w-6 h-6 mr-2 text-blue-600 dark:text-blue-400" />
              Training & Certificates
            </h3>
            <Timeline>
              <TimelineItem
                title="Data Structures and Algorithms"
                subtitle="Self-Paced (Java/C++)"
                date="Summer 2024"
                description="Strengthened problem-solving skills and built a strong foundation in core Data Structures and Algorithms. Covered arrays, linked lists, trees, graphs, dynamic programming, and backtracking."
                icon={<Briefcase className="w-4 h-4 text-blue-600 dark:text-blue-400" />}
              />
              <TimelineItem
                title="Machine Learning with Python"
                subtitle="Coursera"
                date="2023"
                icon={<Award className="w-4 h-4 text-blue-600 dark:text-blue-400" />}
              />
              <TimelineItem
                title="Cloud Computing"
                subtitle="NPTEL"
                date="2023"
                icon={<Award className="w-4 h-4 text-blue-600 dark:text-blue-400" />}
                lastItem={true}
              />
            </Timeline>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;