import React, { useEffect } from 'react';
import { FiX } from 'react-icons/fi';

/**
 * Modal Component for displaying detailed content
 * Includes backdrop, close button, and animations
 */
const Modal = ({ isOpen, onClose, children }) => {
  // Close modal on ESC key press
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') onClose();
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden'; // Prevent background scroll
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 animate-fade-in">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/70 backdrop-blur-sm transition-opacity duration-300"
        onClick={onClose}
      />

      {/* Modal Content */}
      <div className="relative bg-white dark:bg-dark-card rounded-xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto animate-scale-in transform transition-all duration-300">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="sticky top-2 sm:top-4 right-2 sm:right-4 float-right p-1.5 sm:p-2 rounded-lg bg-gray-200 dark:bg-dark-hover hover:bg-gray-300 dark:hover:bg-gray-600 transition-all duration-300 transform hover:scale-110 hover:rotate-90 ripple z-20"
          aria-label="Close modal"
        >
          <FiX size={20} className="sm:w-6 sm:h-6" />
        </button>

        {/* Modal Body */}
        <div className="p-4 sm:p-6 md:p-8 clear-both">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Modal;
