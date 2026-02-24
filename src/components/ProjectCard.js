import React from 'react';
import { FiExternalLink, FiGithub } from 'react-icons/fi';
import useScrollAnimation from '../hooks/useScrollAnimation';

/**
 * Project Card Component
 * Displays project information with hover effects and animations
 */
const ProjectCard = ({ project, onClick }) => {
  const [ref, isVisible] = useScrollAnimation();

  return (
    <div
      ref={ref}
      className={`group relative bg-white dark:bg-dark-card rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 cursor-pointer card-lift glow-on-hover ${
        isVisible ? 'animate-zoom-in' : 'opacity-0'
      }`}
      onClick={onClick}
    >
      {/* Project Image */}
      <div className="relative h-48 overflow-hidden bg-gray-200 dark:bg-dark-hover">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover group-hover:scale-125 transition-transform duration-700"
          onError={(e) => {
            e.target.style.display = 'none';
            e.target.parentElement.innerHTML = `<div class="w-full h-full flex items-center justify-center bg-gradient-to-br from-primary-light to-primary-dark"><span class="text-white text-4xl font-bold">${project.title.charAt(0)}</span></div>`;
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end justify-center pb-4">
          <span className="text-white font-semibold text-sm transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
            Click to view details
          </span>
        </div>
      </div>

      {/* Project Content */}
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white group-hover:text-primary-light transition-colors duration-300">
          {project.title}
        </h3>
        <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-2">
          {project.description}
        </p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.techStack.map((tech, index) => (
            <span
              key={index}
              className="px-3 py-1 text-xs font-medium bg-primary-light/10 text-primary-light rounded-full transform hover:scale-110 transition-transform duration-300 cursor-pointer"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex space-x-4">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="flex items-center space-x-1 text-gray-600 dark:text-gray-400 hover:text-primary-light transition-all duration-300 transform hover:scale-110"
            >
              <FiGithub size={18} />
              <span className="text-sm">Code</span>
            </a>
          )}
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="flex items-center space-x-1 text-gray-600 dark:text-gray-400 hover:text-primary-light transition-all duration-300 transform hover:scale-110"
            >
              <FiExternalLink size={18} />
              <span className="text-sm">Demo</span>
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
