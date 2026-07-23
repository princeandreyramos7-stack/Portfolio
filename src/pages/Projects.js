import React, { useState } from 'react';
import ProjectCard from '../components/ProjectCard';
import Modal from '../components/Modal';
import { FiGithub, FiExternalLink } from 'react-icons/fi';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [showQR, setShowQR] = useState(false);

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
    {
      id: 5,
      title: 'Maternal and Child Care Management System (Matcare)',
      description: 'Healthcare management system for maternal and child care services.',
      image: `${process.env.PUBLIC_URL}/project_pictures/matcare.png`,
      techStack: ['MySQL', 'PHP', 'React', 'Laravel', 'Tailwind CSS', 'Bootstrap'],
      github: '',
      demo: '',
      fullDescription: 'A comprehensive healthcare management system designed for maternal and child care services. Features include patient registration, medical records management, prenatal check-ups tracking, immunization scheduling, delivery and postnatal care management, and supplementation screening.',
    },
    {
      id: 6,
      title: 'ISU Studyhub',
      description: 'Mobile study platform for university students.',
      image: `${process.env.PUBLIC_URL}/project_pictures/studyhub.png`,
      techStack: ['Dart', 'Flutter'],
      github: '',
      demo: '',
      qrCode: `${process.env.PUBLIC_URL}/project_pictures/studyhub-qr.jpg`,
      fullDescription: 'A mobile application designed for ISU students to facilitate collaborative learning and resource sharing. Features include study groups, course materials management, assignment tracking, and peer-to-peer communication tools.',
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
                {selectedProject.qrCode && (
                  <button
                    onClick={() => setShowQR(!showQR)}
                    className="flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-purple-500 to-purple-700 text-white rounded-lg hover:from-purple-600 hover:to-purple-800 transition-all duration-200 transform hover:scale-105"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M3 4a1 1 0 011-1h3a1 1 0 011 1v3a1 1 0 01-1 1H4a1 1 0 01-1-1V4zm2 2V5h1v1H5zM3 13a1 1 0 011-1h3a1 1 0 011 1v3a1 1 0 01-1 1H4a1 1 0 01-1-1v-3zm2 2v-1h1v1H5zM13 3a1 1 0 00-1 1v3a1 1 0 001 1h3a1 1 0 001-1V4a1 1 0 00-1-1h-3zm1 2v1h1V5h-1z" clipRule="evenodd" />
                      <path d="M11 4a1 1 0 10-2 0v1a1 1 0 002 0V4zM10 7a1 1 0 011 1v1h2a1 1 0 110 2h-3a1 1 0 01-1-1V8a1 1 0 011-1zM16 9a1 1 0 100 2 1 1 0 000-2zM9 13a1 1 0 011-1h1a1 1 0 110 2v2a1 1 0 11-2 0v-3zM7 11a1 1 0 100-2H4a1 1 0 100 2h3zM17 13a1 1 0 01-1 1h-2a1 1 0 110-2h2a1 1 0 011 1zM16 17a1 1 0 100-2h-3a1 1 0 100 2h3z" />
                    </svg>
                    <span>{showQR ? 'Hide QR Code' : 'Show QR Code'}</span>
                  </button>
                )}
              </div>

              {/* QR Code Display */}
              {selectedProject.qrCode && showQR && (
                <div className="mt-6 p-6 bg-gray-50 dark:bg-dark-hover rounded-lg text-center animate-slide-down">
                  <h4 className="text-lg font-semibold mb-4">Scan to Visit App</h4>
                  <div className="inline-block p-4 bg-white rounded-lg shadow-lg">
                    <img
                      src={selectedProject.qrCode}
                      alt="QR Code"
                      className="w-64 h-64 mx-auto"
                      onError={(e) => {
                        e.target.parentElement.innerHTML = `
                          <div class="w-64 h-64 flex items-center justify-center bg-gray-100 dark:bg-gray-800 rounded-lg">
                            <p class="text-gray-500 dark:text-gray-400">QR Code not available</p>
                          </div>
                        `;
                      }}
                    />
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mt-4">
                    Scan with your mobile device to visit the app
                  </p>
                </div>
              )}
            </div>
          )}
        </Modal>
      </div>
    </section>
  );
};

export default Projects;
