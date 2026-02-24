import React from 'react';
import useScrollAnimation from '../hooks/useScrollAnimation';

/**
 * Skill Card Component
 * Displays skill with icon and proficiency level
 */
const SkillCard = ({ skill, index }) => {
  const [ref, isVisible] = useScrollAnimation();

  return (
    <div
      ref={ref}
      className={`bg-white dark:bg-dark-card rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 ${
        isVisible ? 'animate-slide-up' : 'opacity-0'
      }`}
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      {/* Skill Icon */}
      <div className="flex items-center justify-center w-16 h-16 mb-4 bg-primary-light/10 rounded-lg">
        <span className="text-3xl">{skill.icon}</span>
      </div>

      {/* Skill Name */}
      <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
        {skill.name}
      </h3>
    </div>
  );
};

export default SkillCard;
