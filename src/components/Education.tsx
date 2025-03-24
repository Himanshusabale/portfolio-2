import React, { useState } from 'react';
import { GraduationCap, Award, Code } from 'lucide-react';

const Education = () => {
  const [activeTab, setActiveTab] = useState<'education' | 'certifications' | 'skills'>('education');

  const education = {
    college: {
      degree: 'Bachelor of Engineering in Information Technology',
      institution: 'Pune Institute of Computer Technology',
      year: '2022-26',
      score: 'CGPA (up to 5th Semester): 8/10',
    },
    hsc: {
      institution: 'Chate college, Kolhapur',
      year: '12th',
      score: 'Percentage: 81.50',
    },
    ssc: {
      institution: 'Shri vasantrao chougule english medium school, Kolhapur',
      year: '10th',
      score: 'Percentage: 86.60',
    },
  };

  const certifications = [
    'AlgoCamp | Advanced Frontend Web-development with React & Next JS',
    'GeeksforGeeks | MongoDB',
    'LinkedIn Learning | Applying Generative AI',
    'AWS | Foundations of Prompt Engineering',
    'Udemy | Machine Learning online Course',
  ];

  const skills = {
    technical: ['HTML', 'CSS', 'ReactJS', 'Next.js', 'Node.js', 'Express.js', 'Rest API', 'MySQL', 'MongoDB'],
    programming: ['C++', 'Python', 'Java', 'JavaScript'],
    core: ['Data Structures and Algorithm', 'OOP', 'Computer Network', 'DBMS', 'OS'],
    tools: ['Git', 'Github', 'Bootstrap', 'Figma', 'VsCode', 'MYSQL'],
    libraries: ['Numpy', 'Pandas'],
  };

  return (
    <section className="py-20 px-6 bg-gray-50 dark:bg-gray-800" id="education">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-center gap-4 mb-12">
          <button
            onClick={() => setActiveTab('education')}
            className={`flex items-center gap-2 px-6 py-3 rounded-full ${
              activeTab === 'education'
                ? 'bg-purple-600 text-white'
                : 'bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-300 hover:bg-purple-50 dark:hover:bg-gray-800'
            } transition-colors`}
          >
            <GraduationCap className="w-5 h-5" />
            Education
          </button>
          <button
            onClick={() => setActiveTab('certifications')}
            className={`flex items-center gap-2 px-6 py-3 rounded-full ${
              activeTab === 'certifications'
                ? 'bg-purple-600 text-white'
                : 'bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-300 hover:bg-purple-50 dark:hover:bg-gray-800'
            } transition-colors`}
          >
            <Award className="w-5 h-5" />
            Certifications
          </button>
          <button
            onClick={() => setActiveTab('skills')}
            className={`flex items-center gap-2 px-6 py-3 rounded-full ${
              activeTab === 'skills'
                ? 'bg-purple-600 text-white'
                : 'bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-300 hover:bg-purple-50 dark:hover:bg-gray-800'
            } transition-colors`}
          >
            <Code className="w-5 h-5" />
            Skills
          </button>
        </div>

        <div className="bg-white dark:bg-gray-900 rounded-xl p-8 shadow-lg">
          {activeTab === 'education' && (
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-semibold mb-6 text-gray-900 dark:text-white">
                  {education.college.degree}
                </h3>
                <div className="space-y-2 text-gray-600 dark:text-gray-300">
                  <p>{education.college.institution}</p>
                  <p>{education.college.year}</p>
                  <p className="font-medium text-purple-600 dark:text-purple-400">
                    {education.college.score}
                  </p>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
                  HSC ({education.hsc.year})
                </h3>
                <div className="space-y-2 text-gray-600 dark:text-gray-300">
                  <p>{education.hsc.institution}</p>
                  <p className="font-medium text-purple-600 dark:text-purple-400">
                    {education.hsc.score}
                  </p>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
                  SSC ({education.ssc.year})
                </h3>
                <div className="space-y-2 text-gray-600 dark:text-gray-300">
                  <p>{education.ssc.institution}</p>
                  <p className="font-medium text-purple-600 dark:text-purple-400">
                    {education.ssc.score}
                  </p>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'certifications' && (
            <div className="space-y-4">
              {certifications.map((cert, index) => (
                <div
                  key={index}
                  className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg flex items-center gap-4"
                >
                  <Award className="w-6 h-6 text-purple-600 dark:text-purple-400 flex-shrink-0" />
                  <p className="text-gray-700 dark:text-gray-300">{cert}</p>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'skills' && (
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
                  Technical Skills
                </h3>
                <div className="flex flex-wrap gap-2">
                  {skills.technical.map((skill, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-purple-100 dark:bg-purple-900 text-purple-600 dark:text-purple-300 rounded-full text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
                  Programming Languages
                </h3>
                <div className="flex flex-wrap gap-2">
                  {skills.programming.map((skill, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-purple-100 dark:bg-purple-900 text-purple-600 dark:text-purple-300 rounded-full text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
                  Core Subjects
                </h3>
                <div className="flex flex-wrap gap-2">
                  {skills.core.map((skill, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-purple-100 dark:bg-purple-900 text-purple-600 dark:text-purple-300 rounded-full text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
                  Tools & Libraries
                </h3>
                <div className="flex flex-wrap gap-2">
                  {[...skills.tools, ...skills.libraries].map((skill, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-purple-100 dark:bg-purple-900 text-purple-600 dark:text-purple-300 rounded-full text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Education;