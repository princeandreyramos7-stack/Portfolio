import React, { useState } from 'react';
import ProjectCard from '../components/ProjectCard';
import Modal from '../components/Modal';
import { FiGithub, FiExternalLink } from 'react-icons/fi';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  // Sample projects data
  const projects = [
    {
      id: 1,
      title: 'Courseware',
      description: 'Educational platform for managing courses and learning materials.',
      image: `${process.env.PUBLIC_URL}/project_pictures/courseware.png`,
      techStack: ['MySQL', 'PHP', 'React', 'Laravel', 'Tailwind CSS', 'Bootstrap'],
      github: '',
      demo: '',
      fullDescription: 'A comprehensive courseware management system designed to facilitate online learning. Features include course creation, content management, student enrollment, and progress tracking.',
    },
    {
      id: 2,
      title: 'LandCert',
      description: 'Land certification and document management system.',
      image: `${process.env.PUBLIC_URL}/project_pictures/cpdo.png`,
      techStack: ['MySQL', 'PHP', 'React', 'Laravel', 'Tailwind CSS', 'Bootstrap'],
      github: '',
      demo: '',
      fullDescription: 'A land certification system for managing property documents and certificates. Streamlines the process of land registration and certificate issuance.',
    },
    {
      id: 3,
      title: 'Piton Integrated Management System',
      description: 'Comprehensive management system for organizational operations.',
      image: `${process.env.PUBLIC_URL}/project_pictures/pims.png`,
      techStack: ['MySQL', 'PHP', 'React', 'Laravel', 'Tailwind CSS', 'Bootstrap'],
      github: '',
      demo: '',
      fullDescription: 'An integrated management system designed to handle various organizational operations including inventory management, reporting, and administrative tasks.',
    },
    {
      id: 4,
      title: 'ISAT e-TRACES',
      description: 'Electronic tracking and reporting system for ISAT.',
      image: `${process.env.PUBLIC_URL}/project_pictures/ISAT e-TRACES.jpg`,
      techStack: ['MySQL', 'PHP', 'React', 'Laravel', 'Tailwind CSS', 'Bootstrap'],
      github: '',
      demo: '',
      fullDescription: 'An electronic tracking and reporting system designed for ISAT to monitor and manage various processes efficiently with real-time data tracking and comprehensive reporting features.',
    },
  ];

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-dark-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-4">Projects</h2>
        <div className="w-20 h-1 bg-primary-light mx-auto mb-12" />

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onClick={() => setSelectedProject(project)}
            />
          ))}
        </div>

        {/* Project Detail Modal */}
        <Modal
          isOpen={!!selectedProject}
          onClose={() => setSelectedProject(null)}
        >
          {selectedProject && (
            <div>
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="w-full h-64 object-cover rounded-lg mb-6"
              />
              <h2 className="text-3xl font-bold mb-4">{selectedProject.title}</h2>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                {selectedProject.fullDescription}
              </p>

              {/* Tech Stack */}
              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-3">Tech Stack</h3>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.techStack.map((tech, index) => (
                    <span
                      key={index}
                      className="px-4 py-2 bg-primary-light/10 text-primary-light rounded-lg"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Links */}
              <div className="flex space-x-4">
                {selectedProject.github && (
                  <a
                    href={selectedProject.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 px-6 py-3 bg-gray-900 dark:bg-gray-700 text-white rounded-lg hover:bg-gray-800 transition-colors duration-200"
                  >
                    <FiGithub size={20} />
                    <span>View Code</span>
                  </a>
                )}
                {selectedProject.demo && (
                  <a
                    href={selectedProject.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 px-6 py-3 bg-primary-light text-white rounded-lg hover:bg-primary-dark transition-colors duration-200"
                  >
                    <FiExternalLink size={20} />
                    <span>Live Demo</span>
                  </a>
                )}
              </div>
            </div>
          )}
        </Modal>
      </div>
    </section>
  );
};

export default Projects;
