import React, { useState, useImperativeHandle, forwardRef } from 'react';
import GeneralButton from './GeneralButton'; // Assuming you might want to use your GeneralButton

// const PopupCard = forwardRef({ buttonLabel, cardTitle, children, onOpen, onClose }) => {
const PopupCard = forwardRef(({ buttonLabel, cardTitle, children, onOpen, onClose }, ref) => {
    const [isOpen, setIsOpen] = useState(false);

    const openPopup = () => {
        setIsOpen(true);
        if (onOpen) onOpen();
    };

    const closePopup = () => {
        setIsOpen(false);
        if (onClose) onClose();
    };

    useImperativeHandle(ref, () => ({
        close: () => {
            closePopup();
        }
    }));
    // children.applyFilters

    return (
        <>
            <GeneralButton text={buttonLabel} onClick={openPopup} className="bg-blue-500 hover:bg-blue-700 text-white" />

            {isOpen && (
                <div className="fixed inset-0 z-10 flex items-center justify-center backdrop-blur-md">
                    <div className="bg-white p-6 rounded-lg shadow-xl w-full max-w-md mx-auto transform transition-all duration-300 ease-in-out scale-100">
                        <div className="flex justify-between items-center mb-4">
                            <h3 className="text-xl font-semibold text-gray-800">{cardTitle}</h3>
                            <button
                                onClick={closePopup}
                                className="text-gray-500 hover:text-gray-700 text-2xl font-bold"
                                aria-label="Close"
                            >
                                &times;
                            </button>
                        </div>
                        <div>
                            {children}
                        </div>

                    </div>
                </div>
            )}
        </>
    );
});

export default PopupCard;