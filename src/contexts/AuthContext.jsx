import React, { createContext, useContext, useState } from 'react'

const AuthContext = createContext();

export const useAuth = () => {
    return useContext(AuthContext);
}

export const AuthContextProvider = ({ children }) => {

    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [token, setToken] = useState("");

    return (
        <AuthContext.Provider value={{ token, setToken, isAuthenticated, setIsAuthenticated }}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContext