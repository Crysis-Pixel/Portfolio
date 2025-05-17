import { motion } from 'framer-motion';
import Projects from './Projects';
import About from './About';
import Contact from './Contact';

function Home({ activeSection, setActiveSection }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <motion.section
        id="home"
        className="min-h-screen flex items-center justify-center bg-gradient-to-r from-gray-800 to-gray-900"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="text-center px-4">
          <motion.h1
            className="text-5xl md:text-7xl font-bold mb-4"
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.6 }}
          >
            Md. Sakibul Alam Patwary
          </motion.h1>
          <motion.p
            className="text-xl md:text-2xl text-gray-300"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            Full-Stack Developer | AI Enthusiast | Game Developer
          </motion.p>
          <motion.a
            href="#projects"
            className="mt-6 inline-block px-8 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-500"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setActiveSection('all')}
          >
            View Projects
          </motion.a>
        </div>
      </motion.section>

      <motion.section
        id="projects"
        className="py-20 bg-gray-800"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: false }}
        transition={{ duration: 0.8 }}
      >
        <Projects activeSection={activeSection} />
      </motion.section>

      <motion.section
        id="about"
        className="py-20 bg-gray-900"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: false }}
        transition={{ duration: 0.8 }}
      >
        <About setActiveSection={setActiveSection} />
      </motion.section>

      <motion.section
        id="contact"
        className="py-20 bg-gray-800"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: false }}
        transition={{ duration: 0.8 }}
      >
        <Contact />
      </motion.section>
    </motion.div>
  );
}

export default Home;