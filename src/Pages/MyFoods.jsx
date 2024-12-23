import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../Auth Provider/AuthProvider';
import axios from 'axios';
import MyFoodCard from './MyFoodCard';


const MyFoods = () => {
    const { user } = useContext(AuthContext)
    const [myFoods, setMyFoods] = useState([])
    console.log(myFoods);
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

        <div className=' sm:grid-cols-2 max-w-7xl gap-8 mt-8 place-items-center mx-auto grid xl:grid-cols-3 lg:grid-cols-3 grid-cols-1 '>

            {
                myFoods.map(myfood => <MyFoodCard key={myfood._id} myfood={myfood} updateFoodList={updateFoodList} ></MyFoodCard>)
            }

        </div>


    );
};

export default MyFoods;