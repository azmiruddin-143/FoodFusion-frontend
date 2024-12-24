import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../Auth Provider/AuthProvider';
import myorderpage from '../../src/assets/myorder-page-banner.jpg'
import axios from 'axios';
import MyOrdersTable from './MyOrdersTable';
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';

const MyOrders = () => {
    const { user } = useContext(AuthContext)
    const [myOrder, setMyOrder] = useState([])
    useEffect(() => {
        axios.get(`http://localhost:5000/purchase/${user?.email}`)
            .then(result => {
                setMyOrder(result.data)
            })
    }, [user?.email])



    const foodDilet = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#9dc923",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {

            if (result.isConfirmed) {

                axios.delete(`http://localhost:5000/foodpurchase/${id}`)
                    .then(result => {
                        if (result.data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your Equipment has been deleted.",
                                icon: "success"
                            });
                        }

                        const remainingFoods = myOrder.filter(
                            (myOrder) => myOrder._id !== id
                        );
                        setMyOrder(remainingFoods);
                    })

            }
        });

    }



    return (
        <div>

            <div
                style={{
                    backgroundImage: `url(${myorderpage})`, backgroundColor: "#00000087",
                    backgroundBlendMode: "multiply", backgroundSize: "cover", backgroundPosition: "center", backgroundRepeat: "no-repeat"
                }}
                class="relative bg-gray-50 h-36 lg:h-52  flex items-center justify-center">

                <h1 class="absolute inset-0 text-gray-200 sm:text-6xl lg:text-9xl font-bold flex items-center justify-center select-none">
                    My Orders
                </h1>

                <div class="relative bg-white p-3 lg:p-6 rounded-lg shadow-lg z-10">
                    <h1 class="lg:text-4xl sm:text-2xl font-bold text-primary text-center">
                    My Orders
                    </h1>
                </div>
            </div>
            <div className=" overflow-x-auto max-w-7xl mx-auto my-10">
                <table className="table">
                    {
                        myOrder.length > 0 &&
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

                    }

                    {myOrder.length === 0 &&
                        <div className="flex justify-center my-5">
                            <div>
                                <h1 className='text-4xl py-3'>No Data Found ?</h1>
                                <Link to={'/allfoods'} > <button className='py-2 my-3 px-6 bg-primary text-white rounded-md'>Purchase Food</button> </Link>
                            </div>
                        </div>
                    }




                    {
                        myOrder.map((myOrder, index) =>
                            <MyOrdersTable myOrder={myOrder} foodDilet={foodDilet} index={index} ></MyOrdersTable>
                        )
                    }
                </table>
            </div>
        </div>
    );
};

export default MyOrders;