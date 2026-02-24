import React from 'react';
import { FiGithub, FiLinkedin, FiFacebook, FiInstagram, FiMail } from 'react-icons/fi';

const Footer = () => {
  const socialLinks = [
    { icon: FiFacebook, href: 'https://www.facebook.com/ramosprinsandrei31/', label: 'Facebook' },
    { icon: FiInstagram, href: 'https://www.instagram.com/itz_prinsipe', label: 'Instagram' },
    { icon: FiMail, href: 'mailto:princeandreyramos7@gmail.com', label: 'Email' },
  ];

  return (
    <footer className="bg-gray-100 dark:bg-dark-card py-8 mt-20 transition-all duration-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center space-y-4">
          {/* Social Links */}
          <div className="flex space-x-6 animate-fade-in">
            {socialLinks.map((social, index) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-400 hover:text-primary-light dark:hover:text-primary-light transition-all duration-300 transform hover:scale-125 hover:-translate-y-1 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
                aria-label={social.label}
              >
                <social.icon size={24} />
              </a>
            ))}
          </div>

          {/* Copyright */}
          <p className="text-gray-600 dark:text-gray-400 text-sm animate-fade-in-up stagger-3">
            © {new Date().getFullYear()} Prince Andrey A. Ramos. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
