import { motion } from 'framer-motion';
import { useState } from 'react';

function Contact() {
  const [formStatus, setFormStatus] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

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

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const googleFormUrl = 'https://docs.google.com/forms/u/0/d/e/1FAIpQLSfprjptM-FHL-l3RS1LjqOqy8fh8wNGzFHwFjskGbNUeCVbMA/formResponse';
const formDataObj = new FormData();
    formDataObj.append('entry.2005620554', formData.name);
    formDataObj.append('entry.1045781291', formData.email);
    formDataObj.append('entry.1166974658', formData.message);

    try {
      const response = await fetch(googleFormUrl, {
        method: 'POST',
        body: formDataObj,
        mode: 'no-cors'
      });
      setFormStatus('success');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      setFormStatus('error');
    }
  };

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
        Contact Me
      </motion.h2>
      <motion.div
        className="max-w-2xl mx-auto bg-gray-700 rounded-lg shadow-md p-6"
        variants={itemVariants}
      >
        <form onSubmit={handleSubmit} className="space-y-4">
          <motion.div variants={itemVariants}>
            <label htmlFor="name" className="block text-sm font-medium text-gray-300">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 mt-1 bg-gray-800 text-white border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Your Name"
            />
          </motion.div>
          <motion.div variants={itemVariants}>
            <label htmlFor="email" className="block text-sm font-medium text-gray-300">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 mt-1 bg-gray-800 text-white border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="your.email@example.com"
            />
          </motion.div>
          <motion.div variants={itemVariants}>
            <label htmlFor="message" className="block text-sm font-medium text-gray-300">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={5}
              className="w-full px-4 py-2 mt-1 bg-gray-800 text-white border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Your Message"
            ></textarea>
          </motion.div>
          <motion.div variants={itemVariants}>
            <button
              type="submit"
              className="w-full px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-500 transition-colors duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Send Message
            </button>
          </motion.div>
        </form>
        {formStatus === 'success' && (
          <motion.p
            className="mt-4 text-green-400 text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            Message sent successfully!
          </motion.p>
        )}
        {formStatus === 'error' && (
          <motion.p
            className="mt-4 text-red-400 text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            Failed to send message. Please try again.
          </motion.p>
        )}
      </motion.div>
    </motion.div>
  );
}

export default Contact;