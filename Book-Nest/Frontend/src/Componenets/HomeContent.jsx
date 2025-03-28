// src/Componenets/HomeContent.jsx

import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from "react-router-dom";

const HomeContent = () => {
  return (
    <Container fluid className="py-5" style={{ backgroundColor: "#f8f9fa" }}>
      <Row className="justify-content-center">
        <Col md={8} className="text-center">
          <h1 className="display-4" style={{ color: "#343a40", fontWeight: "bold" }}>Welcome to BookNest</h1>
          <p className="lead" style={{ color: "#495057" }}>
            Discover a world of books at your fingertips. Whether you're a casual reader or a dedicated bookworm, BookStore has something for everyone.
          </p>
          <div className="mt-4">
            <p style={{ color: "#495057", fontSize: "1.1rem" }}>
              <span style={{ fontWeight: "bold" }}>Explore</span> our vast collection of genres, from thrilling mysteries to heartwarming romances.
            </p>
            <p style={{ color: "#495057", fontSize: "1.1rem" }}>
              <span style={{ fontWeight: "bold" }}>Connect</span> with fellow book lovers and share your favorite reads.
            </p>
            <p style={{ color: "#495057", fontSize: "1.1rem" }}>
              <span style={{ fontWeight: "bold" }}>Sell</span> your books and reach a wide audience of readers.
            </p>
          </div>
          <div className="mt-4">
            <Link to="/login" className="btn btn-primary btn-lg mr-3" style={{ backgroundColor: "darkcyan", borderColor: "darkcyan" }}>
              Get Started as User
            </Link>
            <Link to="/slogin" className="btn btn-secondary btn-lg" style={{ backgroundColor: "darkcyan", borderColor: "darkcyan" }}>
              Become a Seller
            </Link>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default HomeContent;
