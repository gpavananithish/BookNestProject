import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Snavbar from './Snavbar';
import { FaTrash } from "react-icons/fa";
import Footer from '../Componenets/Footer';

function Myproducts() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'));
    if (user) {
      axios
        .get(`http://localhost:4000/getitem/${user.id}`)
        .then((response) => {
          console.log('Response data:', response.data);
          const taskData = response.data;
          setItems(taskData);
        })
        .catch((error) => {
          console.error('Error fetching tasks: ', error);
        });
    } else {
      console.log('ERROR');
    }
  }, []);

  const deleteItem = ((Id) => {
    axios.delete(`http://localhost:4000/itemdelete/${Id}`);
    window.location.assign('/myproducts');
    alert('Item is deleted');
  });

  return (
    <div>
      <Snavbar />
      <div className="container mx-auto p-8">
        <h2 className="text-3xl font-semibold mb-4 text-center">Books List</h2>

        {/* Modified grid-cols to make cards smaller and reduce gap */}
        <div   className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 custom-grid-gap">
          {items.map((item) => (
            // Reduced width and height of the card
            <div style={{margin: '10px',width: '90%'}} key={item._id} className="bg-white p-4 rounded shadow w-full sm:w-72 md:w-60 lg:w-56 book-card">
              <div className="delete-button-container">
                <button onClick={() => deleteItem(item._id)} className="delete-button">
                  <FaTrash />
                </button>
              </div>
              {/* Reduced image height */}
              <img
                src={`http://localhost:4000/${item.itemImage}`}
                alt="Item Image"
                className="rounded-t-lg w-full h-48 object-cover book-image"
              />
              <div>
                <p className="text-lg font-bold mb-1">{item.title}</p>
                <p className="text-gray-700 mb-1 text-sm">Author: {item.author}</p>
                <p className="text-gray-700 mb-1 text-sm">Genre: {item.genre}</p>
                <p className="text-blue-500 font-bold text-sm">Price: Rs{item.price}</p>
                <p className="text-gray-600 text-xs"><strong>Description:</strong>{item.description.slice(0, 100)}  ...</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />

      {/* Internal CSS */}
      <style jsx>
        {`

        /* In your CSS file (e.g., App.css or a separate CSS file) */
        .custom-grid-gap {
          gap: -10px; /* Or any value you want */
        }
        
          .book-card {
            /* Add any styles specific to the book card here */
          }

          .delete-button-container {
            display: flex;
            justify-content: flex-end;
            color: red;
          }

          .delete-button {
            border: none;
            color: red;
            background: none;
          }

          .book-image {
            height: 300px;
          }
            
        `}
      </style>
    </div>
  );
}

export default Myproducts;
