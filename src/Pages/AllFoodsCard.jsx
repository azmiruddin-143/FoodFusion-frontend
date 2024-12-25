import React from 'react';
import { Link } from 'react-router-dom';
const AllFoodsCard = ({food}) => {
    const {productName,image,category, _id, purchaseCount,price,} = food
    return (

        <div class="max-w-sm mx-auto h-[420px] bg-info border p-4 rounded-lg shadow-lg hover:shadow-xl transition-shadow">

            <div class="relative -mt-14">
                <img
                    src={image}
                    class=" mx-auto shadow-lg w-[400px] h-64 object-cover rounded-md"
                />
            </div>

            <div class="py-4">

                <h2 class="text-xl font-semibold text-neutral">{productName}</h2>


                <div class="flex space-x-2 my-3">
                    <span class="bg-secondary  px-2 py-1 text-sm rounded-full">{category}</span>
                </div>

                <span class="text-lg font-bold text-neutral">Total Purchase: {purchaseCount}</span>
                <div class="flex justify-between items-center">
                    <span class="text-lg font-bold text-neutral">${price}</span>
                    <Link to={`/singlefood/${_id}`} ><button class="bg-primary-content text-primary px-4 py-2 rounded-lg shadow  focus:outline-none focus:ring-2  focus:ring-offset-2">
                        View Details
                    </button></Link>
                </div>
            </div>
        </div>
    );
};

export default AllFoodsCard;