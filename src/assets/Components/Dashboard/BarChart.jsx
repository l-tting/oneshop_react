import React, { useEffect } from 'react'
import { BarChart } from '@mui/x-charts/BarChart';
import axios from 'axios'
import { useState } from 'react'

const MyBarChart = () => {
    const url = import.meta.env.VITE_DASH_URL
    const [sales,setSales] =useState([])
    const [profit,setProfit] = useState([])
    const fetchSales = async ()=>{
        try{
            const response = await axios.get(url +"sales_per_product")
            setSales(response.data.sales_per_product)
            console.log("sales p",response.data.sales_per_product)

        }
        catch(error){
            console.log("Error feetching sales per prod",error)

        }
    }
    const fetchProfit = async ()=>{
        try{
            const response = await axios.get(url + "profit_per_product")
            setProfit(response.data.profit_per_product)
            console.log("profit p",response.data.profit_per_product)

        }
        catch(error){

        }
    }
    const xAxisdata = sales.map(item=>item.product)

    const salesdata = sales.map(item=>item.sale)
    console.log("sales____",salesdata)
    const profitdata = profit.map(item =>item.profit)


    useEffect(()=>{
        fetchSales()
        fetchProfit()
    },[])
    
  return (
    <div>
         <BarChart
      xAxis={[{ scaleType: 'band', data: xAxisdata }]}
      series={[{ data: salesdata ,label:"Sales"}, { data: profitdata ,label:"Profit"}]}
      width={500}
      height={300}
    />
      
    </div>
  )
}

export default MyBarChart
