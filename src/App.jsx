import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Nav from './Nav';
import Hero from './Hero';
import Projects from './Projects';
import Footer from './Footer';
import About from './About';

function App() {
  const [activeSection, setActiveSection] = useState('all');

  return (
    <div className="min-h-screen bg-gray-100 font-sans">
      <Nav activeSection={activeSection} setActiveSection={setActiveSection} />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <Projects activeSection={activeSection} />
            </>
          }
        />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;