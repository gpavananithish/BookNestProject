import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Footer from '../Componenets/Footer';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { BsFillMoonFill, BsFillSunFill } from 'react-icons/bs';

const Alogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isDarkMode, setIsDarkMode] = useState(false);
  const navigate = useNavigate();

  axios.defaults.withCredentials = true;

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
    let payload = { email, password };
    axios
      .post("http://localhost:4000/alogin", payload)
      .then((res) => {
        console.log("login: " + res.data.Status);
        if (res.data.Status === "Success") {
          console.log(res.data.user);
          localStorage.setItem('user', JSON.stringify(res.data.user));
          navigate('/ahome');
          alert("login successful");
        } else {
          alert("wrong credentials");
        }
      })
      .catch((err) => console.log(err));
  };

  let formHandle1 = (e) => {
    e.preventDefault();
    navigate("/asignup");
  };

  const darkModeStyles = {
    backgroundColor: '#102a33',
    color: 'white',
  };

  const lightModeStyles = {
    backgroundColor: '#f8f9fa',
    color: 'black',
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
    borderColor: isDarkMode ? '#0e4452' : 'darkcyan',
  };

  const formStyle = {
    backgroundColor: isDarkMode ? '#133944' : 'white',
    color: isDarkMode ? 'white' : 'black',
    margin: '100px',
  };

  const inputStyle = {
    backgroundColor: isDarkMode ? '#104a5c' : 'white',
    color: isDarkMode ? 'white' : 'black',
    borderColor: isDarkMode ? '#104a5c' : '#ced4da',
  };

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
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

      <div className="flex-grow-1 d-flex align-items-center justify-content-center" style={currentStyles}>
        <div className="relative max-w-md w-full p-8 rounded-md shadow-md overflow-hidden" style={formStyle}>
          <div className="relative z-10">
            <div>
              <h2 className="text-3xl font-extrabold text-center mb-4" style={{ color: isDarkMode ? 'white' : 'darkcyan' }}>
                Login to Admin account
              </h2>
            </div>
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="email" className="block text-sm font-medium">
                  Email address
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="mt-1 p-2 block w-full border rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  placeholder="Email address"
                  style={inputStyle}
                />
              </div>

              <div>
                <label htmlFor="password" className="block text-sm font-medium">
                  Password
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="mt-1 p-2 block w-full border rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  placeholder="Password"
                  style={inputStyle}
                />
              </div>

              <div>
                <button
                  type="submit"
                  className="text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring focus:border-indigo-300 transition-all duration-300"
                  style={buttonStyle}
                >
                  Log in
                </button>
                <br />
                <p className="mt-2 text-sm">
                  Don't have an account? Create
                  <button
                    onClick={formHandle1}
                    className="ml-2  hover:underline focus:outline-none focus:ring focus:border-indigo-300 transition-all duration-300"
                    style={{ color: isDarkMode ? 'lightblue' : 'darkcyan' }}
                  >
                    Signup
                  </button>
                </p>
              </div>
            </form>
          </div>
          <div
            className="absolute h-full w-full transform -skew-y-6 origin-bottom-right"
            style={{ backgroundColor: isDarkMode ? '#104a5c' : 'darkcyan' }}
          ></div>
        </div>
      </div>
      <footer style={footerStyle}>
        <Footer />
      </footer>
    </div>
  );
};

export default Alogin;
