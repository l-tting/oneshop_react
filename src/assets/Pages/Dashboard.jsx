import React from 'react'
import MyBarChart from '../Components/Dashboard/BarChart'
import Chart from '../Components/Dashboard/Chart'
import Stats from '../Components/Dashboard/Stats'


const Dashboard = () => {
  return (
    <div className=''>
      <Stats/>
      <MyBarChart/>
      <Chart/>
      
    </div>
  )
}

export default Dashboard


