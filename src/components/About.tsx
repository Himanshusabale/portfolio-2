import React from 'react';
import { CheckCircle } from 'lucide-react';

const About = () => {
  const strengths = [
    'Strong problem-solving skills with algorithmic thinking',
    'Experience with modern web technologies and frameworks',
    'Passionate about creating clean, maintainable code',
    'Excellent team player with great communication skills',
  ];

  return (
    <section className="py-20 px-6 bg-gray-50 dark:bg-gray-800" id="about">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white">
          About Me
        </h2>
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">
              Who I Am
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              I'm a passionate Full Stack Developer with expertise in building scalable web
              applications using modern technologies. With a strong foundation in computer
              science and a keen interest in machine learning, I bring both technical
              excellence and innovative thinking to every project.
            </p>
            <p className="text-gray-600 dark:text-gray-300">
              Currently focused on MERN stack development while exploring the fascinating
              world of machine learning and artificial intelligence.
            </p>
          </div>
          <div>
            <h3 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">
              Why Hire Me?
            </h3>
            <ul className="space-y-4">
              {strengths.map((strength, index) => (
                <li
                  key={index}
                  className="flex items-start gap-3 text-gray-600 dark:text-gray-300"
                >
                  <CheckCircle className="w-6 h-6 text-purple-600 flex-shrink-0" />
                  <span>{strength}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;