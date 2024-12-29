import { useContext, useEffect, useState } from "react";
import { Button } from "@material-tailwind/react";
import axios from "axios";
import { AuthContext } from "../../../Context/AuthContex";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDownLong } from "@fortawesome/free-solid-svg-icons";

const ProductsModal = () => {
  const { tokenData } = useContext(AuthContext);
  const url = import.meta.env.VITE_PRODUCT_URL;

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [productData, setProductData] = useState({
    name: "",
    buying_price: "",
    selling_price: "",
    stock_quantity: "",
  });


  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProductData({
      ...productData,
      [name]: value,
    });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(url, productData, {
        headers: {
          Authorization: `Bearer ${tokenData}`,
        },
      });
      console.log(response.data);
      setIsModalOpen(false);
      setProductData('')
    } catch (e) {
      console.log("error posting prods", e);
    }
  };

  return (
    <div>
      <center className="text-2xl font-bold">
        Explore all OneShop product categories and see all our featured products
      </center>
      <center>
        {" "}
        <i>
          {" "}
          <h2 className="text-[#2563EB]">
            Everyday essentials to the latest trends
          </h2>{" "}
        </i>
      </center>
      <div className="py-4 px-[5%]">
        <div className="flex">
          <h2 className="font-bold">
            {" "}
            <i>Create New Product Listing</i>{" "}
          </h2>
          <span className="px-2 text-sm">
            <FontAwesomeIcon icon={faArrowDownLong} fade />{" "}
          </span>
        </div>
      <div className="px-[16%] py-2">
        <Button
          onClick={toggleModal}
          className="bg-blue-700 text-white hover:bg-blue-800 "
        >
          Add Product
        </Button>
      </div>
       
      </div>

      {isModalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-gray-800 bg-opacity-50"
          onClick={toggleModal}
        >
          <div
            className="relative bg-white rounded-lg shadow-lg max-w-md w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-center p-4 border-b rounded-t">
              <h3 className="text-lg font-semibold">Create New Product</h3>
              <button
                type="button"
                onClick={toggleModal}
                className="text-gray-400 hover:text-gray-900"
              >
                <svg
                  className="w-3 h-3"
                  fill="none"
                  stroke="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 14 14"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M1 1l6 6m0 0l6 6M7 7l6-6M7 7l-6 6"></path>
                </svg>
              </button>
            </div>

            <form onSubmit={handleFormSubmit} className="p-4">
              <div className="grid gap-4 mb-4 grid-cols-2">
                <div className="col-span-2 sm:col-span-1">
                  <label htmlFor="price" className="text-sm font-medium">
                    Product Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={productData.name}
                    onChange={handleChange}
                    className="w-full p-2.5 text-sm border rounded-lg"
                    placeholder="Product Name"
                    required
                  />
                </div>
                <div className="col-span-2 sm:col-span-1">
                  <label htmlFor="price" className="text-sm font-medium">
                    Buying Price
                  </label>
                  <input
                    type="number"
                    name="buying_price"
                    value={productData.buying_price}
                    onChange={handleChange}
                    className="w-full p-2.5 text-sm border rounded-lg"
                    placeholder="Buying Price"
                    required
                  />
                </div>
                <div className="col-span-2 sm:col-span-1">
                  <label htmlFor="price" className="text-sm font-medium">
                    Selling Price
                  </label>
                  <input
                    type="number"
                    name="selling_price"
                    value={productData.selling_price}
                    onChange={handleChange}
                    className="w-full p-2.5 text-sm border rounded-lg"
                    placeholder="Selling Price"
                    required
                  />
                </div>
                <div className="col-span-2 sm:col-span-1">
                  <label htmlFor="price" className="text-sm font-medium">
                    Stock Quantity
                  </label>
                  <input
                    type="number"
                    name="stock_quantity"
                    value={productData.stock_quantity}
                    onChange={handleChange}
                    className="w-full p-2.5 text-sm border rounded-lg"
                    placeholder="Stock Quantity"
                    required
                  />
                </div>
              </div>

              <button
                type="submit"
                className="bg-blue-700 text-white p-2.5 rounded-lg"
              >
                Add new product
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductsModal;
