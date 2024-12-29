import React from 'react'
import { useContext } from 'react'
import { AuthContext } from '../../Context/AuthContex'
import Landing from '../Components/Home/Landing'
import LandingComp from '../Components/Home/LandingComp'


const Home = () => {
  const {tokenData} = useContext(AuthContext)
  console.log("home token",tokenData)
  return (
    <div>
      <div>
      <Landing/>
      </div>
       <div>
       <LandingComp/>
       </div>
        
      
    </div>
  )
}

export default Home
