// pages/index.js
"use client"
import { useState } from 'react';
import ProductModal from './ProductModal';

export default function Modal(props) {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    return (
        <div>
            {/* <h2>Product Input Form</h2> */}
            <button onClick={openModal}>{props.title}</button>

            <ProductModal isUpdate={props.isUpdate} title={props.title} isOpen={isModalOpen} onClose={closeModal} />
        </div>
    );
}
