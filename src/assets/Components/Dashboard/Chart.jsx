import React, { useEffect, useState } from 'react';
import axios from 'axios';  // Import axios for HTTP requests
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, PointElement, LineElement, Title, Tooltip, Legend, LinearScale } from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const Chart = () => {
  const url = import.meta.env.VITE_DASH_URL;
  const [dayData, setDayData] = useState({
    sales_per_day: [],
    profit_per_day: [],
  });

  const fetchSales = async () => {
    try {
      const response = await axios.get(url + 'sales_per_day');
      setDayData((prevData) => ({
        ...prevData,
        sales_per_day: response.data.sales_per_day,
      }));
      console.log('Sales per day:', response.data.sales_per_day);
    } catch (error) {
      console.log('Error fetching sales per day data', error);
    }
  };

  const fetchProfit = async () => {
    try {
      const response = await axios.get(url + 'profit_per_day');
      setDayData((prevData) => ({
        ...prevData,
        profit_per_day: response.data.profit_per_day,
      }));
      console.log('Profit per day:', response.data.profit_per_day);
    } catch (error) {
      console.log('Error fetching profit per day', error);
    }
  };


  const xAxisData = dayData.sales_per_day.map(item => item.date);
  const salesData = dayData.sales_per_day.map(item => item.sales);
  const profitData = dayData.profit_per_day.map(item => item.profit); 
  useEffect(() => {
    fetchSales();
    fetchProfit();
  }, []);

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      tooltip: {
        mode: 'index',
        intersect: false,
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: 'Date',
        },
      },
      y: {
        title: {
          display: true,
          text: 'Amount in Ksh.',
        },
      },
    },
  };

  const data = {
    labels: xAxisData,
    datasets: [
      {
        label: 'Sales',
        data: salesData,
        borderColor: 'rgb(79,192,192)',
        backgroundColor: 'rgba(79,192,192, 0.2)',
        fill: true,
        borderWidth: 2,
        pointRadius: 4,
      },
      {
        label: 'Profit',
        data: profitData,
        borderColor: 'rgb(255,99,132)',
        backgroundColor: 'rgba(255,99,132, 0.2)',
        fill: true,
        borderWidth: 2,
        pointRadius: 4,
      },
    ],
  };


  if (!dayData.sales_per_day.length || !dayData.profit_per_day.length) {
    return <div>Loading data...</div>;
  }

  return (
    <div className='w-[50%] h-[400px]'> 
      <Line options={options} data={data} />
    </div>
  );
};

export default Chart;
