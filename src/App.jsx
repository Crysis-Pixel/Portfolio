import { useState } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Nav from './Nav';
import Home from './Home';
import Footer from './Footer';

function App() {
  const [activeSection, setActiveSection] = useState('home');
  const location = useLocation();

  return (
    <div className="min-h-screen bg-gray-900 text-white font-sans">
      <Nav activeSection={activeSection} setActiveSection={setActiveSection} />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route
            path="/"
            element={<Home activeSection={activeSection} setActiveSection={setActiveSection} />}
          />
        </Routes>
      </AnimatePresence>
      <Footer />
    </div>
  );
}

export default App;