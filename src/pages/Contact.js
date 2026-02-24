import React from 'react';
import { FiMail, FiMapPin } from 'react-icons/fi';
import useScrollAnimation from '../hooks/useScrollAnimation';

const Contact = () => {
  const [ref, isVisible] = useScrollAnimation();

  const contactInfo = [
    {
      icon: <FiMail size={24} />,
      title: 'Email',
      value: 'princeandreyramos7@gmail.com',
      link: 'mailto:princeandreyramos7@gmail.com',
    },
    {
      icon: <FiMapPin size={24} />,
      title: 'Location',
      value: 'Philippines',
    },
  ];

  return (
    <section id="contact" className="py-20 bg-white dark:bg-dark-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-4">Get In Touch</h2>
        <div className="w-20 h-1 bg-primary-light mx-auto mb-12" />

        <div
          ref={ref}
          className={`max-w-2xl mx-auto ${
            isVisible ? 'animate-fade-in' : 'opacity-0'
          }`}
        >
          {/* Contact Information */}
          <div>
            <h3 className="text-2xl font-bold mb-6 text-center">Contact Information</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-8 text-center">
              Feel free to reach out! I'm always open to discussing new projects,
              creative ideas, or opportunities to be part of your vision.
            </p>

            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-start space-x-4 justify-center">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary-light/10 rounded-lg flex items-center justify-center text-primary-light">
                    {info.icon}
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">{info.title}</h4>
                    {info.link ? (
                      <a
                        href={info.link}
                        className="text-gray-600 dark:text-gray-400 hover:text-primary-light transition-colors duration-200"
                      >
                        {info.value}
                      </a>
                    ) : (
                      <p className="text-gray-600 dark:text-gray-400">
                        {info.value}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
