// pages/products/page.js
"use client"
import React, { useState, useEffect } from 'react';
import "./product.css";
import ModalButton from '../../components/modal/ModalButton';
import Button from '../../components/button/Button';
import { productModel } from '../../model/products';

const fetchProducts = async () => {
    try {
        const data = await productModel.find();
        console.log("Fetched products:", data); // Log fetched data for debugging
        return data;
    } catch (error) {
        console.log("Error fetching products:", error); // Log fetch error for debugging
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
                console.log("Error setting products data:", error); // Log setting data error for debugging
            }
        };
        getData();
    }, []);

    const handleDelete = async (id) => {
        try {
            await productModel.deleteOne({ _id: id });
            setData(prevData => prevData.filter(product => product._id !== id));
        } catch (error) {
            console.log("Error deleting product:", error); // Log delete error for debugging
        }
    };

    return (
        <div className="table-container">
            <ModalButton title="Create Product" />
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
                            <td>{product.title}</td>
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
