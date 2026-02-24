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
        'Database Application Development - Champion',
        'TRON 2026 Cyber Defense Exercise Qualifiers - First Runner Up',
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
    <section id="experience" className="py-20 bg-gray-50 dark:bg-dark-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-4">Experience</h2>
        <div className="w-20 h-1 bg-primary-light mx-auto mb-12" />

        <div
          ref={ref}
          className={`space-y-8 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}
        >
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="bg-white dark:bg-dark-bg rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-primary-light/10 rounded-lg flex items-center justify-center">
                  <FiBriefcase className="text-primary-light" size={24} />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-1">{exp.title}</h3>
                  <p className="text-primary-light font-medium mb-2">
                    {exp.company}
                  </p>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
                    {exp.period}
                  </p>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    {exp.description}
                  </p>
                  <ul className="space-y-2">
                    {exp.achievements.map((achievement, i) => (
                      <li
                        key={i}
                        className="flex items-start space-x-2 text-gray-600 dark:text-gray-400"
                      >
                        <span className="text-primary-light mt-1">•</span>
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
