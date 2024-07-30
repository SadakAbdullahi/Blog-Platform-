// src/Components/Modal.js
import React from "react";
import ReactDOM from "react-dom";

const Modal = ({ image, onClose }) => {
  return ReactDOM.createPortal(
    <div
      className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center"
      onClick={onClose}
    >
      <div
        className="relative bg-white p-4 rounded-lg"
        onClick={(e) => e.stopPropagation()}
      >
        <img src={image} alt="Enlarged" className="max-w-full max-h-screen" />
        <button
          onClick={onClose}
          className="absolute top-2 right-2 bg-red-500 text-white py-1 px-3 rounded-full hover:bg-red-600"
        >
          Close
        </button>
      </div>
    </div>,
    document.body
  );
};

export default Modal;
