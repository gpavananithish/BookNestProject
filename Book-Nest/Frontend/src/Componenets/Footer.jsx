// src/Componenets/Footer.jsx
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="py-4 mt-5" style={{ backgroundColor: "darkcyan", color: "white" }}>
      <Container>
        <Row>
          <Col md={4}>
            <h5>About Us</h5>
            <p>
              We are passionate about books and connecting readers with their next great read.
            </p>
          </Col>
          <Col md={4}>
            <h5>Contact Us</h5>
            <p>Email: info@bookstore.com</p>
            <p>Phone: +91 9542693558</p>
          </Col>
          <Col md={4}>
            <h5>Follow Us</h5>
            <div className="d-flex">
              <a href="#" className="text-white mr-3"><FaFacebook size={24} /></a>
              <a href="#" className="text-white mr-3"><FaTwitter size={24} /></a>
              <a href="#" className="text-white mr-3"><FaInstagram size={24} /></a>
              <a href="#" className="text-white"><FaLinkedin size={24} /></a>
            </div>
          </Col>
        </Row>
        <Row className="mt-3">
          <Col className="text-center">
            <p>&copy; {new Date().getFullYear()} BookStore. All rights reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
