import React from 'react'
import { Routes, Route } from "react-router-dom"
import Products from './assets/Pages/Products'
import Sales from './assets/Pages/Sales'
import Home from './assets/Pages/Home'
import NavBar from './assets/Components/Headers/NavBar'
import Login from './assets/Pages/Login'
import Register from './assets/Pages/Register'
import Dashboard from './assets/Pages/Dashboard'
import Support from './assets/Pages/Support'
import Footer from './assets/Components/Footer/Footer'
import ProtectedRoute from './assets/Components/Protected/ContextProtected'

import { AuthProvider } from './Context/AuthContex'


const App = () => {
  return (
    <div>
      <AuthProvider>
        <NavBar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/register' element={<Register />} />
          <Route path='/login' element={<Login />} />
          <Route path='/products' element={<ProtectedRoute><Products /></ProtectedRoute>} />
          <Route path='/sales' element={<ProtectedRoute><Sales /></ProtectedRoute>}/>
          <Route path='/support' element={<ProtectedRoute><Support/></ProtectedRoute>}/>
          <Route path='/dashboard' element={<ProtectedRoute><Dashboard/></ProtectedRoute>}/>
        </Routes>
        <Footer/>
      </AuthProvider>
    </div>
  )
}

export default App
