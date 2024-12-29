import React, { useContext, useEffect, useState } from 'react';
import DataTable from 'react-data-table-component';
import axios from 'axios';
import { AuthContext } from '../../../Context/AuthContex';

const ProductTable = ({ products, loading, setProducts }) => {
  const product_url = import.meta.env.VITE_PRODUCT_URL;
  const { tokenData } = useContext(AuthContext);

  const [modalOpen, setModalOpen] = useState(false);
  // const [selectedProduct, setSelectedProduct] = useState(null);

  const [updatedProduct, setUpdatedProduct] = useState({
    id: '',
    name: '',
    buying_price: '',
    selling_price: '',
    stock_quantity: '',
  });

  // Handle when the "Update" button is clicked
  const onUpdate = (row) => {
    setSelectedProduct(row);
    setUpdatedProduct({ ...row });
    setModalOpen(true);
  };


  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUpdatedProduct((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  
  const handleSave = async () => {
    try {
      const response = await axios.put(
        `${product_url}/${updatedProduct.id}`,
        {
          name: updatedProduct.name,
          buying_price: updatedProduct.buying_price,
          selling_price: updatedProduct.selling_price,
          stock_quantity: updatedProduct.stock_quantity,
        },
        {
          headers: {
            Authorization: `Bearer ${tokenData}`,
          },
        }
      );
      setModalOpen(false);
      console.log('Product updated successfully');

    } catch (error) {
      console.log('Error updating product', error);
    }
  };



  // Handle the cancel button in the modal
  const handleCancel = () => {
    setModalOpen(false);
  };

  // Function to delete a product
  const handleDelete = async (productId) => {
    try {
      const response = await axios.delete(product_url + `/${productId}`, {
        headers: {
          Authorization: `Bearer ${tokenData}`,
        },
      });

      console.log('Product deleted successfully', response.data);
      // Remove the product from the products list
      setProducts((prevProducts) => prevProducts.filter((product) => product.id !== productId));
    } catch (error) {
      console.log('Error deleting product', error);
      alert('Failed to delete product. Please try again later.');
    }
  };

  const columns = [
    {
      name: 'ID',
      selector: (row) => row.id,
      sortable: true,
      reorder: true,
      width: '100px',
    },
    {
      name: 'Product Name',
      selector: (row) => row.name,
      sortable: true,
      reorder: true,
    },
    {
      name: 'Buying Price',
      selector: (row) => row.buying_price,
      sortable: true,
      reorder: true,
    },
    {
      name: 'Selling Price',
      selector: (row) => row.selling_price,
      sortable: true,
      reorder: true,
    },
    {
      name: 'Stock Quantity',
      selector: (row) => row.stock_quantity,
      sortable: true,
      reorder: true,
    },
    {
      name: 'Actions',
      cell: (row) => (
        <div className="flex space-x-2 justify-center">
          <button
            onClick={() => onUpdate(row)}
            className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600 text-xs"
          >
            Update
          </button>
          <button
            onClick={() => handleDelete(row.id)} // Handle the delete action
            className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 text-xs"
          >
            Delete
          </button>
        </div>
      ),
      button: true,
      width: '160px',
    },
  ];

  return (
    <div className="w-[80%] border ml-16">
      <DataTable
        title="My Products"
        columns={columns}
        data={products}
        progressPending={loading}
        noDataComponent="There are no records to display"
        fixedHeader
        fixedHeaderScrollHeight="200px"
        pagination
        className="flex justify-center"
        customStyles={{
          table: {
            style: {
              borderCollapse: 'collapse',
              width: '920px',
              backgroundColor: '#808080', // Background color for the table
              borderColor: 'red'
            }
          },
          headCells: {
            style: {
              backgroundColor: '#4CAF50', // Green header background
              color: '#808080', // White text in header
              padding: '12px 20px', // Padding for headers
              fontSize: '14px', // Larger font size for headers
              fontWeight: 'bold', // Bold headers
              textAlign: 'left', // Left-align headers
            }
          },
          cells: {
            style: {
              padding: '8px 30px', // Padding for table cells
              borderBottom: '1px solid #ddd', // Border for rows
              textAlign:'center',
              verticalAlign: 'middle',
            }
          },
          pagination: {
            style: {
              backgroundColor: '#f4f4f4', // Background color for pagination
              padding: '10px', // Padding around pagination
              display: 'flex',
              justifyContent: 'center',
            }}}}
      />
    
      {/* Modal for updating product */}
      {modalOpen && (
        <div className="fixed inset-0 bg-gray-500 bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-lg w-1/3">
            <h2 className="text-lg font-semibold mb-4">Update Product</h2>
            <div>
              <label className="block mb-2">Product Name</label>
              <input 
                type="text" 
                name="name" 
                value={updatedProduct.name} 
                onChange={handleInputChange} 
                className="border w-full px-3 py-2 mb-4"
              />
            </div>
            <div>
              <label className="block mb-2">Buying Price</label>
              <input 
                type="number" 
                name="buying_price" 
                value={updatedProduct.buying_price} 
                onChange={handleInputChange} 
                className="border w-full px-3 py-2 mb-4"
              />
            </div>
            <div>
              <label className="block mb-2">Selling Price</label>
              <input 
                type="number" 
                name="selling_price" 
                value={updatedProduct.selling_price} 
                onChange={handleInputChange} 
                className="border w-full px-3 py-2 mb-4"
              />
            </div>
            <div>
              <label className="block mb-2">Stock Quantity</label>
              <input 
                type="number" 
                name="stock_quantity" 
                value={updatedProduct.stock_quantity} 
                onChange={handleInputChange} 
                className="border w-full px-3 py-2 mb-4"
              />
            </div>
            <div className="flex justify-end space-x-4">
              <button 
                onClick={handleCancel} 
                className="bg-gray-300 text-black px-4 py-2 rounded"
              >
                Cancel
              </button>
              <button 
                onClick={handleSave} 
                className="bg-blue-500 text-white px-4 py-2 rounded"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductTable;
