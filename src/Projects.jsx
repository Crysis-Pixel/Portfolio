import { useState } from 'react';
import { FaGithub, FaExternalLinkAlt, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const projects = {
  webApps: [
    {
      title: "Smart Freelance Hub",
      description: "A full-stack online store with payment integration",
      tech: ["React", "Express JS", "MongoDB", "Flask"],
      github: "https://github.com/yourusername/ecommerce",
      live: "https://your-ecommerce-demo.com",
      media: [
        { src: "/public/Uploads/Smart Freelance Hub.jpeg", type: "image" },
        { src: "/public/Uploads/Smart Freelance Hub2.PNG", type: "image" },
        { src: "/public/Uploads/Smart Freelance Hub3.PNG", type: "image" }
      ]
    },
    {
      title: "Adlead",
      description: "Static Website for an Online Store Company with hosting",
      tech: ["React"],
      github: "",
      live: "https://adlead.site/",
      media: [
        { src: "/public/Uploads/Adlead Vid.mp4", type: "video" },
        // { src: "/public/Uploads/Adlead Screenshot.png", type: "image" }
      ]
    },
    {
      title: "WSneakers",
      description: "Full website with raw php, html and css",
      tech: ["PHP", "phpMyAdmin", "html", "css"],
      github: "",
      live: "",
      media: [
        { src: "/public/Uploads/WSneakers.mp4", type: "video" },
        // { src: "/public/Uploads/WSneakers2.jpg", type: "image" }
      ]
    }
  ],
  softwareApps: [],
  videoGames: [
    {
      title: "Cricket Game",
      description: "Indie Mobile Cricket Game published in playstore",
      tech: ["Unity", "C#"],
      github: "",
      live: "https://play.google.com/store/apps/details?id=com.BelfordBlaze.SuperCricketBatsBlades",
      media: [
        { src: "/public/Uploads/Cricket.PNG", type: "image" },
        { src: "/public/Uploads/Cricket Gameplay.PNG", type: "image" }
      ]
    },
    {
      title: "Chess Game",
      description: "A self made Chess Game in Java without using any third party engine",
      tech: ["Java"],
      github: "",
      live: "",
      media: [
        { src: "/public/Uploads/Chess.PNG", type: "image" },
        { src: "/public/Uploads/Chess1.PNG", type: "image" }
      ]
    }
  ],
  aiProjects: [
    {
      title: "Credit Card Fraud Detection",
      description: "Supervised Machine learning problem where algorithms like decision tree, random forest are used",
      tech: ["Python", "TensorFlow", "MatplotLib", "Pandas", "Scikit-learn"],
      github: "https://github.com/Crysis-Pixel/CSE445-Credit-Card-Fraud-Detection",
      live: "",
      media: [
        { src: "/public/Uploads/Credit Card.jpeg", type: "image" },
        // { src: "/Uploads/AI Chatbot Demo.mp4", type: "video" }
      ]
    },
    {
      title: "Classifying Dim Small-Scale Targets in Low-Visibility Imagery Using Convolutional Neural Networks",
      description: "Several existing CNN architectures are applied and ResNeXt50 among them achieved the highest accuracy of 99.96%. Additionally, we developed a custom lightweight CNN model tailored for this task, which attained a strong accuracy of 99.25% with significant lower number of parameters. To ensure the interpretability, Explainable AI (particularly LIME) was employed to analyze the model’s predictions.",
      tech: ["Python", "PyTorch", "CNN", "MatplotLib", "Pandas", "Scikit-learn"],
      github: "",
      live: "",
      media: [
        { src: "/public/Uploads/CSE465.png", type: "image" },
        { src: "/public/Uploads/CSE465 1.png", type: "image" },
        { src: "/public/Uploads/CSE465 2.png", type: "image" }
      ]
    }
  ]
};

function Projects({ activeSection }) {
  const [carouselIndices, setCarouselIndices] = useState({});

  const sections = [
    { id: 'all', name: 'All Projects' },
    { id: 'webApps', name: 'Web Apps' },
    { id: 'softwareApps', name: 'Software' },
    { id: 'videoGames', name: 'Games' },
    { id: 'aiProjects', name: 'AI Projects' }
  ];

  const getFilteredProjects = () => {
    if (activeSection === 'all') {
      return [
        ...projects.webApps,
        ...projects.softwareApps,
        ...projects.videoGames,
        ...projects.aiProjects
      ];
    }
    return projects[activeSection] || [];
  };

  const handlePrev = (projectIndex) => {
    setCarouselIndices((prev) => {
      const currentIndex = prev[projectIndex] || 0;
      const mediaLength = getFilteredProjects()[projectIndex].media.length;
      return {
        ...prev,
        [projectIndex]: (currentIndex - 1 + mediaLength) % mediaLength
      };
    });
  };

  const handleNext = (projectIndex) => {
    setCarouselIndices((prev) => {
      const currentIndex = prev[projectIndex] || 0;
      const mediaLength = getFilteredProjects()[projectIndex].media.length;
      return {
        ...prev,
        [projectIndex]: (currentIndex + 1) % mediaLength
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
            className="w-full h-48 object-cover"
            controls
            muted
            autoPlay
            loop
          />
        ) : (
          <img
            src={src}
            alt="Project media"
            className="w-full h-48 object-cover"
          />
        )}
        {media.length > 1 && (
          <>
            {currentIndex > 0 && (
              <button
                onClick={() => handlePrev(projectIndex)}
                className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full"
              >
                <FaChevronLeft />
              </button>
            )}
            {currentIndex < media.length - 1 && (
              <button
                onClick={() => handleNext(projectIndex)}
                className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full"
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
    <main className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h3 className="text-3xl font-bold text-gray-900 mb-8">
          {sections.find((s) => s.id === activeSection)?.name}
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {getFilteredProjects().map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              {renderMedia(project.media, index)}
              <div className="p-6">
                <h4 className="text-xl font-semibold text-gray-900">{project.title}</h4>
                <p className="mt-2 text-gray-600">{project.description}</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm text-gray-700"
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
                      className="text-gray-600 hover:text-gray-900"
                    >
                      <FaGithub size={24} />
                    </a>
                  )}
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 hover:text-gray-900"
                    >
                      <FaExternalLinkAlt size={24} />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}

export default Projects;