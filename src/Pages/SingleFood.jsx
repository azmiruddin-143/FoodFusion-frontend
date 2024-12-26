
import signleproduct from '../../src/assets/myorder-page-banner.jpg'
import { useContext } from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';
import { AuthContext } from '../Auth Provider/AuthProvider';
import { toast } from 'react-toastify';
import { Helmet } from 'react-helmet-async';
import { Fade } from 'react-awesome-reveal';

const SingleFood = () => {
    // const [isAvailable, setIsAvailable] = useState(false);
    const foodDetails = useLoaderData()
    const { user } = useContext(AuthContext)
    const { productName, image, category, _id, purchaseCount, quantity, price, sellerName, sellerEmail, foodorigin, description } = foodDetails
    const navigate = useNavigate()
    const chek = (e) => {
        e.preventDefault()
        if (sellerEmail === user?.email) {
            toast.error("You cannot purchase products added by your own account", {
                autoClose: 3000,

            });
            return
        } else {
            navigate(`/foodpurchase/${_id}`)
        }
    }



    return (
        <Fade duration={3000} triggerOnce >
            <div>
                <Helmet>
                    <title>FoodFusion | Details </title>
                </Helmet>
                <div
                    style={{
                        backgroundImage: `url(${signleproduct})`, backgroundColor: "#00000087",
                        backgroundBlendMode: "multiply", backgroundSize: "cover", backgroundPosition: "center", backgroundRepeat: "no-repeat"
                    }}
                    class="relative bg-gray-50 sm:h-24  h-12 lg:h-36 xl:h-52  flex items-center justify-center">

                    <h1 class="absolute inset-0 text-gray-200 text-4xl sm:text-5xl lg:text-7xl xl:text-9xl font-bold flex items-center justify-center select-none">
                        View Details
                    </h1>

                    <div class="relative bg-[#cbbe7dd6] p-2 xl:p-4 rounded-lg shadow-lg z-10">
                        <h1 class="xl:text-4xl sm:text-2xl font-bold text-black text-center">
                            View Details
                        </h1>
                    </div>
                </div>

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
                                    <p class="text-md text-gray-600 ">Description: {description}</p>
                                    <div className='space-y-2 my-1 '>
                                        <h1 className='text-sm sm:text-md xl:text-lg'> Category: {category}</h1>
                                        <h1 className='text-sm sm:text-md xl:text-lg'> Food Origin: {foodorigin}</h1>
                                        <h1 className='text-sm sm:text-md xl:text-lg'> Quantity: <span className='font-bold'>{quantity}</span></h1>
                                        <h1 className='text-sm sm:text-md xl:text-lg font-bold' > Seller Details:</h1>
                                        <h1 className='text-sm sm:text-md xl:text-lg' > Name: {sellerName}</h1>
                                        <h1 className='text-sm sm:text-md xl:text-lg'> Email: {sellerEmail}</h1>
                                        <h1 className='text-sm sm:text-md xl:text-lg'> Total Purchase: <span className='font-bold'>{purchaseCount}</span> </h1>


                                    </div>

                                    

                                    {
                                        sellerEmail === user?.email && quantity < 1 ? (
                                            <h1 className="text-red-600">You cannot buy your own product and quantity is not available</h1>
                                        ) : sellerEmail === user?.email ? (
                                            <h1 className="text-red-600">You cannot buy your own product</h1>
                                        ) : quantity < 1 ? (
                                            <h1 className="text-red-600">Not Available quantity</h1>
                                        ) : null
                                    }



                                   

                                    <button
                                        disabled={sellerEmail === user?.email || quantity < 1 || (sellerEmail === user?.email && quantity < 1)}
                                        class={`${sellerEmail === user?.email || quantity < 1 || (sellerEmail === user?.email && quantity < 1)
                                                ? "bg-[#dddada] text-[#a4a3a3] mt-4 w-5/12 font-semibold py-2 px-4 rounded-md"
                                                : "mt-4 w-5/12 bg-primary-content text-primary font-semibold py-2 px-4 rounded-md"
                                            }`}
                                    >
                                        Purchase
                                    </button>



                                </div>
                            </div>

                        </div>
                    </form>
                </div>
            </div>

        </Fade>
    );
};

export default SingleFood;