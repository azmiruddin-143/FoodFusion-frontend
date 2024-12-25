
import axios from 'axios';
import React, { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../Auth Provider/AuthProvider';

const axiosInstance = axios.create({
    baseURL: 'https://server-food-ochre.vercel.app',
    withCredentials: true
});


const useAxiosSecure = () => {
    const {userLogout} = useContext(AuthContext)
    const navigate = useNavigate()
    useEffect(() => {
        axiosInstance.interceptors.response.use(
            (response) => {
                return response;
            },
            
            (error) => {
                console.log('error caugth in interceptor');
                if (error.status === 401 || error.status === 403) {
                    console.log('need to logout the user');
                    userLogout()
                    .then(() =>{
                        console.log('logged out user');
                        navigate('/login')
                    })
                    .catch((error) => console.log(error))
                }
                return Promise.reject(error);
            }
        );
    },[])
    return axiosInstance
};

export default useAxiosSecure;