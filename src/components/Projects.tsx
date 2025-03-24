import React, { useState } from 'react';
import { Github, ExternalLink, ChevronDown, ChevronUp } from 'lucide-react';

const Projects = () => {
  const [showAll, setShowAll] = useState(false);

  const projects = [
    {
      title: 'Sensai – AI Resume Builder',
      description: 'AI-powered Interview practice MCQ & performance generator, resume and cover letter builder with Gemini API integration for interview practice.',
      tech: ['React', 'Node.js', 'Gemini API', 'TailwindCSS'],
      github: 'https://github.com/Himanshusabale/sensai',
      live: 'https://sensai-ashen.vercel.app/',
      image: 'https://images.unsplash.com/photo-1512486130939-2c4f79935e4f?auto=format&fit=crop&q=80&w=800',
    },
    {
      title: 'Wanderlust',
      description: 'A seamless hostel booking website for travelers with real-time availability.',
      tech: ['React', 'Node.js', 'MongoDB', 'Express'],
      github: 'https://github.com/Himanshusabale/Wanderlust-MAJOR_PROJECT',
      live: 'https://wanderlust-project-b621.onrender.com/login',
      image: 'https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&q=80&w=800',
    },
    {
      title: 'Hospital Management',
      description: 'A comprehensive system to streamline hospital operations and patient records.',
      tech: ['React', 'Node.js', 'PostgreSQL', 'Redux'],
      github: 'https://github.com/Himanshusabale/Prescripto/tree/main',
      live: 'https://prescripto-frontend-jr50.onrender.com/',
      image: 'https://images.unsplash.com/photo-1538108149393-fbbd81895907?auto=format&fit=crop&q=80&w=800',
    },
    {
      title: 'Newbie',
      description: 'A student help platform for sharing notes and study materials.',
      tech: ['React', 'Firebase', 'Material-UI', 'Cloud Storage'],
      github: 'https://github.com/Himanshusabale/NewBie',
      live: 'https://himanshusabale.github.io/NewBie/',
      image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&q=80&w=800',
    },
    {
      title: 'Weather Forecast',
      description: 'A React app that provides real-time weather updates with beautiful visualizations.',
      tech: ['React', 'Weather API', 'ChartJS', 'TailwindCSS'],
      github: 'https://github.com/Himanshusabale/Weather-widget',
      live: 'https://wonderlustt.netlify.app/',
      image: 'https://images.unsplash.com/photo-1592210454359-9043f067919b?auto=format&fit=crop&q=80&w=800',
    },
    {
      title: 'YOLO Quiz',
      description: 'An interactive quiz app with MCQs and automatic score tracking.',
      tech: ['React', 'TypeScript', 'Redux', 'Firebase'],
      github: 'https://github.com/Himanshusabale/yolo1',
      live: 'https://yolo1.lovable.app/login',
      image: 'https://images.unsplash.com/photo-1606326608606-aa0b62935f2b?auto=format&fit=crop&q=80&w=800',
    },
    {
      title: 'Task Management',
      description: 'A comprehensive tool to create, assign, and track tasks efficiently.',
      tech: ['React', 'Node.js', 'MongoDB', 'Socket.io'],
      github: 'https://github.com/Himanshusabale/Zenofy_Task',
      live: 'https://ephemeral-sfogliatella-59f13d.netlify.app/',
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=800',
    },
    {
      title: 'Portfolio',
      description: 'A modern, responsive website showcasing skills and projects.',
      tech: ['React', 'TailwindCSS', 'TypeScript', 'Vite'],
      github: 'https://github.com/Himanshusabale/MyPortfolio',
      live: 'https://himanshusabale.github.io/MyPortfolio/',
      image: 'https://images.unsplash.com/photo-1487017159836-4e23ece2e4cf?auto=format&fit=crop&q=80&w=800',
    },
    {
      title: 'YouTube Summarization',
      description: 'A tool to generate concise summaries of YouTube videos using AI.',
      tech: ['React', 'Python', 'OpenAI API', 'Flask'],
      github: 'https://github.com/Himanshusabale/YouTube-Summarizer',
      live: 'https://profound-swan-979494.netlify.app/',
      image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&q=80&w=800',
    },
  ];

  const displayedProjects = showAll ? projects : projects.slice(0, 4);

  return (
    <section className="py-20 px-6" id="projects">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white">
          Featured Projects
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {displayedProjects.map((project, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow group"
            >
              <div className="relative aspect-video overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-purple-100 dark:bg-purple-900 text-purple-600 dark:text-purple-300 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400"
                  >
                    <Github className="w-5 h-5" />
                    Code
                  </a>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400"
                  >
                    <ExternalLink className="w-5 h-5" />
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-12 text-center">
          <button
            onClick={() => setShowAll(!showAll)}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-purple-600 text-white hover:bg-purple-700 transition-colors"
          >
            {showAll ? (
              <>
                Show Less
                <ChevronUp className="w-5 h-5" />
              </>
            ) : (
              <>
                Show More
                <ChevronDown className="w-5 h-5" />
              </>
            )}
          </button>
        </div>
      </div>
    </section>
  );
};

export default Projects;