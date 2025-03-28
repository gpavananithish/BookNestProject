// src/Componenets/Home.jsx

import React, { useState, useEffect } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link, useLocation } from "react-router-dom";
import HomeContent from './HomeContent';
import Footer from './Footer';
import { FaMoon, FaSun } from 'react-icons/fa'; // Import icons

const Home = () => {
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  // State to manage the mode (light/dark)
  const [darkMode, setDarkMode] = useState(() => {
    // Check local storage for the user's preference
    const storedMode = localStorage.getItem('darkMode');
    return storedMode ? JSON.parse(storedMode) : false; // Default to light mode
  });

  // Function to toggle the mode
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  // Update local storage whenever the mode changes
  useEffect(() => {
    localStorage.setItem('darkMode', JSON.stringify(darkMode));
    // Apply the mode to the body element
    if (darkMode) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  }, [darkMode]);

  return (
    <div className={darkMode ? 'dark-mode' : ''}> {/* Apply dark-mode class conditionally */}
      <Navbar bg="" variant="dark" expand="lg" style={{ backgroundColor: "darkcyan", borderRadius: "10px" }}>
        <Container>
          <Navbar.Brand><Link to='/' style={{ color: 'white', textDecoration: "none" }}>BookNest</Link></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <Link to="/login" style={{ padding: "10px", color: "white", textDecoration: "none" }}>User</Link>
              <Link to="/slogin" style={{ padding: "10px", color: "white", textDecoration: "none" }}>Seller</Link>
              <Link to="/alogin" style={{ padding: "10px", color: "white", textDecoration: "none" }}>Admin</Link>
              {/* Mode toggle button */}
              <button
                onClick={toggleDarkMode}
                style={{
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  color: 'white',
                  fontSize: '20px',
                  padding: "10px"
                }}
              >
                {darkMode ? <FaSun /> : <FaMoon />}
              </button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      {isHomePage && <HomeContent />}
      {isHomePage && <Footer />}

    </div>
  );
};

export default Home;
