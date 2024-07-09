"use client"

import React, { useState, useEffect } from 'react';
import "./product.css";
import Modal from '../../components/modal/Modal';
import Button from '../../components/button/Button';
import { productModel } from '../../model/products';

const fetchProducts = async () => {
    try {
        const data = await productModel.find();
        console.log("data", data);
        return data;
    } catch (error) {
        console.log("Error", error);
        return [];
    }
};

const Products = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        const getData = async () => {
            const products = await fetchProducts();
            setData(products);
        };
        getData();
    }, []);

    return (
        <>
            <div className="table-container">
                <Modal title="create products" />
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
                            <tr key={product.id}>
                                <td>{product.id}</td>
                                <td>{product.title}</td>
                                <td>{product.description}</td>
                                <td>{product.price}</td>
                                <td><Modal isUpdate={true} title="update" /></td>
                                <td><Button title="delete" /></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    );
};

export default Products;
