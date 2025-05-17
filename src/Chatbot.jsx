import { useState } from 'react';
import { motion } from 'framer-motion';

function Chatbot({ setActiveSection }) {
  const [messages, setMessages] = useState([]);
  const [userInput, setUserInput] = useState('');

  const sendMessage = () => {
    if (!userInput.trim()) return;

    const userMessage = `You: ${userInput}`;
    setMessages((prev) => [...prev, userMessage]);

    let reply = "I don't understand.";
    if (userInput.toLowerCase().includes("hello")) reply = "Hi there!";
    if (userInput.toLowerCase().includes("your name")) reply = "I'm a simple chatbot.";

    setMessages((prev) => [...prev, `Bot: ${reply}`]);
    setUserInput('');
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') sendMessage();
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, duration: 0.8 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
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
        Chatbot
      </motion.h2>
      <motion.div
        className="bg-gray-700 rounded-lg shadow-md p-6 max-w-2xl mx-auto"
        variants={itemVariants}
      >
        <div className="h-96 overflow-y-auto mb-4 p-4 bg-gray-800 rounded-md">
          {messages.map((msg, index) => (
            <motion.div
              key={index}
              className="mb-2 text-gray-200"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3 }}
            >
              {msg}
            </motion.div>
          ))}
        </div>
        <motion.div className="flex gap-2" variants={itemVariants}>
          <input
            type="text"
            value={userInput}
            onChange={(e) => setUserInput(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Say something..."
            className="flex-1 px-4 py-2 bg-gray-800 text-white border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <motion.button
            onClick={sendMessage}
            className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-500"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Send
          </motion.button>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

export default Chatbot;