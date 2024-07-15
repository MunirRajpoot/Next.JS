// ./app/products/page.js
"use client"
// Import necessary React components and hooks
import React, { useState, useEffect } from 'react';
import "./product.css"; // Ensure this file exists and styles are defined
import ModalButton from '../../components/modal/ModalButton'; // Check path and existence of ModalButton component
import Button from '../../components/button/Button'; // Check path and existence of Button component
import axios from 'axios';

const fetchProducts = async () => {
  try {
    const response = await axios.get('/api/products');
    return response.data;
  } catch (error) {
    console.error("Error fetching products:", error); // Use console.error for clarity in error logs
    return [];
  }
};

const Products = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const products = await fetchProducts();
        setData(products);
      } catch (error) {
        console.error("Error setting products data:", error); // Improve error handling
      }
    };
    getData();
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`/api/products/${id}`);
      setData(prevData => prevData.filter(product => product._id !== id));
    } catch (error) {
      console.error("Error deleting product:", error); // Improve error handling
    }
  };

  return (
    <div className="table-container">
      <ModalButton title="Create Product" /> {/* Ensure ModalButton is correctly implemented */}
      <table className="styled-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Product Title</th>
            <th>Product Description</th>
            <th>Product Price</th>
            <th>Update</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {data.map((product) => (
            <tr key={product._id}>
              <td>{product._id}</td>
              <td>{product.name}</td>
              <td>{product.description}</td>
              <td>{product.price}</td>
              <td>
                <ModalButton
                  isUpdate={true}
                  title="Update Product"
                  product={product}
                />
              </td>
              <td>
                <Button title="Delete" onClick={() => handleDelete(product._id)} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Products;
