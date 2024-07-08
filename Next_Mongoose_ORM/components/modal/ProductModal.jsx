// components/ProductModal.js
import { useState } from 'react';
import styles from '../../styles/products.module.css';

const ProductModal = ({ isOpen, onClose, title }) => {
    const [form, setForm] = useState({
        title: '',
        price: '',
        description: ''
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
        
       }
       else{
        postProductApi()
       }
    };

    const postProductApi = async () => {
        try {
            setLoading(true);
            const myHeaders = new Headers();
            myHeaders.append("Content-Type", "application/json");

            const raw = JSON.stringify(form);

            const requestOptions = {
                method: "POST",
                headers: myHeaders,
                body: raw,
                redirect: "follow"
            };

            const response = await fetch("http://localhost:3000/api/products", requestOptions);
            alert("Product created");
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
                <h2>{isUpdate ? "Update Products" : "Add Products"}</h2>
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
