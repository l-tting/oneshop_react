import React, { useState, useEffect } from 'react';

const ProductUpdateModal = ({ isOpen, onClose, product }) => {
  const [updatedProduct, setUpdatedProduct] = useState({ ...product });

  useEffect(() => {
    if (product) {
      setUpdatedProduct({ ...product });
    }
  }, [product]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg w-1/3">
        <h2 className="text-xl font-bold mb-4">Product Details</h2>
        <div>
          <label className="block mb-2">Product Name</label>
          <input
            type="text"
            name="name"
            value={updatedProduct.name}
            disabled
            className="border p-2 w-full mb-4"
          />
          <label className="block mb-2">Buying Price</label>
          <input
            type="number"
            name="buying_price"
            value={updatedProduct.buying_price}
            disabled
            className="border p-2 w-full mb-4"
          />
          <label className="block mb-2">Selling Price</label>
          <input
            type="number"
            name="selling_price"
            value={updatedProduct.selling_price}
            disabled
            className="border p-2 w-full mb-4"
          />
          <label className="block mb-2">Stock Quantity</label>
          <input
            type="number"
            name="stock_quantity"
            value={updatedProduct.stock_quantity}
            disabled
            className="border p-2 w-full mb-4"
          />
        </div>
        <div className="flex justify-end space-x-2">
          <button
            onClick={onClose}
            className="bg-gray-400 text-white px-3 py-1 rounded"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductUpdateModal;
