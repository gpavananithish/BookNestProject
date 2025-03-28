import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Footer from '../Componenets/Footer';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { BsFillMoonFill, BsFillSunFill } from 'react-icons/bs';

const Signup = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isDarkMode, setIsDarkMode] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const storedDarkMode = localStorage.getItem('darkMode');
    if (storedDarkMode) {
      setIsDarkMode(storedDarkMode === 'true');
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('darkMode', isDarkMode);
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let payload = { name, email, password };

    axios
      .post("http://localhost:4000/signup", payload)
      .then((result) => {
        alert('Account created');
        console.log(result);
        navigate('/login');
      })
      .catch((err) => {
        console.log(err);
        alert("Failed to create an account");
      });
  };

  let formHandle1 = (e) => {
    e.preventDefault();
    navigate("/login");
  };

  const darkModeStyles = {
    backgroundColor: '#102a33',
    color: 'white',
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
  };

  const lightModeStyles = {
    backgroundColor: '#f8f9fa',
    color: 'black',
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
  };

  const currentStyles = isDarkMode ? darkModeStyles : lightModeStyles;

  const navBarStyle = {
    backgroundColor: 'darkcyan',
    color: 'white',
    padding: '10px 0',
    marginBottom: '20px',
  };

  const footerStyle = {
    backgroundColor: 'darkcyan',
    color: 'white',
    padding: '20px 0',
    marginTop: '20px',
    position: 'relative',
    bottom: '0',
    width: '100%',
  };

  const buttonStyle = {
    backgroundColor: isDarkMode ? '#0e4452' : 'darkcyan',
    color: 'white',
    padding: '10px 20px',
    borderRadius: '5px',
    border: 'none',
    cursor: 'pointer',
    width: '100%',
  };

  const formStyle = {
    backgroundColor: isDarkMode ? '#133944' : 'white',
    color: isDarkMode ? 'white' : 'black',
    margin: '50px auto',
    maxWidth: '500px',
    padding: '30px',
    borderRadius: '10px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  };

  const inputStyle = {
    backgroundColor: isDarkMode ? '#104a5c' : 'white',
    color: isDarkMode ? 'white' : 'black',
    borderColor: isDarkMode ? '#104a5c' : '#ced4da',
    width: '100%',
    padding: '10px',
    marginBottom: '10px',
    borderRadius: '5px',
    border: '1px solid #ced4da',
    boxSizing: 'border-box',
  };

  const labelStyle = {
    display: 'block',
    marginBottom: '3px',
    fontWeight: 'bold',
    color: isDarkMode ? 'white' : 'black',
  };
  const contentStyle = {
    flexGrow: 1,
  };

  return (
    <div style={currentStyles}>
      <Navbar style={navBarStyle} variant="light" expand="lg">
        <Container>
          <Navbar.Brand href="/" style={{ color: 'white', fontWeight: 'bold' }}>BookStore</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="/" style={{ color: 'white' }}>Home</Nav.Link>
              <Nav.Link onClick={toggleDarkMode} style={{ color: 'white', fontSize: '1.5rem' }}>
                {isDarkMode ? <BsFillSunFill /> : <BsFillMoonFill />}
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <div style={contentStyle}>
        <div style={formStyle}>
          <h2 className="text-3xl font-extrabold text-center mb-4" style={{ color: isDarkMode ? 'white' : 'darkcyan' }}>
            Signup to user account
          </h2>
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="mb-2">
              <label htmlFor="name" style={labelStyle}>
                Name
              </label>
              <input
                name="name"
                type="text"
                autoComplete="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                style={inputStyle}
                placeholder="Name"
                required
              />
            </div>
            <div className="mb-2">
              <label htmlFor="email" style={labelStyle}>
                Email address
              </label>
              <input
                name="email"
                type="email"
                autoComplete="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                style={inputStyle}
                placeholder="Email address"
                required
              />
            </div>
            <div className="mb-2">
              <label htmlFor="password" style={labelStyle}>
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                style={inputStyle}
                placeholder="Password"
                required
              />
            </div>

            <div>
              <button type="submit" style={buttonStyle}>
                Signup
              </button>
            </div>

            <p className="mt-2 text-sm">
              Already have an account{' '}
              <button
                onClick={formHandle1}
                className="ml-2 hover:underline focus:outline-none focus:ring focus:border-indigo-300 transition-all duration-300"
                style={{ color: isDarkMode ? 'lightblue' : 'darkcyan' }}
              >
                Login
              </button>
            </p>
          </form>
        </div>
      </div>
      <Footer style={footerStyle} />
    </div>
  );
};

export default Signup;
