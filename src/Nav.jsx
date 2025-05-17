import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaBars, FaTimes } from 'react-icons/fa';

function Nav({ activeSection, setActiveSection }) {
  const [isOpen, setIsOpen] = useState(false);

  const sections = [
    { id: 'home', name: 'Home', href: '#home' },
    { id: 'projects', name: 'Projects', href: '#projects', section: 'all' },
    { id: 'about', name: 'About', href: '#about', section: 'all' },
    { id: 'contact', name: 'Contact', href: '#contact', section: 'all' },
  ];

  const navVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const mobileMenuVariants = {
    closed: { opacity: 0, x: '100%' },
    open: { opacity: 1, x: 0, transition: { duration: 0.3 } },
  };

  const handleSectionClick = (sectionId, sectionValue, href) => {
    setActiveSection(sectionValue || sectionId);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      window.scrollBy(0, -80);
    }
    setIsOpen(false);
  };

  return (
    <motion.nav
      className="bg-gray-800 fixed w-full z-10 shadow-md"
      initial="hidden"
      animate="visible"
      variants={navVariants}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link
              to="/"
              onClick={() => setActiveSection('home')}
              className="text-2xl font-bold text-white hover:text-gray-300"
            >
              Portfolio
            </Link>
          </div>
          <div className="hidden md:flex items-center space-x-4">
            {sections.map((section) => (
              <a
                key={section.id}
                href={section.href}
                onClick={() => handleSectionClick(section.id, section.section, section.href)}
                className={`px-3 py-2 rounded-md text-sm font-medium ${
                  activeSection === section.id
                    ? 'bg-blue-600 text-white'
                    : 'text-gray-300 hover:bg-gray-700 hover:text-white'
                }`}
              >
                {section.name}
              </a>
            ))}
          </div>
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-white">
              {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </div>
      </div>
      <motion.div
        className="md:hidden bg-gray-800"
        initial="closed"
        animate={isOpen ? 'open' : 'closed'}
        variants={mobileMenuVariants}
      >
        <div className="px-2 pt-2 pb-3 space-y-1">
          {sections.map((section) => (
            <a
              key={section.id}
              href={section.href}
              onClick={() => handleSectionClick(section.id, section.section, section.href)}
              className={`block px-3 py-2 rounded-md text-base font-medium ${
                activeSection === section.id
                  ? 'bg-blue-600 text-white'
                  : 'text-gray-300 hover:bg-gray-700 hover:text-white'
              }`}
            >
              {section.name}
            </a>
          ))}
        </div>
      </motion.div>
    </motion.nav>
  );
}

export default Nav;