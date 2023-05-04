/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useContext } from 'react';
import { AuthContext } from '../../Providers/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({children}) => {

    const location =useLocation()

    const {user,loading}=useContext(AuthContext);


    if(loading){
        return<progress className="progress w-56 mx-auto progress-secondary"></progress>
    }

    return (
        user ? <div>{ children }</div> : <Navigate to={ '/login' } state={ { from: location } } replace />
    );
};

export default PrivateRoute;