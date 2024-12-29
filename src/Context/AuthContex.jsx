import { createContext, useState } from "react";

export const AuthContext = createContext()

export const AuthProvider =({children})=>{
    const [tokenData,setTokenData] = useState()
    const [isAuthenticated,setIsAuthenticated] = useState(false)

    const login =(token)=>{
        setIsAuthenticated(true)
        setTokenData(token)
    }
    const logout =()=>{
        setIsAuthenticated(false)
        setTokenData(null)
    }
    return(
        <AuthContext.Provider value={{ tokenData, isAuthenticated, login, logout }}>
            {children}
            </AuthContext.Provider>
    )

}