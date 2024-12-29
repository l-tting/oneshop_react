import React, { useContext, useEffect, useState } from 'react'
import axios from "axios"
import DataTable from 'react-data-table-component'
import { AuthContext } from '../../../Context/AuthContex'

const SalesTable = () => {
    const url = import.meta.env.VITE_SALES_URL
    const {tokenData} = useContext(AuthContext)
    const [salesData,setSalesData] = useState([])
    const fetchSales = async () =>{
        try{
            const response = await axios.get(url,{
                headers:{
                    "Authorization":`Bearer ${tokenData}`
                }
            })
            setSalesData(response.data.sales_data)
            console.log("Sales",response.data.sales_data)
        }
        catch(e){
            console.log("Error fettching sales data",e)
        }
    }
useEffect(()=>{
    fetchSales();
},[])

const columns =[
    {name: 'Sale ID',selector: row => row.id,sortable: true,reorder: true},
    {name: 'Product ID',selector: row => row.pid,sortable: true,reorder: true},
    {name: 'Quantity Sold',selector: row => row.quantity,sortable: true,reorder: true},
    {name: 'Time of Sale',selector: row => row.created_at,sortable: true,reorder: true},
]
  return (
    <div>
         <DataTable
    title="My Sales"
    columns={columns}
    data={salesData}
    fixedHeader
    fixedHeaderScrollHeight="200px"
    pagination
    className='flex justify-center'
/>
        
      
    </div>
  )
}

export default SalesTable
