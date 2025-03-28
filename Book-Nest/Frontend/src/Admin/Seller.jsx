import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Button, Table, Card } from 'react-bootstrap';
import { FaTrash, FaEdit } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Anavbar from './Anavbar';
import Footer from '../Componenets/Footer';

const Seller = () => {
  const [userbookings, setUserbookings] = useState([]);
  const [users, setUsers] = useState([]);
  const [showDetails, setShowDetails] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const storedDarkMode = localStorage.getItem('darkMode');
    if (storedDarkMode) {
      setIsDarkMode(storedDarkMode === 'true');
    }
  }, []);

  const toggleDetails = () => {
    setShowDetails(!showDetails);
  };

  useEffect(() => {
    axios
      .get(`http://localhost:4000/sellers`)
      .then((response) => {
        setUsers(response.data);
      })
      .catch((error) => {
        console.error('Failed to fetch users:', error);
      });
  }, []);

  const deleteData = (taskId) => {
    axios.delete(`http://localhost:4000/sellerdelete/${taskId}`);
    window.location.assign('/sellers');
    alert('User is deleted');
  };

  const deleteitem = (taskId) => {
    axios.delete(`http://localhost:4000/useritemdelete/${taskId}`);
    window.location.assign('/sellers');
    alert('deleted');
  };

  const fetchUserBikeData = (userId) => {
    axios
      .get(`http://localhost:4000/getitem/${userId}`)
      .then((response) => {
        setUserbookings(response.data);
        toggleDetails();
      })
      .catch((error) => {
        console.error('Error fetching user bike data:', error);
      });
  };

  const calculateStatus = (Delivery) => {
    const currentDate = new Date();
    const formattedDeliveryDate = new Date(Delivery);

    if (formattedDeliveryDate >= currentDate) {
      return 'ontheway';
    } else {
      return 'delivered';
    }
  };

  // Styles for dark mode
  const darkModeStyles = {
    backgroundColor: '#102a33',
    color: 'white',
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
  };

  // Styles for light mode
  const lightModeStyles = {
    backgroundColor: '#f8f9fa',
    color: 'black',
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
  };

  // Apply styles based on the current mode
  const currentStyles = isDarkMode ? darkModeStyles : lightModeStyles;

  const tableStyle = {
    width: '80%',
    margin: '20px auto',
    borderCollapse: 'collapse',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    borderRadius: '8px',
    overflow: 'hidden',
  };

  const thStyle = {
    backgroundColor: isDarkMode ? '#133944' : 'darkcyan',
    color: 'white',
    padding: '10px',
    textAlign: 'left',
  };

  const tdStyle = {
    padding: '10px',
    borderBottom: '1px solid #ddd',
  };

  const trStyle = {
    backgroundColor: isDarkMode ? '#104a5c' : 'white',
  };

  const buttonStyle = {
    backgroundColor: isDarkMode ? '#0e4452' : 'darkcyan',
    borderColor: isDarkMode ? '#0e4452' : 'darkcyan',
  };

  const contentStyle = {
    flexGrow: 1,
  };

  return (
    <div style={currentStyles}>
      <Anavbar />
      <div style={contentStyle}>
        <br />
        <h1 className="text-center" style={{ color: isDarkMode ? 'white' : 'darkcyan' }}>
          Vendors
        </h1>
        <br />
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <Table striped bordered hover style={tableStyle}>
            <thead>
              <tr style={trStyle}>
                <th style={thStyle}>sl/no</th>
                <th style={thStyle}>UserId</th>
                <th style={thStyle}>User name</th>
                <th style={thStyle}>Email</th>
                <th style={thStyle}>Operation</th>
              </tr>
            </thead>
            <tbody>
              {users.map((item, index) => (
                <tr key={item._id} style={trStyle}>
                  <td style={tdStyle}>{index + 1}</td>
                  <td style={tdStyle}>{item._id}</td>
                  <td style={tdStyle}>{item.name}</td>
                  <td style={tdStyle}>{item.email}</td>
                  <td style={tdStyle}>
                    <button style={{ border: 'none', background: 'none' }}>
                      <Link
                        to={`/useredit/${item._id}`}
                        style={{ color: 'blue', textDecoration: 'none' }}
                      >
                        <FaEdit />
                      </Link>
                    </button>
                    <button
                      onClick={() => deleteData(item._id)}
                      style={{ border: 'none', color: 'red', background: 'none' }}
                    >
                      <FaTrash />
                    </button>{' '}
                    <Button onClick={() => fetchUserBikeData(item._id)} style={buttonStyle}>
                      view
                    </Button>
                    <div style={{ display: 'flex' }}>
                      {showDetails && (
                        <div className="fixed top-0 left-0 w-screen h-screen flex items-center justify-center z-50">
                          <div className="bg-gray-900 bg-opacity-50 absolute inset-0"></div>
                          <div
                            className="bg-white p-4 rounded-lg z-10 relative"
                            style={{
                              maxHeight: '80vh',
                              overflowY: 'scroll',
                              backgroundColor: isDarkMode ? '#133944' : 'white',
                              color: isDarkMode ? 'white' : 'black',
                            }}
                          >
                            <p className="text-sm text-gray-600">
                              <div className="container mx-auto mt-8" style={{ width: '1350px' }}>
                                <h1
                                  className="text-center text-blue-300"
                                  style={{ color: isDarkMode ? 'white' : 'darkcyan' }}
                                >
                                  Vendor Products
                                </h1>
                                {userbookings.map((item) => {
                                  const status = calculateStatus(item.Delivery);
                                  return (
                                    <Card
                                      key={item._id}
                                      style={{
                                        width: '90%',
                                        marginLeft: '65px',
                                        backgroundColor: isDarkMode ? '#104a5c' : 'white',
                                        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
                                        borderRadius: '8px',
                                        paddingTop: '15px',
                                        marginBottom: '35px',
                                        color: isDarkMode ? 'white' : 'black',
                                      }}
                                    >
                                      <div style={{ display: 'flex', justifyContent: 'space-around' }}>
                                        <div>
                                          <img
                                            src={`http://localhost:4000/${item?.itemImage}`}
                                            alt={`${item.itemtype} Image`}
                                            style={{ height: '80px', width: '120px' }}
                                          />
                                        </div>
                                        <div>
                                          <p>Product Name:</p>
                                          <p>
                                            {item.itemtype}-{item._id.slice(3, 7)}
                                          </p>
                                        </div>
                                        <div>
                                          <p>Orderid:</p>
                                          <p>{item._id.slice(0, 10)}</p>
                                        </div>

                                        <div>
                                          <p>Warranty</p>
                                          <p>1 year</p>
                                        </div>
                                        <div>
                                          <p>Price</p>
                                          <p>{item.price}</p>
                                        </div>
                                        <button
                                          onClick={() => deleteitem(item._id)}
                                          style={{ border: 'none', color: 'red', background: 'none' }}
                                        >
                                          <FaTrash />
                                        </button>
                                      </div>
                                    </Card>
                                  );
                                })}
                              </div>
                            </p>
                            <Button onClick={toggleDetails} className="mt-4" style={buttonStyle}>
                              Close
                            </Button>
                          </div>
                        </div>
                      )}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Seller;
