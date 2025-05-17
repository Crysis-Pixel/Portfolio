import { Link } from 'react-router-dom';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

function About() {
  return (
    <div className="min-h-screen bg-gray-100 font-sans pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-extrabold text-center text-gray-900 mb-8">
          About Me
        </h2>
        <div className="flex flex-col md:flex-row gap-8">
          <div className="md:w-1/3 flex justify-center">
            <img
              src="/public/Uploads/ME.jpg"
              alt="Md. Sakibul Alam Patwary"
              className="w-64 h-84 rounded-full object-cover shadow-lg"
            />
          </div>
          <div className="md:w-2/3">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Who I Am</h3>
            <p className="text-gray-600 mb-6">
              Hi, I'm Md. Sakibul Alam Patwary, a passionate developer with expertise in web development, Artificial Intelligence, software applications, and game development. I love building innovative solutions that combine creativity and technology. My journey in programming has led me to work on diverse projects, from full-stack web applications to indie mobile games published on the Play Store.
            </p>
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">My Skills</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
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
                'Python'
              ].map((skill, index) => (
                <span
                  key={index}
                  className="inline-block bg-blue-100 text-blue-800 rounded-full px-4 py-2 text-sm font-medium"
                >
                  {skill}
                </span>
              ))}
            </div>
            <div className="mt-6 flex flex-col sm:flex-row gap-4">
              <Link
                to="/"
                className="inline-block px-6 py-3 bg-gray-900 text-white rounded-md hover:bg-gray-800"
              >
                Back to Projects
              </Link>
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;