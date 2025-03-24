import React from 'react';
import { Code2, Database, Layout, Server } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend',
      icon: Layout,
      skills: [
        { name: 'React.js', level: 90 },
        { name: 'TypeScript', level: 85 },
        { name: 'Tailwind CSS', level: 88 },
        { name: 'Next.js', level: 82 },
      ],
    },
    {
      title: 'Backend',
      icon: Server,
      skills: [
        { name: 'Node.js', level: 88 },
        { name: 'Express.js', level: 85 },
        { name: 'Python', level: 80 },
        { name: 'GraphQL', level: 75 },
      ],
    },
    {
      title: 'Database',
      icon: Database,
      skills: [
        { name: 'MongoDB', level: 85 },
        { name: 'PostgreSQL', level: 80 },
        { name: 'Redis', level: 75 },
        { name: 'Firebase', level: 78 },
      ],
    },
    {
      title: 'Programming',
      icon: Code2,
      skills: [
        { name: 'JavaScript', level: 92 },
        { name: 'Python', level: 85 },
        { name: 'Java', level: 80 },
        { name: 'C++', level: 75 },
      ],
    },
  ];

  return (
    <section className="py-20 px-6 bg-gray-50 dark:bg-gray-800" id="skills">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white">
          Skills & Expertise
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-lg"
            >
              <div className="flex items-center gap-3 mb-6">
                <category.icon className="w-6 h-6 text-purple-600" />
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  {category.title}
                </h3>
              </div>
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between mb-1">
                      <span className="text-gray-600 dark:text-gray-300">
                        {skill.name}
                      </span>
                      <span className="text-gray-600 dark:text-gray-300">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-purple-600 to-blue-500 rounded-full transition-all duration-500"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;