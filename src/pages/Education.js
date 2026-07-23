import React, { useState } from 'react';
import { FiAward, FiImage } from 'react-icons/fi';
import useScrollAnimation from '../hooks/useScrollAnimation';
import Modal from '../components/Modal';

const Education = () => {
  const [ref, isVisible] = useScrollAnimation();
  const [selectedCertificate, setSelectedCertificate] = useState(null);
  const [showGallery, setShowGallery] = useState(false);
  const [currentGallery, setCurrentGallery] = useState([]);

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
      image: '/certificates/device-configuration.jpg',
    },
    {
      name: 'Information Technology Specialist - Databases',
      image: '/certificates/databases.jpg',
    },
    {
      name: '15th ICT ROADSHOW: Database Application Development - Champion',
      image: '/certificates/roadshow.jpg',
      gallery: [
        '/compe-pictures/db1.jpg',
        '/compe-pictures/db2.jpg',
        '/compe-pictures/db3.jpg',
        '/compe-pictures/db4.jpg',
      ],
    },
    {
      name: 'TRON 2026 Cyber Defense Exercise Qualifiers - First Runner Up',
      image: '/certificates/tron.png',
      gallery: [
        '/compe-pictures/tron1.jpg',
        '/compe-pictures/tron2.jpg',
        '/compe-pictures/tron3.jpg',
        '/compe-pictures/tron4.jpg',
      ],
    },
    {
      name: '16th ICT ROADSHOW: Frontend Development Certification',
      image: '/certificates/frontend.png',
      gallery: [
        '/compe-pictures/frontend-programming1.jpg',
        '/compe-pictures/frontend-programming2.jpg',
        '/compe-pictures/frontend-programming3.jpg',
        '/compe-pictures/frontend-programming4.jpg',
      ],
    },
  ];

  return (
    <section id="education" className="py-16 sm:py-20 bg-white dark:bg-dark-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4">Education</h2>
        <div className="w-20 h-1 bg-primary-light mx-auto mb-8 sm:mb-12" />

        <div
          ref={ref}
          className={`${isVisible ? 'animate-fade-in' : 'opacity-0'}`}
        >
          {/* Education */}
          <div className="space-y-6 sm:space-y-8 mb-8 sm:mb-12">
            {education.map((edu, index) => (
              <div
                key={index}
                className="bg-gray-50 dark:bg-dark-card rounded-xl p-4 sm:p-6 shadow-lg"
              >
                <div className="flex items-start space-x-3 sm:space-x-4">
                  <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-primary-light/10 rounded-lg flex items-center justify-center">
                    <FiAward className="text-primary-light" size={20} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl sm:text-2xl font-bold mb-1">{edu.degree}</h3>
                    <p className="text-sm sm:text-base text-primary-light font-medium mb-2">
                      {edu.institution}
                    </p>
                    <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 mb-3 sm:mb-4">
                      {edu.period}
                    </p>
                    <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 mb-3 sm:mb-4">
                      {edu.description}
                    </p>
                    <ul className="space-y-1.5 sm:space-y-2">
                      {edu.achievements.map((achievement, i) => (
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

          {/* Certifications */}
          <div>
            <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-center">Certifications & Awards</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              {certifications.map((cert, index) => (
                <div
                  key={index}
                  onClick={() => setSelectedCertificate(cert)}
                  className="bg-gray-50 dark:bg-dark-card rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer transform hover:-translate-y-1"
                >
                  <div className="relative h-40 sm:h-48 bg-gradient-to-br from-primary-light to-primary-dark">
                    <img
                      src={cert.image}
                      alt={cert.name}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.target.style.display = 'none';
                      }}
                    />
                  </div>
                  <div className="p-3 sm:p-4 flex items-start space-x-2 sm:space-x-3">
                    <FiAward className="text-primary-light flex-shrink-0 mt-0.5 sm:mt-1" size={18} />
                    <span className="text-sm sm:text-base text-gray-900 dark:text-white font-medium">
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
                <div className="flex items-start space-x-2 sm:space-x-3 mb-4 sm:mb-6">
                  <FiAward className="text-primary-light flex-shrink-0 mt-1" size={24} />
                  <h2 className="text-xl sm:text-2xl font-bold">{selectedCertificate.name}</h2>
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
                <div className="mt-4 sm:mt-6 flex flex-col xs:flex-row flex-wrap gap-3 sm:gap-4 justify-center">
                  <a
                    href={selectedCertificate.image}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 sm:px-6 py-2.5 sm:py-3 text-sm sm:text-base bg-primary-light text-white rounded-lg hover:bg-primary-dark transition-colors duration-200 text-center"
                  >
                    View Full Size
                  </a>
                  {selectedCertificate.gallery && selectedCertificate.gallery.length > 0 && (
                    <button
                      onClick={() => {
                        setCurrentGallery(selectedCertificate.gallery);
                        setShowGallery(true);
                        setSelectedCertificate(null);
                      }}
                      className="flex items-center justify-center space-x-2 px-4 sm:px-6 py-2.5 sm:py-3 text-sm sm:text-base bg-gradient-to-r from-purple-500 to-purple-700 text-white rounded-lg hover:from-purple-600 hover:to-purple-800 transition-all duration-200 transform hover:scale-105"
                    >
                      <FiImage size={18} />
                      <span className="whitespace-nowrap">View Competition Photos</span>
                    </button>
                  )}
                </div>
              </div>
            )}
          </Modal>

          {/* Gallery Modal */}
          <Modal
            isOpen={showGallery}
            onClose={() => setShowGallery(false)}
          >
            <div>
              <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 flex items-center space-x-2 sm:space-x-3">
                <FiImage className="text-primary-light flex-shrink-0" size={24} />
                <span>Competition Photos</span>
              </h2>
              
              {/* Gallery Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                {currentGallery.map((photo, index) => (
                  <div
                    key={index}
                    className="relative bg-gray-100 dark:bg-dark-hover rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 cursor-pointer"
                    onClick={() => window.open(photo, '_blank')}
                  >
                    <img
                      src={photo}
                      alt={`Competition ${index + 1}`}
                      className="w-full h-auto object-cover"
                      onError={(e) => {
                        e.target.parentElement.innerHTML = `
                          <div class="flex items-center justify-center h-64 bg-gradient-to-br from-primary-light to-primary-dark">
                            <div class="text-center text-white p-8">
                              <svg class="w-16 h-16 mx-auto mb-4" fill="currentColor" viewBox="0 0 20 20">
                                <path fill-rule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clip-rule="evenodd"/>
                              </svg>
                              <p class="text-sm">Photo ${index + 1}</p>
                            </div>
                          </div>
                        `;
                      }}
                    />
                  </div>
                ))}
              </div>
            </div>
          </Modal>
        </div>
      </div>
    </section>
  );
};

export default Education;
