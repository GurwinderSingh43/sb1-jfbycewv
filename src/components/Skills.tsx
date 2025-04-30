import React from 'react';

const SkillBar = ({ name, percentage }: { name: string; percentage: number }) => {
  return (
    <div className="mb-6">
      <div className="flex justify-between items-center mb-1">
        <span className="text-gray-700 dark:text-gray-300 font-medium">{name}</span>
        <span className="text-sm text-gray-500 dark:text-gray-400">{percentage}%</span>
      </div>
      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
        <div 
          className="bg-blue-600 dark:bg-blue-500 h-2.5 rounded-full transition-all duration-1000 ease-out"
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
    </div>
  );
};

const SkillCategory = ({ title, skills }: { title: string; skills: Array<{ name: string; percentage: number }> }) => {
  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md">
      <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">{title}</h3>
      {skills.map((skill, index) => (
        <SkillBar key={index} name={skill.name} percentage={skill.percentage} />
      ))}
    </div>
  );
};

const Skills = () => {
  const programmingSkills = [
    { name: 'Python', percentage: 85 },
    { name: 'R', percentage: 75 },
    { name: 'Java', percentage: 80 },
    { name: 'SQL', percentage: 85 },
  ];

  const visualizationSkills = [
    { name: 'Tableau', percentage: 80 },
    { name: 'Power BI', percentage: 75 },
    { name: 'Microsoft Excel', percentage: 90 },
  ];

  const softSkills = [
    { name: 'Problem-Solving', percentage: 90 },
    { name: 'Teamwork', percentage: 85 },
    { name: 'Adaptability', percentage: 80 },
  ];

  return (
    <section id="skills" className="py-24 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
            My Skills
          </h2>
          <div className="mt-2 w-16 h-1 bg-blue-600 dark:bg-blue-400 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <SkillCategory title="Programming Languages" skills={programmingSkills} />
          <SkillCategory title="Visualization Tools" skills={visualizationSkills} />
          <SkillCategory title="Soft Skills" skills={softSkills} />
        </div>
      </div>
    </section>
  );
};

export default Skills;