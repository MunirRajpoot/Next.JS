"use client"


import React from 'react'
import "./product.css"
import Modal from '../../components/modal/Modal';
import Button from '../../components/button/Button';
import ProductModal from '../../components/modal/ProductModal';

const fetchProducts = async () => {
    try {
        const data = await ProductModal.find()
        console.log("data", data);
        return data;
    } catch (error) {
        console.log("Error", error);
    }
}
const Products = async () => {
    const data = await fetchProducts()
    return (
        <>
            <div className="table-container">

                {/* <button>Add Products</button> */}
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
                        {data?.map((user) => (
                            <tr key={user.id}>
                                <td>{user.id}</td>
                                <td>{user.name}</td>
                                <td>{user.age}</td>
                                <td>{user.age}</td>
                                <td><Modal isUpdate={true} title="update" /></td>
                                <td><Button title="delete" /></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default Products;
