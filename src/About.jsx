import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { motion } from 'framer-motion';
import profileImage from './assets/Uploads/ME.jpg';

function About({ setActiveSection }) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        duration: 0.8,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const education = [
    {
      institution: 'Manarat Dhaka International School & College',
      level: 'School and College',
    },
    {
      institution: 'North South University',
      level: 'B.Sc. in Computer Science and Engineering',
    },
  ];

  return (
    <motion.div
      className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false }}
    >
      <motion.h2
        className="text-4xl md:text-5xl font-extrabold text-center text-white mb-8"
        variants={itemVariants}
      >
        About Me
      </motion.h2>
      <motion.div className="flex flex-col md:flex-row gap-8" variants={itemVariants}>
        <div className="md:w-1/3 flex justify-center">
          <motion.img
            src={profileImage}
            alt="Md. Sakibul Alam Patwary"
            className="w-64 h-64 rounded-full object-cover shadow-lg"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          />
        </div>
        <div className="md:w-2/3">
          <motion.p className="text-gray-300 mb-6" variants={itemVariants}>
            Hi, I'm Md. Sakibul Alam Patwary, a passionate developer with expertise in web development,
            Artificial Intelligence, software applications, and game development. I love building
            innovative solutions that combine creativity and technology.
          </motion.p>
          <motion.h3 className="text-2xl font-semibold text-white mb-4" variants={itemVariants}>
            My Education
          </motion.h3>
          <motion.div className="space-y-4 mb-6" variants={itemVariants}>
            {education.map((edu, index) => (
              <motion.div
                key={index}
                className="p-4 bg-gray-700 rounded-lg"
                variants={itemVariants}
                whileInView="visible"
                viewport={{ once: false }}
              >
                <h4 className="text-lg font-medium text-white">{edu.institution}</h4>
                <p className="text-gray-300">{edu.level}</p>
              </motion.div>
            ))}
          </motion.div>
          <motion.h3 className="text-2xl font-semibold text-white mb-4" variants={itemVariants}>
            My Skills
          </motion.h3>
          <motion.div className="grid grid-cols-2 sm:grid-cols-3 gap-4" variants={itemVariants}>
            {[
              'React',
              'Node.js',
              'MongoDB',
              'Express JS',
              'Flask',
              'PHP',
              'Unity',
              'C#',
              'Java',
              'HTML/CSS',
              'JavaScript',
              'Python',
            ].map((skill, index) => (
              <motion.span
                key={index}
                className="inline-block bg-blue-600 text-white rounded-full px-4 py-2 text-sm font-medium"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.2 }}
                variants={itemVariants}
              >
                {skill}
              </motion.span>
            ))}
          </motion.div>
          <motion.div className="mt-6 flex flex-col sm:flex-row gap-4" variants={itemVariants}>
            <a
              href="https://github.com/Crysis-Pixel"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 bg-gray-800 text-white rounded-md hover:bg-gray-700"
            >
              <FaGithub className="mr-2" /> GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/sakibul-alam-patwary/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-500"
            >
              <FaLinkedin className="mr-2" /> LinkedIn
            </a>
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default About;