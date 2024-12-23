import React, { useContext } from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { AuthContext } from '../Auth Provider/AuthProvider';
import axios from 'axios';
import { toast } from 'react-toastify';

const FoodPurchase = () => {

    const purchaseDetails = useLoaderData()
    const { productName, _id, purchaseCount, image,category, quantity, price, userName, useremail, } = purchaseDetails
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
        const purchaseObject = { productName, buyerName, buyerEmail,category, image, price,purchaseCount, foodquantity, purchaseId: _id, seller:useremail, buyingDate: Date.now() }

        if (foodquantity > quantity) {
            toast.error(`item is not available!`, {
                autoClose: 3000,
            });
            return
        }


    

        axios.post('http://localhost:5000/purchase', purchaseObject)
            .then(result => {
                console.log(result.data);
                if (result.data.insertedId) {
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
        <div className='my-10 mx-10 '>
            <form onSubmit={PurchaseForm} className='max-w-md mx-auto' action="">

                <div className="form-control w-full">
                    <label className="label">
                        <span className="label-text"> Food Name </span>
                    </label>
                    <input type="text" value={productName} name='productname' placeholder="Enter your productname" className="input input-bordered" required />
                </div>

                <div className="form-control w-full">
                    <label className="label">
                        <span className="label-text">Price</span>
                    </label>
                    <input type="number" value={price} name='price' placeholder="Enter your product price" className="input input-bordered" required />
                </div>

                <div className="form-control w-full">
                    <label className="label">
                        <span className="label-text">Food Quantity</span>
                    </label>
                    <input type="number"  name='foodquantity' placeholder="Enter your product quantity" className="input input-bordered" required />
                    
                </div>


                <div className="form-control w-full">
                    <label className="label">
                        <span className="label-text">Buyer Name</span>
                    </label>
                    <input type="text"
                        name='buyerName' value={user?.displayName} placeholder="Enter your product quantity" className="input input-bordered" required />
                </div>

                <div className="form-control w-full">
                    <label className="label">
                        <span className="label-text">Buyer Email</span>
                    </label>
                    <input type="email" value={user?.email} name='buyerEmail' placeholder="Enter your product quantity" className="input input-bordered" required />


                </div>


                <div className='w-full'>
                    <button  className={'bg-[#baf120] text-black font-bold w-full py-2 px-3 my-5 rounded-lg'}>Purchase</button>
                </div>
            </form>
            
        </div>
    );
};

export default FoodPurchase;