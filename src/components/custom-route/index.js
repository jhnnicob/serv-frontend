import React from 'react';
import {Redirect} from 'react-router-dom';

export default function PrivateRoute({children}) {

    const isAuthenticated = localStorage.getItem('token')
    
    return isAuthenticated ? (
        <>{children}</>
    ) : (
        <Redirect to={{
            pathname: './signin'
        }} />
    );
}
