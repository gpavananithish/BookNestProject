// src/User/Uhome.jsx
import React from 'react';
import Unavbar from './Unavbar';
import "./uhome.css"; // Make sure this file exists and has the necessary styles
import { Button, Card, Container, Row, Col } from 'react-bootstrap';
import { useNavigate, Link } from 'react-router-dom';
import Footer from '../Componenets/Footer';
import booksData from '../data/booksData'; // Import the booksData

const Uhome = () => {
  const navigate = useNavigate();

  const handleProductClick = (id) => {
    navigate(`/uitem/${id}`);
  };

  // Filter books for "Best Seller" (you can adjust this logic)
  const bestSellers = booksData.slice(0, 4); // First 4 books

  // Filter books for "Top Recommendation" (you can adjust this logic)
  const topRecommendations = booksData.slice(4, 8); // Next 4 books

  return (
    <div style={{ backgroundColor: '#f8f9fa' }}>
      <Unavbar />

      <Container>
        {/* Best Seller Section */}
        <h1 className='text-center py-4' style={{ fontSize: "50px", color: "darkcyan" }}>Best Seller</h1>
        <Row className="justify-content-center">
          {bestSellers.map((book) => (
            <Col key={book.id} md={3} className="mb-4">
              <Card className="h-100 shadow-sm">
                <Link to={`/uitem/${book.id}`}>
                  <Card.Img variant="top" src={book.image} style={{ height: '250px', objectFit: 'cover' }} />
                </Link>
                <Card.Body className="d-flex flex-column">
                  <Card.Title className='text-center' style={{ color: "darkcyan" }}>{book.title}</Card.Title>
                  <Card.Text className="text-center">
                    {book.author}
                  </Card.Text>
                  <Button
                    variant="primary"
                    className="mt-auto"
                    style={{ backgroundColor: "darkcyan", borderColor: "darkcyan" }}
                    onClick={() => handleProductClick(book.id)}
                  >
                    Buy Now
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>

        {/* Top Recommendation Section */}
        <h1 className='text-center py-4' style={{ fontSize: "50px", color: "darkcyan" }}>Top Recommendation</h1>
        <Row className="justify-content-center">
          {topRecommendations.map((book) => (
            <Col key={book.id} md={3} className="mb-4">
              <Card className="h-100 shadow-sm">
                <Link to={`/uitem/${book.id}`}>
                  <Card.Img variant="top" src={book.image} style={{ height: '250px', objectFit: 'cover' }} />
                </Link>
                <Card.Body className="d-flex flex-column">
                  <Card.Title className='text-center' style={{ color: "darkcyan" }}>{book.title}</Card.Title>
                  <Card.Text className="text-center">
                    {book.author}
                  </Card.Text>
                  <Button
                    variant="primary"
                    className="mt-auto"
                    style={{ backgroundColor: "darkcyan", borderColor: "darkcyan" }}
                    onClick={() => handleProductClick(book.id)}
                  >
                    Buy Now
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>

      <Footer />
    </div>
  );
};

export default Uhome;
