import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../Auth Provider/AuthProvider';
import axios, { Axios } from 'axios';
import MyFoodCard from './MyFoodCard';
import myfoodbanner from '../../src/assets/myfood-banner.jpg'
import useAxiosSecure from '../Axios secure/useAxiosSecure';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Fade } from 'react-awesome-reveal';

const MyFoods = () => {

    const { user } = useContext(AuthContext)
    const [myFoods, setMyFoods] = useState([])
    const axiosSecure = useAxiosSecure()
    useEffect(() => {
        axiosSecure.get(`/foods/${user?.email}`)
            .then(result => {
                setMyFoods(result.data)
            })
    }, [user?.email])
    // Function to update the food list after modification
    const updateFoodList = (updatedFood) => {
        setMyFoods((prevFoods) =>
            prevFoods.map((food) =>
                food._id === updatedFood._id ? updatedFood : food
            )
        );
    };


    return (
        <Fade duration={3000} triggerOnce >
            <div>
                <Helmet>
                    <title>FoodFusion | My Foods </title>
                </Helmet>
                <div
                    style={{
                        backgroundImage: `url(${myfoodbanner})`, backgroundColor: "#00000087",
                        backgroundBlendMode: "multiply", backgroundSize: "cover", backgroundPosition: "center", backgroundRepeat: "no-repeat"
                    }}
                    class="relative bg-gray-50 sm:h-24  h-12 lg:h-36 xl:h-52  flex items-center justify-center">

                    <h1 class="absolute inset-0 text-gray-200 text-4xl sm:text-5xl lg:text-7xl xl:text-9xl font-bold flex items-center justify-center select-none">
                        My Foods
                    </h1>

                    <div class="relative bg-[#cbbe7dd6] p-2 xl:p-4 rounded-lg shadow-lg z-10">
                        <h1 class="xl:text-4xl sm:text-2xl font-bold text-black text-center">
                            My Foods
                        </h1>
                    </div>
                </div>

                {myFoods.length === 0 &&
                    <div className="flex h-screen  justify-center my-5">
                        <div>
                            <h1 className='text-4xl py-3 text-neutral'>No Data Found ?</h1>
                            <Link to={'/addfood'} > <button className='py-2 my-3 px-6 bg-primary-content text-primary rounded-md'>Add Food</button> </Link>
                        </div>
                    </div>
                }

                <div className=' sm:grid-cols-2 2xl:mx-52 mx-5 xl:mx-10 gap-3 md:my-16 my-4 place-items-center gap-y-10  grid xl:grid-cols-3 lg:grid-cols-3 grid-cols-1'>
                    {
                        myFoods.map(myfood => <MyFoodCard key={myfood._id} myfood={myfood} updateFoodList={updateFoodList} ></MyFoodCard>)
                    }

                </div>

            </div>
        </Fade>
    );
};

export default MyFoods;