import { useState,createContext, useEffect, useContext } from "react";
import { Button } from "@material-tailwind/react";
import axios from "axios";
import { AuthContext } from "../../../Context/AuthContex";



const SalesModal = () => {


    const product_url = import.meta.env.VITE_PRODUCT_URL
    const sales_url = import.meta.env.VITE_SALES_URL;
    const {tokenData} = useContext(AuthContext)
    const [products,setProducts] = useState([])
    const [salesData, setSalesData] = useState({
        pid: "", 
        quantity: "",
      });
    const [isModalOpen, setIsModalOpen] = useState(false);
 

    const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
    };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSalesData({
      ...salesData,
      [name]: value,
    });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(sales_url, salesData,{
        headers:{
          "Authorization":`Bearer ${tokenData}`
        }
      });
      console.log(response.data);
    } catch (e) {
      console.log("Error posting sale", e);
    }
    setIsModalOpen(false);
  };

  const fetchProducts = async ()=>{
    try{
        const response = await  axios.get(product_url,{
          headers:{
            "Authorization":`Bearer ${tokenData}`
          }
        })
        console.log("SP",response.data.products)
        setProducts(response.data.products)
    }
    catch(error){
        console.log("Error fetching products",error)
    }
  }
  useEffect(()=>{
    fetchProducts()

  },[])
  


  return (
    <div>

      <Button
        onClick={toggleModal}
        className="bg-blue-700 text-white hover:bg-blue-800"
      >
        Make Sale
      </Button>
      
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
              <h3 className="text-lg font-semibold">Make a Sale</h3>
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
                  <label htmlFor="pid" className="text-sm font-medium">
                    Select Product
                  </label>
                  
                  <select
                    name="pid"
                    value={salesData.pid}
                    onChange={handleChange}
                    className="w-full p-2.5 text-sm border rounded-lg"
                    required
                  >
                    
                    
                   
                    <option value="">Select a product</option>
                    {products.map(product=>(
                    <option key={product.id} value={product.id}>{product.name}</option>
                    ))}
                    
                  </select>
                  
                </div>


                <div className="col-span-2 sm:col-span-1">
                  <label htmlFor="quantity" className="text-sm font-medium">
                    Quantity
                  </label>
                  <input
                    type="number"
                    name="quantity"
                    value={salesData.quantity}
                    onChange={handleChange}
                    className="w-full p-2.5 text-sm border rounded-lg"
                    placeholder="Enter quantity"
                    required
                    min="1"
                  />
                </div>
              </div>


              <button
                type="submit"
                className="bg-blue-700 text-white p-2.5 rounded-lg"
              >
                Submit Sale
              </button>
            </form>
          </div>
        </div>
      )}

      
    </div>
  );
};

export default SalesModal;
