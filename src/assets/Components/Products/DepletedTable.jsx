import React, { useContext, useEffect, useState } from 'react'
import DataTable from 'react-data-table-component';
import { AuthContext } from '../../../Context/AuthContex';
import axios from "axios"


const DepletedTable = () => {
    const {tokenData} = useContext(AuthContext)
    const url = import.meta.env.VITE_DEPLETED_URL
    const [depletedData,setdepletedData] = useState([])
    const fetchDepleted = async ()=>{
        try{
            const response = await axios.get(url,{
                headers:{
                    Authorization:`Bearer ${tokenData}`
                }
            })
            setdepletedData(response.data.depleting)
        }
        catch(error){
            console.log("Error fetching depleting stock",error)
        }
    }
    const columns = [
        {
            name: 'Product ID',
            selector: row => row.id,
        },
        {
            name: 'Product Name',
            selector: row => row.name,
        },
        {
            name: 'StockQuantity',
            selector: row => row.stock_quantity,
        },
    ];
    useEffect(()=>{
        fetchDepleted();
    },[])
  
  return (
    <div>
        <DataTable
			columns={columns}
			data={depletedData}
		/>
    </div>
  )
}

export default DepletedTable
