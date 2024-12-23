import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../Auth Provider/AuthProvider';
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
            <div className=" overflow-x-auto max-w-7xl mx-auto">
                <table className="table">
                    {
                        myOrder.length >0 &&
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
                                <Link to={'/allfoods'} > <button className='py-2 my-3 px-6 bg-[#9dc923] rounded-md'>Purchase Food</button> </Link>
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