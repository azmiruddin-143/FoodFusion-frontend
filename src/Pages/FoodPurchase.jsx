import React, { useContext } from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { AuthContext } from '../Auth Provider/AuthProvider';
import axios from 'axios';
import { toast } from 'react-toastify';
import purchesebanner from '../../src/assets/purchese-banner.jpg'
import { Helmet } from 'react-helmet-async';
import { Fade } from 'react-awesome-reveal';
const FoodPurchase = () => {

    const purchaseDetails = useLoaderData()
    const { productName, _id, purchaseCount, image, category, quantity, price, userName, useremail, sellerEmail, } = purchaseDetails
    console.log(sellerEmail);
    const { user } = useContext(AuthContext)
    const navigate = useNavigate()

    const PurchaseForm = (e) => {
        e.preventDefault()
        const from = e.target
        const productName = from.productname.value
        const buyerName = from.buyerName.value
        const buyerEmail = from.buyerEmail.value
        const price = from.price.value
        const foodquantity = parseInt(from.foodquantity.value)
        const purchaseObject = { productName, buyerName, buyerEmail, category, image, price, purchaseCount, foodquantity, purchaseId: _id,  sellerEmail, buyingDate: Date.now() }

        if (foodquantity > quantity) {
            toast.error(`item is not available!`, {
                autoClose: 3000,
            });
            return
        }


        axios.post('https://server-food-ochre.vercel.app/purchase', purchaseObject)
            .then(result => {
                console.log(result.data);
                if (result.data.purchaseData) {
                    Swal.fire({
                        title: "Successful Order",
                        icon: "success"
                    });
                    from.reset()
                    navigate('/myorders')
                }
            })
    }


    return (
        <Fade duration={3000} triggerOnce >
        <div>
            <Helmet>
                <title>FoodFusion | Purchase </title>
            </Helmet>
            <div
                style={{
                    backgroundImage: `url(${purchesebanner})`, backgroundColor: "#00000087",
                    backgroundBlendMode: "multiply", backgroundSize: "cover", backgroundPosition: "center", backgroundRepeat: "no-repeat"
                }}
                class="relative bg-gray-50 sm:h-24  h-12 lg:h-36 xl:h-52  flex items-center justify-center">

                <h1 class="absolute inset-0 text-gray-200 text-4xl sm:text-5xl lg:text-7xl xl:text-9xl font-bold flex items-center justify-center select-none">
                    Food Purchase
                </h1>

                <div class="relative bg-[#cbbe7dd6] p-2 xl:p-4 rounded-lg shadow-lg z-10">
                    <h1 class="xl:text-4xl sm:text-2xl font-bold text-black text-center">
                    Food Purchase
                    </h1>
                </div>
            </div>
            <div className='my-10 sm:mx-10 mx-2 '>
                <form onSubmit={PurchaseForm} className='max-w-md mx-auto p-5 rounded-md  bg-base-300' action="">

                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text text-neutral"> Food Name </span>
                        </label>
                        <input type="text" value={productName} name='productname' placeholder="Enter your productname" className="input input-bordered" required />
                    </div>

                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text text-neutral">Price</span>
                        </label>
                        <input type="number" value={price} name='price' placeholder="Enter your product price" className="input input-bordered" required />
                    </div>

                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text text-neutral">Food Quantity</span>
                        </label>
                        <input type="number" name='foodquantity' placeholder="Enter your product quantity" className="input input-bordered" required />

                    </div>


                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text text-neutral">Buyer Name</span>
                        </label>
                        <input type="text"
                            name='buyerName' value={user?.displayName} placeholder="Enter your product quantity" className="input input-bordered" required />
                    </div>

                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text text-neutral">Buyer Email</span>
                        </label>
                        <input type="email" value={user?.email} name='buyerEmail' placeholder="Enter your product quantity" className="input input-bordered" required />


                    </div>


                    <div className='w-full'>
                        <button className={'bg-primary-content text-primary font-bold w-full py-2 px-3 my-5 rounded-lg'}>Purchase</button>
                    </div>
                </form>

            </div>
        </div>
        </Fade>
    );
};

export default FoodPurchase;