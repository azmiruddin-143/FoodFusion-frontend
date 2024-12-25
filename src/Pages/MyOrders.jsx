import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../Auth Provider/AuthProvider';
import myorderpage from '../../src/assets/myorder-page-banner.jpg'
import axios from 'axios';
import MyOrdersTable from './MyOrdersTable';
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';
import useAxiosSecure from '../Axios secure/useAxiosSecure';
import { Helmet } from 'react-helmet-async';
import { Fade } from 'react-awesome-reveal';

const MyOrders = () => {
    const { user } = useContext(AuthContext)
    const [myOrder, setMyOrder] = useState([])
    const axiosSecure = useAxiosSecure()
    useEffect(() => {
        axiosSecure.get(`/purchase/${user?.email}`)
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
            confirmButtonColor: "red",
            cancelButtonColor: "#0e1927",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {

            if (result.isConfirmed) {

                axios.delete(`https://server-food-ochre.vercel.app/foodpurchase/${id}`)
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
        <Fade duration={3000} triggerOnce >
        <div>
            <Helmet>
                <title>FoodFusion | My Order </title>
            </Helmet>

            <div
                style={{
                    backgroundImage: `url(${myorderpage})`, backgroundColor: "#00000087",
                    backgroundBlendMode: "multiply", backgroundSize: "cover", backgroundPosition: "center", backgroundRepeat: "no-repeat"
                }}
                class="relative bg-gray-50 sm:h-24  h-12 lg:h-36 xl:h-52  flex items-center justify-center">

                <h1 class="absolute inset-0 text-gray-200 text-4xl sm:text-5xl lg:text-7xl xl:text-9xl font-bold flex items-center justify-center select-none">
                    My Orders
                </h1>

                <div class="relative bg-[#cbbe7dd6] p-2 xl:p-4 rounded-lg shadow-lg z-10">
                    <h1 class="xl:text-4xl sm:text-2xl font-bold text-black text-center">
                    My Orders
                    </h1>
                </div>
            </div>
            <div className=" overflow-x-auto max-w-7xl mx-auto my-10">
                <table className="table">
                    {
                        myOrder.length > 0 &&
                        <thead>
                            <tr className='text-lg text-center text-neutral'>
                                <th></th>
                                <th>Name</th>
                                <th>Category</th>
                                <th>Price</th>
                                <th>Owner</th>
                                <th>Food Quantity</th>
                                <th>Date</th>
                                <th>Action</th>

                            </tr>
                        </thead>

                    }

                    {myOrder.length === 0 &&
                        <div className="flex justify-center my-5">
                            <div>
                                <h1 className='text-4xl py-3 text-neutral'>No Data Found ?</h1>
                                <Link to={'/allfoods'} > <button className='py-2 my-3 px-6 bg-primary-content text-primary rounded-md'>Purchase Food</button> </Link>
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
        </Fade>
    );
};

export default MyOrders;