import React, { useState, useEffect } from 'react';
import './index.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import About from './components/About';
import Experience from './components/Experience';
import Project from './components/Project';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App = () => {
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State for toggling the menu

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 600);
    };

    window.addEventListener('resize', handleResize);
    handleResize(); // Initialize the state on component mount

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev); // Toggle the menu state
  };

  return (
    <>
      <header className="header">
        <a href="#" className="logo">
          <h2 className="text-gradient">
            {isSmallScreen ? 'Rimon' : 'Rimon Deb Nath'}{' '}
            {/* Conditional Rendering */}
          </h2>
        </a>
        {/* Menu icon */}
        <FontAwesomeIcon
          icon={faBars}
          id="menu-icon"
          onClick={toggleMenu} // Toggle menu on click
        />
        <ul className={`nav-link ${isMenuOpen ? 'active' : ''}`}>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#experience">Experience</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
        <a
          href="https://github.com/Rimonok12"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="visit-btn">Visit Github</button>
        </a>
      </header>

      {/* Other Components */}
      <About />
      <Experience />
      <Project />
      <Contact />
      <Footer />
    </>
  );
};

export default App;
