import React from 'react'
import { useAuth } from './contexts/AuthContext';
import { Navigate, Outlet } from 'react-router-dom';

const SecureRoutes = () => {

    const { isAuthenticated } = useAuth();

    return isAuthenticated ? <Outlet /> : <Navigate to="/login" />
}

export default SecureRoutes