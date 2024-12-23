

import { useContext } from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';
import { AuthContext } from '../Auth Provider/AuthProvider';
import { toast } from 'react-toastify';

const SingleFood = () => {
    // const [isAvailable, setIsAvailable] = useState(false);
    const foodDetails = useLoaderData()
    const { user } = useContext(AuthContext)
    const { productName, image, category, _id, purchaseCount, quantity, price, sellerName, sellerEmail, foodorigin, description } = foodDetails
    const navigate = useNavigate()
    const chek = (e) => {
        e.preventDefault()
        if (sellerEmail === user?.email) {
            toast.error("Apnar nijer acount diye hobe na", {
                autoClose: 3000,

            });
            return
        } else {
            navigate(`/foodpurchase/${_id}`)
        }
    }



    return (

        <div>
            <form onSubmit={chek} action="">
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
                                <h1 className='text-sm sm:text-md xl:text-lg'> Food Origin: {foodorigin}</h1>
                                <h1 className='text-sm sm:text-md xl:text-lg'> Quantity: <span className='font-bold'>{quantity}</span></h1>
                                <h1 className='text-sm sm:text-md xl:text-lg font-bold' > Seller Details:</h1>
                                <h1 className='text-sm sm:text-md xl:text-lg' > Name: {sellerName}</h1>
                                <h1 className='text-sm sm:text-md xl:text-lg'> Email: {sellerEmail}</h1>
                                <h1 className='text-sm sm:text-md xl:text-lg'> Total Purchase: <span className='font-bold'>{purchaseCount}</span> </h1>


                            </div>

                            {quantity === 0 && <h1 className='text-red-600'>Not Abilebel quantity</h1>}
                            <button disabled={quantity === 0}
                                class={`${quantity === 0 ? "bg-[#dddada] text-[#a4a3a3] mt-4 w-5/12 font-semibold py-2 px-4 rounded-md" : 'mt-4 w-5/12 bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded-md'}`}
                            >
                                Purchase
                            </button>
                        </div>
                    </div>

                </div>
            </form>
        </div>


    );
};

export default SingleFood;