import React from 'react';
import { FiCode, FiHeart, FiZap } from 'react-icons/fi';
import useScrollAnimation from '../hooks/useScrollAnimation';

const About = () => {
  const [ref, isVisible] = useScrollAnimation();

  const highlights = [
    {
      icon: <FiCode size={32} />,
      title: 'Clean Code',
      description: 'Writing maintainable and scalable code is my priority',
    },
    {
      icon: <FiHeart size={32} />,
      title: 'User-Focused',
      description: 'Creating intuitive experiences that users love',
    },
    {
      icon: <FiZap size={32} />,
      title: 'Fast Learner',
      description: 'Always exploring new technologies and best practices',
    },
  ];

  return (
    <section id="about" className="py-20 bg-white dark:bg-dark-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={ref}
          className={`${isVisible ? 'animate-fade-in' : 'opacity-0'}`}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4">About Me</h2>
          <div className="w-20 h-1 bg-primary-light mx-auto mb-8 sm:mb-12" />

          <div className="grid md:grid-cols-2 gap-8 sm:gap-12 items-center">
            {/* About Text */}
            <div>
              <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 mb-4 sm:mb-6">
                I'm a web developer with experience building websites for both client
                projects and personal initiatives. I specialize in modern web technologies
                including React, Laravel, and responsive design frameworks.
              </p>
              <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 mb-4 sm:mb-6">
                Currently pursuing a Bachelor of Science in Information Technology with
                a major in Web and Mobile Application Development, I combine academic
                knowledge with practical experience to create effective web solutions.
              </p>
              <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400">
                I'm passionate about learning new technologies and participating in
                competitions to sharpen my skills and stay current with industry trends.
              </p>
            </div>

            {/* Highlights Grid */}
            <div className="grid gap-6">
              {highlights.map((item, index) => (
                <div
                  key={index}
                  className="flex items-start space-x-3 sm:space-x-4 p-4 sm:p-5 bg-gray-50 dark:bg-dark-card rounded-lg hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="text-primary-light flex-shrink-0 mt-1">{item.icon}</div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-semibold mb-1 sm:mb-2">{item.title}</h3>
                    <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
