import React, { useEffect, useState } from 'react';
import { Bar } from "react-chartjs-2";
import { LineChart, Line, CartesianGrid, XAxis, YAxis } from 'recharts';
import axios from 'axios';

const SimpleLineChart = () => {
    const url = import.meta.env.VITE_DASH_URL;
    const [dayData, setDayData] = useState({
        sales_per_day: [],
        profit_per_day: [],
    });

    const fetchSales = async () => {
        try {
            const response = await axios.get(url + "sales_per_day");
            setDayData((prevData) => ({
                ...prevData,
                sales_per_day: response.data.sales_per_day,
            }));
            console.log(response.data.sales_per_day);
        } catch (error) {
            console.log("Error fetching sales per day data", error);
        }
    };

    const fetchProfit = async () => {
        try {
            const response = await axios.get(url + "profit_per_day");
            setDayData((prevData) => ({
                ...prevData,
                profit_per_day: response.data.profit_per_day,
            }));
            console.log("Profit", response.data.profit_per_day);
        } catch (error) {
            console.log("Error fetching profit per day", error);
        }
    };


    const data = dayData.sales_per_day.map((item, index) => ({
        day: item.date,
        sales: item.sales,
        profit: dayData.profit_per_day[index]?.profit || 0,  
    }));
    console.log("Data",data)

    useEffect(() => {
        fetchSales();
        fetchProfit();
    }, []);  

    return (
        <div>
           <div className="chart-container">
      <h2 style={{ textAlign: "center" }}>Bar Chart</h2>
      <Bar
        data={dayData}
        options={{
          plugins: {
            title: {
              display: true,
              text: "Users Gained between 2016-2020"
            },
            legend: {
              display: false
            }
          }
        }}
      />
    </div>
        </div>
    );
};

export default SimpleLineChart;
