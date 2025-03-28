import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Vnavbar from './Snavbar';
import Footer from '../Componenets/Footer';

function Additem() {
  const [formData, setFormData] = useState({
    description: '',
    title: '',
    author: '',
    genre: '',
    price: '',
  });

  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem('user'));

  const handleChange = (e) => {
    if (e.target.name === 'itemImage') {
      setFormData({ ...formData, [e.target.name]: e.target.files[0] });
    } else {
      const { name, value } = e.target;
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formDataToSend = new FormData();

      formDataToSend.append('genre', formData.genre);
      formDataToSend.append('title', formData.title);
      formDataToSend.append('author', formData.author);
      formDataToSend.append('description', formData.description);
      formDataToSend.append('price', formData.price);
      formDataToSend.append('itemImage', formData.itemImage);
      formDataToSend.append('userName', user.name);
      formDataToSend.append('userId', user.id);

      await axios.post('http://localhost:4000/items', formDataToSend);
      alert('Book added successfully');
      navigate('/myproducts');
    } catch (error) {
      console.error('Error adding book: ', error);
    }
  };

  // Styles for dark mode
  const darkModeStyles = {
    backgroundColor: '#102a33',
    color: 'white',
  };

  // Styles for light mode
  const lightModeStyles = {
    backgroundColor: '#f8f9fa',
    color: 'black',
  };

  // Determine current mode from local storage
  const storedDarkMode = localStorage.getItem('darkMode');
  const isDarkMode = storedDarkMode ? JSON.parse(storedDarkMode) : false;

  // Apply styles based on the current mode
  const currentStyles = isDarkMode ? darkModeStyles : lightModeStyles;

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
    marginBottom: '10px', // Reduced margin-bottom
    borderRadius: '5px',
    border: '1px solid #ced4da',
    boxSizing: 'border-box',
  };

  const labelStyle = {
    display: 'block',
    marginBottom: '3px', // Reduced margin-bottom
    fontWeight: 'bold',
    color: isDarkMode ? 'white' : 'black',
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

  return (
    <div style={currentStyles}>
      <Vnavbar />
      <div style={formStyle}>
        <h2 className="text-2xl font-semibold mb-4 text-center" style={{ color: isDarkMode ? 'white' : 'darkcyan' }}>
          Add Book
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-2"> {/* Reduced margin-bottom */}
            <label style={labelStyle}>Title</label>
            <input
              type="text"
              name="title"
              placeholder="Title"
              value={formData.title}
              onChange={handleChange}
              style={inputStyle}
              required
            />
          </div>
          <div className="mb-2"> {/* Reduced margin-bottom */}
            <label style={labelStyle}>Author</label>
            <input
              type="text"
              name="author"
              placeholder="Author"
              value={formData.author}
              onChange={handleChange}
              style={inputStyle}
              required
            />
          </div>
          <div className="mb-2"> {/* Reduced margin-bottom */}
            <label style={labelStyle}>Genre</label>
            <input
              type="text"
              name="genre"
              placeholder="Genre"
              value={formData.genre}
              onChange={handleChange}
              style={inputStyle}
              required
            />
          </div>

          <div className="mb-2"> {/* Reduced margin-bottom */}
            <label style={labelStyle}>Price</label>
            <input
              type="text"
              name="price"
              placeholder="Price"
              value={formData.price}
              onChange={handleChange}
              style={inputStyle}
              required
            />
          </div>
          <div className="mb-2"> {/* Reduced margin-bottom */}
            <label style={labelStyle}>Description</label>
            <input
              type="text"
              name="description"
              placeholder="Description"
              value={formData.description}
              onChange={handleChange}
              style={inputStyle}
              required
            />
          </div>
          <div className="mb-4"> {/* Reduced margin-bottom */}
            <label style={labelStyle}>Item Image</label>
            <input
              type="file"
              name="itemImage"
              accept="image/*"
              onChange={handleChange}
              style={inputStyle}
              required
            />
          </div>
          <button type="submit" style={buttonStyle}>
            Submit
          </button>
        </form>
      </div>
      <Footer />
    </div>
  );
}

export default Additem;
