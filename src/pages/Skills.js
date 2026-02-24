import React from 'react';
import useScrollAnimation from '../hooks/useScrollAnimation';

const Skills = () => {
  const [ref, isVisible] = useScrollAnimation();

  // Skills data with icons and categories
  const skillCategories = [
    {
      category: 'Frontend',
      skills: [
        { name: 'HTML', icon: '🌐', color: 'from-orange-400 to-orange-600' },
        { name: 'CSS', icon: '🎨', color: 'from-blue-400 to-blue-600' },
        { name: 'JavaScript', icon: '🟨', color: 'from-yellow-400 to-yellow-600' },
        { name: 'React', icon: '⚛️', color: 'from-cyan-400 to-cyan-600' },
        { name: 'Bootstrap', icon: '🅱️', color: 'from-purple-400 to-purple-600' },
        { name: 'Tailwind CSS', icon: '💨', color: 'from-teal-400 to-teal-600' },
      ],
    },
    {
      category: 'Backend',
      skills: [
        { name: 'PHP', icon: '🐘', color: 'from-indigo-400 to-indigo-600' },
        { name: 'Laravel', icon: '🔺', color: 'from-red-400 to-red-600' },
        { name: 'Java', icon: '☕', color: 'from-amber-400 to-amber-600' },
      ],
    },
    {
      category: 'Database & Tools',
      skills: [
        { name: 'MySQL', icon: '🐬', color: 'from-blue-500 to-blue-700' },
        { name: 'Git', icon: '📦', color: 'from-orange-500 to-orange-700' },
      ],
    },
  ];

  return (
    <section id="skills" className="py-20 bg-white dark:bg-dark-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={ref}
          className={`${isVisible ? 'animate-fade-in' : 'opacity-0'}`}
        >
          <h2 className="text-4xl font-bold text-center mb-4">Skills & Technologies</h2>
          <div className="w-20 h-1 bg-primary-light mx-auto mb-4" />
          <p className="text-center text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto">
            Technologies and tools I use to bring ideas to life
          </p>

          {/* Skills by Category */}
          <div className="space-y-12">
            {skillCategories.map((category, categoryIndex) => (
              <div key={category.category}>
                <h3 className="text-2xl font-semibold text-center mb-6 text-gray-800 dark:text-gray-200">
                  {category.category}
                </h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
                  {category.skills.map((skill, index) => (
                    <div
                      key={skill.name}
                      className={`group relative bg-white dark:bg-dark-card rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 hover:scale-105 cursor-pointer ${
                        isVisible ? 'animate-slide-up' : 'opacity-0'
                      }`}
                      style={{
                        animationDelay: `${(categoryIndex * 6 + index) * 0.1}s`,
                      }}
                    >
                      {/* Gradient Background on Hover */}
                      <div className={`absolute inset-0 bg-gradient-to-br ${skill.color} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-500`} />
                      
                      {/* Icon Container */}
                      <div className="relative flex flex-col items-center space-y-3">
                        <div className={`w-20 h-20 flex items-center justify-center bg-gradient-to-br ${skill.color} rounded-xl shadow-lg transform group-hover:rotate-12 group-hover:scale-110 transition-all duration-500`}>
                          <span className="text-4xl filter drop-shadow-lg">{skill.icon}</span>
                        </div>

                        {/* Skill Name */}
                        <h3 className="text-base font-bold text-gray-900 dark:text-white text-center group-hover:text-primary-light transition-colors duration-300">
                          {skill.name}
                        </h3>
                      </div>

                      {/* Animated Border */}
                      <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-primary-light transition-all duration-500" />
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* All Skills Summary */}
          <div className="mt-16 text-center">
            <div className="inline-flex flex-wrap gap-3 justify-center max-w-4xl">
              {skillCategories.flatMap(cat => cat.skills).map((skill, index) => (
                <span
                  key={skill.name}
                  className={`px-4 py-2 bg-gradient-to-r ${skill.color} text-white rounded-full text-sm font-medium shadow-md hover:shadow-xl transform hover:scale-110 transition-all duration-300 ${
                    isVisible ? 'animate-fade-in' : 'opacity-0'
                  }`}
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  {skill.icon} {skill.name}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
