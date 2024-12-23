import React from 'react';
import { Link } from 'react-router-dom';
const AllFoodsCard = ({food}) => {
    const {productName,image,category, _id, purchaseCount,price,} = food
    return (

        <div class="max-w-sm mx-auto h-[450px]  bg-[#7f6d6d] p-4 rounded-lg shadow-lg hover:shadow-xl transition-shadow">

            <div class="relative -mt-10">
                <img
                    src={image}
                    class="rounded-lg mx-auto shadow-lg"
                />
            </div>

            <div class="py-4">

                <h2 class="text-xl font-semibold text-gray-800">{productName}</h2>


                <div class="flex space-x-2 my-3">
                    <span class="bg-green-100 text-green-700 px-2 py-1 text-sm rounded-full">{category}</span>
                </div>

                <span class="text-lg font-bold text-gray-800">Total Purchase: {purchaseCount}</span>
                <div class="flex justify-between items-center">
                    <span class="text-lg font-bold text-gray-800">${price}</span>
                    <Link to={`/singlefood/${_id}`} ><button class="bg-green-500 text-white px-4 py-2 rounded-lg shadow hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-offset-2">
                        View Details
                    </button></Link>
                </div>
            </div>
        </div>
    );
};

export default AllFoodsCard;