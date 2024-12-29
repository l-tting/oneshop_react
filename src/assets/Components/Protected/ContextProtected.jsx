import React, { useContext } from 'react'
import { AuthContext } from '../../../Context/AuthContex'
import { Navigate } from 'react-router-dom';
const ContextProtected = ({children}) => {
    const {isAuthenticated} = useContext(AuthContext);
  return isAuthenticated ? children:<Navigate to="/login" replace/>
}

export default ContextProtected
