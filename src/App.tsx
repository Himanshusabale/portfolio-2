import React, { useState } from 'react';
import { Github, Linkedin, Mail, Moon, Sun } from 'lucide-react';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Education from './components/Education';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle('dark');
  };

  return (
    <div className={`min-h-screen ${darkMode ? 'dark' : ''}`}>
      <div className="bg-white dark:bg-gray-900 transition-colors duration-200">
        <nav className="fixed w-full bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm z-50 py-4 px-6 flex justify-between items-center border-b border-gray-200 dark:border-gray-800">
          <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">
            Portfolio
          </h1>
          <div className="flex items-center gap-4">
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            >
              {darkMode ? (
                <Sun className="w-5 h-5 text-gray-600 dark:text-gray-300" />
              ) : (
                <Moon className="w-5 h-5 text-gray-600 dark:text-gray-300" />
              )}
            </button>
          </div>
        </nav>

        <main>
          <Hero />
          <About />
          <Education />
          <Projects />
          <Skills />
          <Contact />
        </main>

        <footer className="bg-gray-50 dark:bg-gray-800 py-8 px-6">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-600 dark:text-gray-300">
              © 2024 Himanshu Sabale. All rights reserved.
            </p>
            <div className="flex items-center gap-4">
              <a
                href="https://github.com/Himanshusabale"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/himanshu-sabale-088439258/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="mailto:himanshusabale@gmail.com"
                className="flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400"
              >
                <Mail className="w-5 h-5" />
                <span>himanshusabale@gmail.com</span>
              </a>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;