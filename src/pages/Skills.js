import React from 'react';
import useScrollAnimation from '../hooks/useScrollAnimation';

const Skills = () => {
  const [ref, isVisible] = useScrollAnimation();

  // Skills data with icons and colors
  const skills = [
    { name: 'HTML', icon: '🌐', color: 'from-orange-400 to-orange-600' },
    { name: 'CSS', icon: '🎨', color: 'from-blue-400 to-blue-600' },
    { name: 'JavaScript', icon: '🟨', color: 'from-yellow-400 to-yellow-600' },
    { name: 'React', icon: '⚛️', color: 'from-cyan-400 to-cyan-600' },
    { name: 'Bootstrap', icon: '🅱️', color: 'from-purple-400 to-purple-600' },
    { name: 'Tailwind CSS', icon: '💨', color: 'from-teal-400 to-teal-600' },
    { name: 'PHP', icon: '🐘', color: 'from-indigo-400 to-indigo-600' },
    { name: 'Laravel', icon: '🔺', color: 'from-red-400 to-red-600' },
    { name: 'Java', icon: '☕', color: 'from-amber-400 to-amber-600' },
    { name: 'MySQL', icon: '🐬', color: 'from-blue-500 to-blue-700' },
    { name: 'Git', icon: '📦', color: 'from-orange-500 to-orange-700' },
  ];

  return (
    <section id="skills" className="py-16 sm:py-20 bg-white dark:bg-dark-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={ref}
          className={`${isVisible ? 'animate-fade-in' : 'opacity-0'}`}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4">Skills & Technologies</h2>
          <div className="w-20 h-1 bg-primary-light mx-auto mb-4" />
          <p className="text-sm sm:text-base text-center text-gray-600 dark:text-gray-400 mb-8 sm:mb-12 max-w-2xl mx-auto px-4">
            Technologies and tools I use to bring ideas to life
          </p>

          {/* Skills Badges */}
          <div className="flex flex-wrap gap-2.5 sm:gap-3 md:gap-4 justify-center max-w-4xl mx-auto">
            {skills.map((skill, index) => (
              <span
                key={skill.name}
                className={`px-4 py-2 sm:px-5 sm:py-2.5 md:px-6 md:py-3 bg-gradient-to-r ${skill.color} text-white rounded-full text-sm sm:text-base font-medium shadow-lg hover:shadow-2xl transform hover:scale-110 transition-all duration-300 cursor-pointer ${
                  isVisible ? 'animate-zoom-in' : 'opacity-0'
                }`}
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <span className="inline-block mr-1.5">{skill.icon}</span>
                <span>{skill.name}</span>
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
