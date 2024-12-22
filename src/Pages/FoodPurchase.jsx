import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';
import { AuthContext } from '../Auth Provider/AuthProvider';

const FoodPurchase = () => {

  const purchaseDetails = useLoaderData()
  const { productName, image, category, _id, PurchaseCount, quantity, price, userName, useremail, foodorigin, description } = purchaseDetails
  const {user} = useContext(AuthContext)
  const PurchaseForm = (e) => {
    e.preventDefault()
    const from = e.target
    const productName = from.productname.value
    const buyerName = from.buyerName.value
    const buyerEmail = from.buyerEmail.value
    const price = from.price.value
    const foodquantity = parseInt(from.foodquantity.value)
    const userName = user?.displayName
    const userEmail = user?.email
    const foodsObject = {productName, buyerName,buyerEmail, price,foodquantity, userName, userEmail,  }

     
    axios.post('http://localhost:5000/foods',foodsObject)
    .then(result => {
        console.log(result.data);
        if (result.data.insertedId) {
            Swal.fire({
                title: "Post SuccessFull",
                text: "Successfully adding a food item",
                icon: "success"
            });

            from.reset()
            from.category.value = "";
            from.foodorigin.value ="";

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
                    <input type="text" value={productName}  name='productname' placeholder="Enter your productname" className="input input-bordered" required />
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
                    <input type="number" name='foodquantity' placeholder="Enter your product quantity" className="input input-bordered" required />
                </div>


                
                <div className="form-control w-full">
                    <label className="label">
                        <span className="label-text">Buyer Name</span>
                    </label>
                    <input type="text"
                        name='buyerName' value={userName}  placeholder="Enter your product quantity" className="input input-bordered" required />
                </div>

                <div className="form-control w-full">
                    <label className="label">
                        <span className="label-text">Buyer Email</span>
                    </label>
                    <input type="buyerEmail" value={useremail} name='useremail' placeholder="Enter your product quantity" className="input input-bordered" required />


                </div>

                <div className='w-full'>
                    <button className='bg-[#baf120] text-black font-bold w-full py-2 px-3 my-5 rounded-lg'>Purchase</button>
                </div>
            </form>
        </div>
    );
};

export default FoodPurchase;