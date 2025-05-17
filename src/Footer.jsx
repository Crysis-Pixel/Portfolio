function Footer() {
    return (
      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p>© {new Date().getFullYear()} Your Name. All rights reserved.</p>
          <div className="mt-4 flex justify-center space-x-6">
            <a href="https://github.com/yourusername" className="hover:text-gray-300">
              GitHub
            </a>
            <a href="https://linkedin.com/in/yourusername" className="hover:text-gray-300">
              LinkedIn
            </a>
          </div>
        </div>
      </footer>
    );
  }
  
  export default Footer;