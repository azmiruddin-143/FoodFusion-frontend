
import { Link, useLoaderData } from 'react-router-dom';

const SingleFood = () => {
    const foodDetails = useLoaderData()
    const { productName, image, category, _id, PurchaseCount, quantity, price, userName, useremail, foodorigin, description } = foodDetails

    return (
        <div className='my-10 mx-2 sm:mx-0'>

            <div class="max-w-4xl mx-auto my-5 p-4 bg-white border rounded-lg shadow-md flex flex-col md:flex-row gap-5">
                {/* <!-- Left Side (Image) --> */}
                <div class="w-full md:w-2/3">
                    <img
                        src={image}
                        alt="Product Image"
                        class="rounded-md sm:w-full h-full object-cover"
                    />
                </div>
                {/* <!-- Right Side (Details) --> */}
                <div class="w-full md:w-2/3 space-y-3">
                    <h2 class="sm:text-3xl text-lg font-bold text-gray-800">{productName}</h2>
                    <p class="text-lg font-semibold my-0 text-gray-800">
                        ${price}
                    </p>
                    <p class="text-sm text-gray-600 ">{description}</p>
                    <div className='space-y-2 my-1 '>
                        <h1 className='text-sm sm:text-md xl:text-lg'> Category: {category}</h1>
                        <h1 className='text-sm sm:text-md xl:text-lg'> Quantity: <span className='font-bold'>{quantity}</span></h1>
                        <h1 className='text-sm sm:text-md xl:text-lg font-bold' > Owner Details:</h1>
                        <h1 className='text-sm sm:text-md xl:text-lg' > Name: {userName}</h1>
                        <h1 className='text-sm sm:text-md xl:text-lg'> Email: {useremail}</h1>
                        <h1 className='text-sm sm:text-md xl:text-lg'> Total Purchase: <span className='font-bold'>{PurchaseCount}</span> </h1>
                    </div>

                    <Link to={`/foodpurchase/${_id}`}>
                        <button
                            class="mt-4 w-5/12 bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded-md"
                        >
                            Purchase
                        </button>
                    </Link>

                </div>
            </div>



        </div>


    );
};

export default SingleFood;