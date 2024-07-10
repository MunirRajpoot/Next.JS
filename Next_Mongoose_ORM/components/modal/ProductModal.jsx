// components/modal/ProductModal.js
import React, { useState } from 'react';
import styles from '../../styles/products.module.css'; // Adjust path if needed

const ProductModal = ({ isOpen, onClose, title, isUpdate, product }) => {
    const [form, setForm] = useState({
        title: product?.title || '',
        price: product?.price || '',
        description: product?.description || ''
    });

    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm({
            ...form,
            [name]: value
        });
    };

    const submitHandler = async (e) => {
        e.preventDefault();
        if (isUpdate) {
            updateProductApi();
        } else {
            postProductApi();
        }
    };

    const postProductApi = async () => {
        try {
            setLoading(true);
            const response = await fetch("http://localhost:3000/api/products", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(form)
            });
            if (response.ok) {
                alert("Product created");
                onClose();
            } else {
                alert("Failed to create product");
            }
        } catch (error) {
            console.log("error", error);
        } finally {
            setLoading(false);
        }
    };

    const updateProductApi = async () => {
        try {
            setLoading(true);
            const response = await fetch(`http://localhost:3000/api/products/${product._id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(form)
            });
            if (response.ok) {
                alert("Product updated");
                onClose();
            } else {
                alert("Failed to update product");
            }
        } catch (error) {
            console.log("error", error);
        } finally {
            setLoading(false);
        }
    };

    if (!isOpen) return null;

    return (
        <div className={styles.modal}>
            <div className={styles.modalContent}>
                <span className={styles.close} onClick={onClose}>&times;</span>
                <h2>{isUpdate ? "Update Product" : "Add Product"}</h2>
                <form onSubmit={submitHandler}>
                    <div className={styles.formGroup}>
                        <label htmlFor="title">Product Title:</label>
                        <input
                            type="text"
                            id="title"
                            name="title"
                            value={form.title}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className={styles.formGroup}>
                        <label htmlFor="price">Price:</label>
                        <input
                            type="number"
                            id="price"
                            name="price"
                            value={form.price}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className={styles.formGroup}>
                        <label htmlFor="description">Description:</label>
                        <textarea
                            id="description"
                            name="description"
                            value={form.description}
                            onChange={handleChange}
                            required
                        ></textarea>
                    </div>
                    <button className={styles.button} type="submit" disabled={loading}>
                        {loading ? 'Submitting...' : 'Submit'}
                    </button>
                </form>
            </div>
        </div>
    );
};

export default ProductModal;
