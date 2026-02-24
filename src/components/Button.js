import React from 'react';

/**
 * Reusable Button Component with enhanced animations
 * Supports different variants and sizes
 */
const Button = ({ 
  children, 
  onClick, 
  variant = 'primary', 
  size = 'md',
  className = '',
  ...props 
}) => {
  // Base styles with ripple effect
  const baseStyles = 'font-medium rounded-lg transition-all duration-300 transform hover:scale-105 active:scale-95 ripple shadow-md hover:shadow-xl relative overflow-hidden';
  
  // Variant styles
  const variants = {
    primary: 'bg-gradient-to-r from-primary-light to-primary-dark hover:from-primary-dark hover:to-primary-light text-white',
    secondary: 'bg-gray-200 dark:bg-dark-hover hover:bg-gray-300 dark:hover:bg-gray-600 text-gray-900 dark:text-gray-100',
    outline: 'border-2 border-primary-light text-primary-light hover:bg-primary-light hover:text-white hover:border-transparent',
  };

  // Size styles
  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  };

  return (
    <button
      onClick={onClick}
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className} group`}
      {...props}
    >
      <span className="relative z-10">{children}</span>
      <span className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
    </button>
  );
};

export default Button;
