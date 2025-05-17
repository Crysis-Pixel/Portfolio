import { Link, useLocation } from 'react-router-dom';

function Nav({ activeSection, setActiveSection }) {
  const location = useLocation();
  const isAboutPage = location.pathname === '/about';

  const sections = [
    { id: 'all', name: 'All Projects' },
    { id: 'webApps', name: 'Web Apps' },
    { id: 'softwareApps', name: 'Software' },
    { id: 'videoGames', name: 'Games' },
    { id: 'aiProjects', name: 'AI Projects' }
  ];

  return (
    <nav className="bg-white shadow-md fixed w-full z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link
              to="/"
              onClick={() => setActiveSection('all')}
              className="text-2xl font-bold text-gray-900 hover:text-gray-700"
            >
              My Portfolio
            </Link>
          </div>
          <div className="flex items-center space-x-4">
            <Link
              to="/about"
              onClick={() => setActiveSection(null)}
              className={`px-3 py-2 rounded-md text-sm font-medium ${
                isAboutPage ? 'bg-gray-900 text-white' : 'text-gray-600 hover:bg-gray-200'
              }`}
            >
              About Me
            </Link>
            {sections.map((section) => (
              <Link
                key={section.id}
                to="/"
                onClick={() => setActiveSection(section.id)}
                className={`px-3 py-2 rounded-md text-sm font-medium ${
                  !isAboutPage && activeSection === section.id
                    ? 'bg-gray-900 text-white'
                    : 'text-gray-600 hover:bg-gray-200'
                }`}
              >
                {section.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Nav;