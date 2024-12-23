import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../Auth Provider/AuthProvider';
import axios from 'axios';
import MyOrdersTable from './MyOrdersTable';

const MyOrders = () => {
    const { user } = useContext(AuthContext)
    const [myOrder, setMyOrder] = useState([])
    useEffect(() => {
        axios.get(`http://localhost:5000/purchase/${user?.email}`)
            .then(result => {
                setMyOrder(result.data)
            })
    }, [user?.email])


    return (
        <div>
            <div className=" overflow-x-auto max-w-7xl mx-auto">
                <table className="table">
                    <thead>
                        <tr className='text-lg text-center text-black'>
                            <th></th>
                            <th>Name</th>
                            <th>Category</th>
                            <th>Price</th>
                            <th>Owner</th>
                            <th>Total Purchase</th>
                            <th>Date</th>
                            <th>Action</th>

                        </tr>
                    </thead>
                    {
                        myOrder.map((myOrder, index) =>
                            <MyOrdersTable myOrder={myOrder} index={index} ></MyOrdersTable>
                        )
                    }
                </table>
            </div>
        </div>
    );
};

export default MyOrders;