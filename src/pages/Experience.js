import React from 'react';
import { FiBriefcase } from 'react-icons/fi';
import useScrollAnimation from '../hooks/useScrollAnimation';

const Experience = () => {
  const [ref, isVisible] = useScrollAnimation();

  const experiences = [
    {
      title: 'ICT Competitions',
      company: 'Various Competitions',
      period: '2024 - 2026',
      description: 'Participated in multiple ICT competitions, demonstrating technical skills and problem-solving abilities.',
      achievements: [
        'Database Application Development',
        'Frontend Programming',
        'TRON 2026 Cyber Defense Exercise Qualifiers ',
        'Competed in various web development challenges',
      ],
    },
    {
      title: 'Client-Based Web Development',
      company: 'Freelance Projects',
      period: '2023 - Present',
      description: 'Developed custom web applications for clients, focusing on functionality and user experience.',
      achievements: [
        'Built multiple client websites and web applications',
        'Implemented responsive designs across all projects',
        'Delivered projects meeting client specifications and deadlines',
      ],
    },
  ];

  return (
    <section id="experience" className="py-16 sm:py-20 bg-gray-50 dark:bg-dark-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4">Experience</h2>
        <div className="w-20 h-1 bg-primary-light mx-auto mb-8 sm:mb-12" />

        <div
          ref={ref}
          className={`space-y-8 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}
        >
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="bg-white dark:bg-dark-bg rounded-xl p-4 sm:p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex items-start space-x-3 sm:space-x-4">
                <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-primary-light/10 rounded-lg flex items-center justify-center">
                  <FiBriefcase className="text-primary-light" size={20} />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl sm:text-2xl font-bold mb-1">{exp.title}</h3>
                  <p className="text-sm sm:text-base text-primary-light font-medium mb-2">
                    {exp.company}
                  </p>
                  <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 mb-3 sm:mb-4">
                    {exp.period}
                  </p>
                  <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 mb-3 sm:mb-4">
                    {exp.description}
                  </p>
                  <ul className="space-y-1.5 sm:space-y-2">
                    {exp.achievements.map((achievement, i) => (
                      <li
                        key={i}
                        className="flex items-start space-x-2 text-sm sm:text-base text-gray-600 dark:text-gray-400"
                      >
                        <span className="text-primary-light mt-0.5 sm:mt-1">•</span>
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
