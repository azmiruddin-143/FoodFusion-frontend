import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../Auth Provider/AuthProvider';
import axios from 'axios';
import MyFoodCard from './MyFoodCard';
import myfoodbanner from '../../src/assets/myfood-banner.jpg'

const MyFoods = () => {
    const { user } = useContext(AuthContext)
    const [myFoods, setMyFoods] = useState([])
    useEffect(() => {
        axios.get(`http://localhost:5000/foods/${user?.email}`)
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

        <div>
            <div
                style={{
                    backgroundImage: `url(${myfoodbanner})`, backgroundColor: "#00000087",
                    backgroundBlendMode: "multiply", backgroundSize: "cover", backgroundPosition: "center", backgroundRepeat: "no-repeat"
                }}
                class="relative bg-gray-50 h-36 lg:h-52  flex items-center justify-center">

                <h1 class="absolute inset-0 text-gray-200 sm:text-6xl lg:text-9xl font-bold flex items-center justify-center select-none">
                    My Food
                </h1>

                <div class="relative bg-white p-3 lg:p-6 rounded-lg shadow-lg z-10">
                    <h1 class="lg:text-4xl sm:text-2xl font-bold text-primary text-center">
                    My Food
                    </h1>
                </div>
            </div>
            <div className=' sm:grid-cols-2 max-w-7xl gap-8 my-16 place-items-center mx-auto grid xl:grid-cols-3 lg:grid-cols-3 grid-cols-1 '>

                {
                    myFoods.map(myfood => <MyFoodCard key={myfood._id} myfood={myfood} updateFoodList={updateFoodList} ></MyFoodCard>)
                }

            </div>

        </div>

    );
};

export default MyFoods;