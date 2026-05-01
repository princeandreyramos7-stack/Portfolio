import React, { useState } from 'react';
import { FiAward } from 'react-icons/fi';
import useScrollAnimation from '../hooks/useScrollAnimation';
import Modal from '../components/Modal';

const Education = () => {
  const [ref, isVisible] = useScrollAnimation();
  const [selectedCertificate, setSelectedCertificate] = useState(null);

  const education = [
    {
      degree: 'Bachelor of Science in Information Technology',
      institution: 'Major in Web and Mobile Application Development',
      period: 'Present',
      description: 'Focused on web and mobile application development, database management, and modern programming technologies.',
      achievements: [
        'Active participation in ICT competitions',
        'Multiple competition awards and recognitions',
        'Hands-on experience with client projects',
        'Member of Philippine Information Technology of the North (PITON)',
      ],
    },
  ];

  const certifications = [
    {
      name: 'Information Technology Specialist - Device Configuration and Management',
      image: `${process.env.PUBLIC_URL}/certificates/device-configuration.jpg`,
    },
    {
      name: 'Information Technology Specialist - Databases',
      image: `${process.env.PUBLIC_URL}/certificates/databases.jpg`,
    },
    {
      name: '15th ICT ROADSHOW: Database Application Development - Champion',
      image: `${process.env.PUBLIC_URL}/certificates/roadshow.jpg`,
    },
    {
      name: 'TRON 2026 Cyber Defense Exercise Qualifiers - First Runner Up',
      image: `${process.env.PUBLIC_URL}/certificates/tron.jpg`,
    },
    {
      name: '16th ICT ROADSHOW: Frontend Development Certification',
      image: `${process.env.PUBLIC_URL}/certificates/frontend.png`,
    },
  ];

  return (
    <section id="education" className="py-20 bg-white dark:bg-dark-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-4">Education</h2>
        <div className="w-20 h-1 bg-primary-light mx-auto mb-12" />

        <div
          ref={ref}
          className={`${isVisible ? 'animate-fade-in' : 'opacity-0'}`}
        >
          {/* Education */}
          <div className="space-y-8 mb-12">
            {education.map((edu, index) => (
              <div
                key={index}
                className="bg-gray-50 dark:bg-dark-card rounded-xl p-6 shadow-lg"
              >
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary-light/10 rounded-lg flex items-center justify-center">
                    <FiAward className="text-primary-light" size={24} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-1">{edu.degree}</h3>
                    <p className="text-primary-light font-medium mb-2">
                      {edu.institution}
                    </p>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
                      {edu.period}
                    </p>
                    <p className="text-gray-600 dark:text-gray-400 mb-4">
                      {edu.description}
                    </p>
                    <ul className="space-y-2">
                      {edu.achievements.map((achievement, i) => (
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

          {/* Certifications */}
          <div>
            <h3 className="text-2xl font-bold mb-6 text-center">Certifications & Awards</h3>
            <div className="grid md:grid-cols-2 gap-6">
              {certifications.map((cert, index) => (
                <div
                  key={index}
                  onClick={() => setSelectedCertificate(cert)}
                  className="bg-gray-50 dark:bg-dark-card rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer transform hover:-translate-y-1"
                >
                  <div className="relative h-48 bg-gradient-to-br from-primary-light to-primary-dark">
                    <img
                      src={cert.image}
                      alt={cert.name}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.target.style.display = 'none';
                      }}
                    />
                  </div>
                  <div className="p-4 flex items-start space-x-3">
                    <FiAward className="text-primary-light flex-shrink-0 mt-1" size={20} />
                    <span className="text-gray-900 dark:text-white font-medium">
                      {cert.name}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Certificate Modal */}
          <Modal
            isOpen={!!selectedCertificate}
            onClose={() => setSelectedCertificate(null)}
          >
            {selectedCertificate && (
              <div>
                <div className="flex items-center space-x-3 mb-6">
                  <FiAward className="text-primary-light" size={32} />
                  <h2 className="text-2xl font-bold">{selectedCertificate.name}</h2>
                </div>
                
                {/* Full Certificate Image */}
                <div className="relative bg-gray-100 dark:bg-dark-hover rounded-lg overflow-hidden">
                  <img
                    src={selectedCertificate.image}
                    alt={selectedCertificate.name}
                    className="w-full h-auto max-h-[70vh] object-contain"
                    onError={(e) => {
                      e.target.parentElement.innerHTML = `
                        <div class="flex items-center justify-center h-64 bg-gradient-to-br from-primary-light to-primary-dark">
                          <div class="text-center text-white p-8">
                            <svg class="w-16 h-16 mx-auto mb-4" fill="currentColor" viewBox="0 0 20 20">
                              <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"/>
                              <path fill-rule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm9.707 5.707a1 1 0 00-1.414-1.414L9 12.586l-1.293-1.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
                            </svg>
                            <p class="text-lg font-semibold">Certificate Image</p>
                          </div>
                        </div>
                      `;
                    }}
                  />
                </div>

                {/* Download/View Options */}
                <div className="mt-6 flex justify-center">
                  <a
                    href={selectedCertificate.image}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3 bg-primary-light text-white rounded-lg hover:bg-primary-dark transition-colors duration-200"
                  >
                    View Full Size
                  </a>
                </div>
              </div>
            )}
          </Modal>
        </div>
      </div>
    </section>
  );
};

export default Education;
