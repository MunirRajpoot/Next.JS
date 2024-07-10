// components/modal/ModalButton.js
import React, { useState } from 'react';
import ProductModal from './ProductModal'; // Adjust the path if needed

const ModalButton = ({ title, isUpdate, product }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    return (
        <div>
            <button onClick={openModal}>{title}</button>
            <ProductModal
                isUpdate={isUpdate}
                title={title}
                isOpen={isModalOpen}
                onClose={closeModal}
                product={product}
            />
        </div>
    );
};

export default ModalButton;
