import React from 'react';
import { FiArrowDown } from 'react-icons/fi';
import Button from '../components/Button';

const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 via-blue-50 to-gray-100 dark:from-dark-bg dark:via-gray-900 dark:to-dark-card pt-16 relative overflow-hidden"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary-light/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '4s' }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        {/* Main Content */}
        <div className="space-y-6">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 animate-fade-in-up">
            Hi, I'm{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-light via-blue-500 to-purple-600 animate-gradient gradient-animate">
              Prince Andrey A. Ramos
            </span>
          </h1>
          <p className="text-xl sm:text-2xl text-gray-600 dark:text-gray-400 mb-8 max-w-3xl mx-auto animate-fade-in-up stagger-1">
            Student | Web Developer
          </p>
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto animate-fade-in-up stagger-2">
            Web developer with experience building websites for client and self projects.
            Passionate about creating functional and user-friendly web applications.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16 animate-fade-in-up stagger-3">
            <Button onClick={() => document.getElementById('projects').scrollIntoView({ behavior: 'smooth' })}>
              View My Work
            </Button>
            <Button 
              variant="outline"
              onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
            >
              Get In Touch
            </Button>
          </div>

          {/* Scroll Indicator */}
          <a
            href="#about"
            className="inline-block animate-bounce text-gray-600 dark:text-gray-400 hover:text-primary-light transition-all duration-300 transform hover:scale-125 animate-fade-in-up stagger-4"
            aria-label="Scroll to about section"
          >
            <FiArrowDown size={32} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Home;
