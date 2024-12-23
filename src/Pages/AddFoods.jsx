import React, { useContext } from 'react';
import Swal from 'sweetalert2';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AuthContext } from '../Auth Provider/AuthProvider';
import axios from 'axios';
const AddFoods = () => {
    const { user } = useContext(AuthContext)
    const addFoodsForm = (e) => {
        e.preventDefault()
        const from = e.target
        const productName = from.productname.value
        const image = from.image.value
        const category = from.category.value
        const quantity = parseInt(from.quantity.value)
        const price = from.price.value
        const sellerName = from.username.value
        const sellerEmail = from.useremail.value
        const foodorigin = from.foodorigin.value
        const description = from.description.value
        const foodsObject = {productName,image,category, quantity, price, sellerName, sellerEmail, foodorigin, description, purchaseCount : 0 }


        if (!image.includes('.png') && !image.includes('.jpg')) {
            toast.error("Enter the correct image URL", {
                autoClose: 3000,
            });
            return;
        }

        if (category === "Select a Food Category") {
            toast.error("Select a Category name", {
                autoClose: 3000,
            });
            return;
        }
        if (foodorigin === "Select a Food Origin") {
            toast.error("Select a Food Origin ", {
                autoClose: 3000,
            });
            return;
        }

         
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
            <form onSubmit={addFoodsForm} className='max-w-4xl mx-auto' action="">
                <div className=' sm:flex gap-5'>
                    <div className="form-control w-full">

                        <label className="label">
                            <span className="label-text"> Food Name </span> 
                        </label>
                        <input type="text" name='productname' placeholder="Enter your productname" className="input input-bordered" required />

                    </div>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Image</span>
                        </label>
                        <input type="text" name='image' placeholder="Enter your image url" className="input input-bordered" required />
                    </div>
                </div>
                <div className='sm:flex gap-5'>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Food Category </span>
                        </label>
                        <select name="category" placeholder="Select a Category" className="select select-bordered"  required>
                            <option value="" disabled selected>Select a Food Category</option>
                            <option value="Main Courses">Main Courses</option>
                            <option value="Desserts">Desserts</option>
                            <option value="Beverages">Beverages</option>
                            <option value="Non-Vegetarian">Non-Vegetarian</option>
                            <option value="Salads">Salads</option>
                            <option value="Snacks">Snacks</option>
                        </select>
                    </div>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Quantity</span>
                        </label>
                        <input type="number" name='quantity' placeholder="Enter your product quantity" className="input input-bordered" required />
                    </div>
                </div>
                <div className='sm:flex gap-5'>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Price</span>
                        </label>
                        <input type="number" name='price' placeholder="Enter your product price" className="input input-bordered" required />
                    </div>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Seller Name</span>
                        </label>
                        <input type="text"
                            name='username' value={user?.displayName} placeholder="Enter your product quantity" className="input input-bordered" required />
                    </div>
                </div>
                <div className='sm:flex gap-5'>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Seller Email</span>
                        </label>
                        <input type="email" value={user?.email}  name='useremail' placeholder="Enter your product quantity" className="input input-bordered" required />


                    </div>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Food Origin (Country)</span>
                        </label>
                        <select id="country" name="foodorigin" placeholder="Select a Food Origin" className='select select-bordered' required>
                            <option value="" disabled selected>Select a Food Origin</option>
                            <option value="Bangladesh">Bangladesh</option>
                            <option value="India">India</option>
                            <option value="United States">United States</option>
                            <option value="United Kingdom">United Kingdom</option>
                            <option value="China">China</option>
                            <option value="Japan">Japan</option>
                        </select>
                    </div>
                </div>


                <div className="form-control w-full">
                    <label className="label">
                        <span className="label-text">Descripsion</span>
                    </label>
                    <textarea
                        placeholder="ingredients, making procedure, etc. "
                        name='description'
                        rows="1"
                        className="w-full py-2 px-4 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                    ></textarea>
                </div>

                <div className='w-full'>
                    <button className='bg-[#baf120] text-black font-bold w-full py-2 px-3 my-5 rounded-lg'>Add Item</button>
                </div>
            </form>
        </div>
    );
};

export default AddFoods;