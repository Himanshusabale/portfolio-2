import React from 'react';
import { ArrowRight, Download } from 'lucide-react';

const Hero = () => {
  return (
    <section className="pt-32 pb-20 px-6">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12">
        <div className="flex-1 text-center lg:text-left">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6">
            Hi, I'm{' '}
            <span className="bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">
              Himanshu Sabale
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8">
            Full Stack Developer | ML Enthusiast | Problem Solver
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <a
              href="#projects"
              className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-purple-600 text-white hover:bg-purple-700 transition-colors"
            >
              View Projects
              <ArrowRight className="ml-2 w-5 h-5" />
            </a>
            <a
              href="/images/Himanshu_Sabale_I2K221250_Resume.pdf"
              className="inline-flex items-center justify-center px-6 py-3 rounded-full border-2 border-purple-600 text-purple-600 hover:bg-purple-50 dark:hover:bg-gray-800 transition-colors"
            >
              Download Resume
              <Download className="ml-2 w-5 h-5" />
            </a>

          </div>
        </div>
        <div className="flex-1 max-w-md">
          <div className="aspect-square rounded-full overflow-hidden border-4 border-purple-600">
            <img
              src="/images/himu.png"
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;