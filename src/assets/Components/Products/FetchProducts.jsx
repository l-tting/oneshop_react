import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { AuthContext } from "../../../Context/AuthContex";
import ProductsModal from "./ProductsModal"; // Assuming it's located here
import ProductTable from "./ProductTable";
import DepletedTable from "./DepletedTable";

const FetchProducts = () => {
  const { tokenData } = useContext(AuthContext);
  console.log("Token in context:", tokenData);
  const product_url = import.meta.env.VITE_PRODUCT_URL;

  const [productData, setProductData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Function to fetch products from the API
  const fetchProducts = async () => {
    if (!tokenData) {
      setError("No token available. Please log in.");
      setLoading(false);
      return;
    }

    try {
      setLoading(true);  // Set loading true before making the API request
      const response = await axios.get(product_url, {
        headers: {
          Authorization: `Bearer ${tokenData}`, // Passing token in Authorization header
        },
      });
      setProductData(response.data.products); // Assuming response structure contains 'products'
      setError(null);  // Clear any previous error
    } catch (error) {
      console.error("Error fetching products:", error);
      setError("Failed to fetch products. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  // Function to update the product data (e.g., when adding a new product)
  const updateProductData = (newProduct) => {
    setProductData((prevData) => [...prevData, newProduct]);
  };

  // Trigger the fetch when tokenData changes or on initial load
  useEffect(() => {
    if (tokenData) {
      fetchProducts();
    }
  }, [tokenData]); // Fetch when tokenData changes

  if (loading) {
    return <p>Loading products...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div>
      <ProductsModal updateProductData={updateProductData} />
      <ProductTable products={productData} loading={loading} />
      <DepletedTable />
    </div>
  );
};

export default FetchProducts;
