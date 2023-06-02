import React, { useContext } from 'react';

import { Navigate, useLocation } from 'react-router-dom';

import UseAuth from '../../../hooks/UseAuth';
import UseAdmin from '../../../hooks/Useadmin';

const AdminRoute = ({ children }) => {
    const { user, loading } = UseAuth()
    const [isAdmin, isAdminloading] = UseAdmin()
    const location = useLocation()
    if (loading || isAdminloading) {
        return <progress className="progress progress-error w-56" value="100" max="100"></progress>
    }
    if (user?.email && isAdmin) {
        return children
    }
    return <Navigate to='/' state={{ from: location }} replace></Navigate>;

};

export default AdminRoute;