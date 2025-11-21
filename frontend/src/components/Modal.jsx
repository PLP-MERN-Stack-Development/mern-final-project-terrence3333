import React from 'react';

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white rounded p-6 w-full max-w-lg">
        <button
          onClick={onClose}
          className="float-right text-gray-500 hover:text-gray-800"
        >
          &times;
        </button>
        <div className="mt-4">{children}</div>
      </div>
    </div>
  );
};

export default Modal;
