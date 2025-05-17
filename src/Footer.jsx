import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

function Footer() {
  const contactLinks = [
    {
      name: 'GitHub',
      href: 'https://github.com/Crysis-Pixel',
      icon: <FaGithub size={20} />,
      color: 'bg-gray-800 hover:bg-gray-700',
    },
    {
      name: 'LinkedIn',
      href: 'https://www.linkedin.com/in/sakibul-alam-patwary/',
      icon: <FaLinkedin size={20} />,
      color: 'bg-blue-600 hover:bg-blue-500',
    },
    {
      name: 'Email',
      href: 'mailto:sakibul.patwary@northsouth.edu',
      icon: <FaEnvelope size={20} />,
      color: 'bg-gray-800 hover:bg-gray-700',
    },
  ];

  return (
    <motion.footer
      className="bg-gray-800 py-6"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center space-y-4">
          <div className="flex space-x-4">
            {contactLinks.map((link, index) => (
              <motion.a
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center px-4 py-2 ${link.color} text-white rounded-md transition-colors duration-300 text-sm`}
                whileHover={{ scale: 1.1, boxShadow: '0 4px 12px rgba(0,0,0,0.3)' }}
                whileTap={{ scale: 0.95 }}
              >
                {link.icon}
                <span className="ml-1">{link.name}</span>
              </motion.a>
            ))}
          </div>
          <p className="text-gray-300 text-sm">
            © 2025 Md. Sakibul Alam Patwary. All rights reserved.
          </p>
        </div>
      </div>
    </motion.footer>
  );
}

export default Footer;