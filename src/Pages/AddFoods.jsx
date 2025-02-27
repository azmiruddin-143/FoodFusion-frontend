import React, { useContext } from 'react';
import addfoodbanner from '../../src/assets/add-food-banner.jpg'
import Swal from 'sweetalert2';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AuthContext } from '../Auth Provider/AuthProvider';
import axios from 'axios';
import { Helmet } from 'react-helmet-async';
import { Fade } from 'react-awesome-reveal';
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
        const foodsObject = { productName, image, category, quantity, price, sellerName, sellerEmail, foodorigin, description, purchaseCount: 0 }


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


        axios.post('https://server-food-ochre.vercel.app/foods', foodsObject)
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
                    from.foodorigin.value = "";
                }
            })


    }


    return (
        <Fade duration={3000} triggerOnce >
        <div className=''>
            <Helmet>
                <title>FoodFusion | Add Food </title>
            </Helmet>
            <div
                style={{
                    backgroundImage: `url(${addfoodbanner})`, backgroundColor: "#00000087",
                    backgroundBlendMode: "multiply", backgroundSize: "cover", backgroundPosition: "center", backgroundRepeat: "no-repeat"
                }}
                class="relative bg-gray-50 sm:h-24  h-12 lg:h-36 xl:h-52  flex items-center justify-center">

                <h1 class="absolute inset-0 text-gray-200 text-4xl sm:text-5xl lg:text-7xl xl:text-9xl font-bold flex items-center justify-center select-none">
                    Add Food
                </h1>

                <div class="relative bg-[#cbbe7dd6] p-2 xl:p-4 rounded-lg shadow-lg z-10">
                    <h1 class="xl:text-4xl sm:text-2xl font-bold text-black text-center">
                    Add Food
                    </h1>
                </div>
            </div>

            <form onSubmit={addFoodsForm} className='max-w-4xl px-4 lg:px-0 mx-auto sm:my-8 my-7' action="">
                <div className=' sm:flex gap-5'>
                    <div className="form-control w-full">

                        <label className="label">
                            <span className="label-text text-neutral"> Food Name </span>
                        </label>
                        <input type="text" name='productname' placeholder="Enter your productname" className="input input-bordered" required />

                    </div>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text text-neutral">Image</span>
                        </label>
                        <input type="text" name='image' placeholder="Enter your image url" className="input input-bordered" required />
                    </div>
                </div>
                <div className='sm:flex gap-5'>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text text-neutral">Food Category </span>
                        </label>
                        <select name="category" placeholder="Select a Category" className="select select-bordered" required>
                            <option value="" disabled selected>Select a Food Category</option>
                            <option value="Main Courses">Main Courses</option>
                            <option value="Desserts">Desserts</option>
                            <option value="Beverages">Beverages</option>
                            <option value="Street Food">Street Food</option>
                            <option value="Salads">Salads</option>
                            <option value="Snacks">Snacks</option>
                        </select>
                    </div>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text text-neutral">Quantity</span>
                        </label>
                        <input type="number" name='quantity' placeholder="Enter your product quantity" className="input input-bordered" required />
                    </div>
                </div>
                <div className='sm:flex gap-5'>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text text-neutral">Price</span>
                        </label>
                        <input type="number" name='price' placeholder="Enter your product price" className="input input-bordered" required />
                    </div>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text text-neutral">Seller Name</span>
                        </label>
                        <input type="text"
                            name='username' value={user?.displayName} placeholder="Enter your product quantity" className="input input-bordered" required />
                    </div>
                </div>
                <div className='sm:flex gap-5'>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text text-neutral">Seller Email</span>
                        </label>
                        <input type="email" value={user?.email} name='useremail' placeholder="Enter your product quantity" className="input input-bordered" required />


                    </div>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text text-neutral">Food Origin (Country)</span>
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
                        <span className="label-text text-neutral">Descripsion</span>
                    </label>
                    <textarea
                        placeholder="ingredients, making procedure, etc. "
                        name='description'
                        rows="1"
                        className="w-full py-2 px-4 border border-black rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                    ></textarea>
                </div>

                <div className='w-full'>
                    <button className='bg-primary-content text-primary font-bold w-full py-2 px-3 my-5 rounded-lg'>Add Item</button>
                </div>
            </form>
        </div>
        </Fade>
    );
};

export default AddFoods;