import React from 'react';
import { Link } from 'react-router-dom';

const TopSellingCard = ({ topSelling }) => {
    const { productName, image, category, _id, purchaseCount, price, } = topSelling
    return (
        <div class="max-w-md p-4">
            <div class="bg-white rounded-lg p-2 shadow-lg overflow-hidden">
                
            <div class="relative">
                    <div class="absolute top-2 left-2 bg-secondary text-black text-xs font-semibold py-1 px-2 rounded-full">
                    Top selling
                    </div>
                </div>

                <img class="w-[400px] h-64 object-cover rounded-md" src={image} alt="Chek Trouser" />

                <div class="p-2">
                    <h1 class="text-2xl font-semibold pb-1 text-gray-800">{productName}</h1>
                    <p class="text-md text-gray-600">{category}</p>
                    <p class="text-md text-gray-600 py-1"> Total Purchase: <span className='font-bold text-black'>{purchaseCount}</span> </p>
                    <div class="flex items-center mt-1">
                        <span class="text-xl font-bold text-gray-900"> ${price}</span>
                    </div>


                    {/* <!-- Order Button --> */}
                    <Link to={`/singlefood/${_id}`} > <button class="mt-4 w-full py-2 px-4 bg-primary text-white font-semibold rounded-md">
                        View Details
                    </button></Link>
                </div>
            </div>
        </div>
    );
};

export default TopSellingCard;