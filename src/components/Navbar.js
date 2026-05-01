import React, { useState, useEffect } from "react";
import { FiMenu, FiX, FiSun, FiMoon } from "react-icons/fi";
import { useTheme } from "../context/ThemeContext";

// ✅ Move navLinks OUTSIDE to make it stable
const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Skills", href: "#skills" },
  { name: "Experience", href: "#experience" },
  { name: "Education", href: "#education" },
  { name: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const { theme, toggleTheme } = useTheme();

  // ✅ Scroll effect + active section detection
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      const sections = navLinks.map((link) => link.href.substring(1));
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;

          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []); // ✅ no dependency warning

  // Close mobile menu when link is clicked
  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/90 dark:bg-dark-card/90 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="#home" className="text-2xl font-bold text-primary-light">
              Prinsipe
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`relative text-gray-700 dark:text-gray-300 hover:text-primary-light dark:hover:text-primary-light transition-all duration-300 font-medium group ${
                  activeSection === link.href.substring(1)
                    ? "text-primary-light"
                    : ""
                }`}
              >
                {link.name}
                <span
                  className={`absolute -bottom-1 left-0 h-0.5 bg-primary-light transition-all duration-300 ${
                    activeSection === link.href.substring(1)
                      ? "w-full"
                      : "w-0 group-hover:w-full"
                  }`}
                />
              </a>
            ))}

            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg bg-gray-200 dark:bg-dark-hover hover:bg-gray-300 dark:hover:bg-gray-600 transition-all duration-300 transform hover:scale-110 hover:rotate-12"
              aria-label="Toggle theme"
            >
              {theme === "light" ? <FiMoon size={20} /> : <FiSun size={20} />}
            </button>
          </div>

          {/* Mobile Controls */}
          <div className="md:hidden flex items-center space-x-4">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg bg-gray-200 dark:bg-dark-hover transition-all duration-300 transform hover:scale-110"
              aria-label="Toggle theme"
            >
              {theme === "light" ? <FiMoon size={20} /> : <FiSun size={20} />}
            </button>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 dark:text-gray-300 transition-transform duration-300 transform hover:scale-110"
              aria-label="Toggle menu"
            >
              {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-500 ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="bg-white dark:bg-dark-card shadow-lg">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navLinks.map((link, index) => (
              <a
                key={link.name}
                href={link.href}
                onClick={handleLinkClick}
                className={`block px-3 py-2 rounded-md text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-dark-hover transition-all duration-300 transform hover:translate-x-2 ${
                  activeSection === link.href.substring(1)
                    ? "bg-primary-light/10 text-primary-light"
                    : ""
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
