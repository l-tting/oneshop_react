import React, { useEffect, useState } from 'react'
import SalesModal from '../Components/Sales/SalesModal'
import SalesTable from '../Components/Sales/SalesTable'

const Sales = () => {
 
  return (
    <div>
      <SalesModal />
      <SalesTable/>
      
    </div>
  )
}

export default Sales
