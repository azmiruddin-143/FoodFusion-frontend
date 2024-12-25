import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../Auth Provider/AuthProvider';
import Loader from './Loader';

const PrivateRoot = ({children}) => {
    const {user,loader} = useContext(AuthContext)
    const location = useLocation()
 
    if(loader){
        return <Loader></Loader>
    }
    if(user){
        return children;
    }
    return (
        <div>
           <Navigate state={location.pathname} to="/login"></Navigate>
        </div>
    );
};

export default PrivateRoot;