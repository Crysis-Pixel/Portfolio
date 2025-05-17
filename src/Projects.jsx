import { useState } from 'react';
import { FaGithub, FaExternalLinkAlt, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { motion } from 'framer-motion';
import SmartFreelanceHub from './assets/Uploads/Smart Freelance Hub.jpeg';
import SmartFreelanceHub2 from './assets/Uploads/Smart Freelance Hub2.PNG';
import SmartFreelanceHub3 from './assets/Uploads/Smart Freelance Hub3.PNG';
import AdleadVid from './assets/Uploads/Adlead Vid.mp4';
import WSneakersVid from './assets/Uploads/WSneakers.mp4';
import Cricket from './assets/Uploads/Cricket.PNG';
import CricketGameplay from './assets/Uploads/Cricket Gameplay.PNG';
import Chess from './assets/Uploads/Chess.PNG';
import Chess1 from './assets/Uploads/Chess1.PNG';
import CreditCard from './assets/Uploads/Credit Card.jpeg';
import CSE465 from './assets/Uploads/CSE465.png';
import CSE465_1 from './assets/Uploads/CSE465 1.png';
import CSE465_2 from './assets/Uploads/CSE465 2.png';

const projects = {
  webApps: [
    {
      title: 'Smart Freelance Hub',
      description: 'A full-stack online store with AI powered recommendation system and payment integration',
      tech: ['React', 'Express JS', 'MongoDB', 'Flask'],
      github: 'https://github.com/yourusername/ecommerce',
      live: 'https://your-ecommerce-demo.com',
      media: [
        { src: SmartFreelanceHub, type: 'image' },
        { src: SmartFreelanceHub2, type: 'image' },
        { src: SmartFreelanceHub3, type: 'image' },
      ],
    },
    {
      title: 'Adlead',
      description: 'Static Website for an Online Store Company with hosting',
      tech: ['React'],
      github: '',
      live: 'https://adlead.site/',
      media: [{ src: AdleadVid, type: 'video' }],
    },
    {
      title: 'WSneakers',
      description: 'Full website with raw php, html and css',
      tech: ['PHP', 'phpMyAdmin', 'html', 'css'],
      github: '',
      live: '',
      media: [{ src: WSneakersVid, type: 'video' }],
    },
  ],
  softwareApps: [],
  videoGames: [
    {
      title: 'Cricket Game',
      description: 'Indie Mobile Cricket Game published in playstore',
      tech: ['Unity', 'C#'],
      github: '',
      live: 'https://play.google.com/store/apps/details?id=com.BelfordBlaze.SuperCricketBatsBlades',
      media: [
        { src: Cricket, type: 'image' },
        { src: CricketGameplay, type: 'image' },
      ],
    },
    {
      title: 'Chess Game',
      description: 'A self made Chess Game in Java without using any third party engine',
      tech: ['Java'],
      github: '',
      live: '',
      media: [
        { src: Chess, type: 'image' },
        { src: Chess1, type: 'image' },
      ],
    },
  ],
  aiProjects: [
    {
      title: 'Credit Card Fraud Detection',
      description: 'Supervised Machine learning problem where algorithms like decision tree, random forest are used',
      tech: ['Python', 'TensorFlow', 'MatplotLib', 'Pandas', 'Scikit-learn'],
      github: 'https://github.com/Crysis-Pixel/CSE445-Credit-Card-Fraud-Detection',
      live: '',
      media: [{ src: CreditCard, type: 'image' }],
    },
    {
      title: 'Classifying Dim Small-Scale Targets in Low-Visibility Imagery Using Convolutional Neural Networks',
      description:
        'Several existing CNN architectures are applied and ResNeXt50 among them achieved the highest accuracy of 99.96%. Additionally, we developed a custom lightweight CNN model tailored for this task, which attained a strong accuracy of 99.25% with significant lower number of parameters.',
      tech: ['Python', 'PyTorch', 'CNN', 'MatplotLib', 'Pandas', 'Scikit-learn'],
      github: '',
      live: '',
      media: [
        { src: CSE465, type: 'image' },
        { src: CSE465_1, type: 'image' },
        { src: CSE465_2, type: 'image' },
      ],
    },
  ],
};

function Projects({ activeSection }) {
  const [carouselIndices, setCarouselIndices] = useState({});

  const sections = [
    { id: 'all', name: 'All Projects' },
    { id: 'webApps', name: 'Web Apps' },
    { id: 'softwareApps', name: 'Software' },
    { id: 'videoGames', name: 'Games' },
    { id: 'aiProjects', name: 'AI Projects' },
  ];

  const getFilteredProjects = () => {
    const validSections = ['all', 'webApps', 'softwareApps', 'videoGames', 'aiProjects'];
    const effectiveSection = validSections.includes(activeSection) ? activeSection : 'all';
    if (effectiveSection === 'all') {
      return [
        ...projects.webApps,
        ...projects.softwareApps,
        ...projects.videoGames,
        ...projects.aiProjects,
      ];
    }
    return projects[effectiveSection] || [];
  };

  const handlePrev = (projectIndex) => {
    setCarouselIndices((prev) => {
      const currentIndex = prev[projectIndex] || 0;
      const mediaLength = getFilteredProjects()[projectIndex].media.length;
      return {
        ...prev,
        [projectIndex]: (currentIndex - 1 + mediaLength) % mediaLength,
      };
    });
  };

  const handleNext = (projectIndex) => {
    setCarouselIndices((prev) => {
      const currentIndex = prev[projectIndex] || 0;
      const mediaLength = getFilteredProjects()[projectIndex].media.length;
      return {
        ...prev,
        [projectIndex]: (currentIndex + 1) % mediaLength,
      };
    });
  };

  const renderMedia = (media, projectIndex) => {
    const currentIndex = carouselIndices[projectIndex] || 0;
    const { src, type } = media[currentIndex];
    return (
      <div className="relative w-full h-48">
        {type === 'video' ? (
          <video
            src={src}
            className="w-full h-48 object-cover rounded-t-lg"
            controls
            muted
            autoPlay
            loop
          />
        ) : (
          <img
            src={src}
            alt="Project media"
            className="w-full h-48 object-cover rounded-t-lg"
          />
        )}
        {media.length > 1 && (
          <>
            {currentIndex > 0 && (
              <button
                onClick={() => handlePrev(projectIndex)}
                className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-gray-900 bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75"
              >
                <FaChevronLeft />
              </button>
            )}
            {currentIndex < media.length - 1 && (
              <button
                onClick={() => handleNext(projectIndex)}
                className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-gray-900 bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75"
              >
                <FaChevronRight />
              </button>
            )}
          </>
        )}
      </div>
    );
  };

  return (
    <motion.div
      className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: false }}
      transition={{ duration: 0.8 }}
    >
      <motion.h3
        className="text-3xl font-bold text-white mb-8 text-center"
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: false }}
        transition={{ duration: 0.6 }}
      >
        {sections.find((s) => s.id === (activeSection === 'projects' ? 'all' : activeSection))?.name || 'Projects'}
      </motion.h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {getFilteredProjects().map((project, index) => (
          <motion.div
            key={index}
            className="bg-gray-700 rounded-lg shadow-md overflow-hidden"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ scale: 1.03, boxShadow: '0 10px 20px rgba(0,0,0,0.3)' }}
          >
            {renderMedia(project.media, index)}
            <div className="p-6">
              <h4 className="text-xl font-semibold text-white">{project.title}</h4>
              <p className="mt-2 text-gray-300">{project.description}</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="inline-block bg-gray-600 rounded-full px-3 py-1 text-sm text-gray-200"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="mt-4 flex space-x-4">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-blue-500"
                  >
                    <FaGithub size={24} />
                  </a>
                )}
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-blue-500"
                  >
                    <FaExternalLinkAlt size={24} />
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}

export default Projects;