import React, { useContext, useState } from 'react';
import { AuthContext } from '../Auth Provider/AuthProvider';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import axios from 'axios';

const MyFoodCard = ({ myfood, updateFoodList }) => {
    const { user } = useContext(AuthContext)
    const [isModalOpen, setIsModalOpen] = useState(false); // মডালের স্টেট
    const { productName, image, category, _id, purchaseCount, price, description, foodorigin, quantity } = myfood

    const handleModalOpen = () => {
        setIsModalOpen(true);
    };

    const handleModalClose = () => {
        setIsModalOpen(false);
    };

    const handleFormSubmit = (event) => {
        event.preventDefault();
        // handleModalClose();
        const from = event.target
        const productName = from.productname.value
        const image = from.image.value
        const description = from.description.value
        const quantity = from.quantity.value
        const category = from.category.value
        const foodorigin = from.foodorigin.value
        const price = from.price.value
        const updateObject = { productName, image, description, quantity, category,foodorigin, price }

        axios.put(`http://localhost:5000/myfoods/${_id}`, updateObject)
            .then(result => {
                console.log(result.data);
                if (result.data.modifiedCount > 0) {
                    Swal.fire({
                        title: "Post SuccessFull",
                        text: "Successfully adding a food item",
                        icon: "success"
                    });
                    handleModalClose();
                    from.reset()
                    updateFoodList({
                        ...myfood, // Spread the current food data
                        ...updateObject, // Update with the new data
                    });
                }
            })

    };
    return (
        <div class="max-w-sm mx-auto bg-white border rounded-lg shadow-md overflow-hidden md:max-w-md lg:max-w-lg">
            <div class="relative">
                <img
                    src={image}
                    class=" w-[400px] h-64 object-cover"
                />
                <div class="absolute top-2 right-2 bg-white rounded-full p-1 shadow">
                    <img className='w-8 rounded-full ' src={user?.photoURL} alt="" />
                </div>
            </div>
            <div class="p-4">
                <h2 class="text-2xl font-bold text-gray-800 mb-2">{productName}</h2>
                <p class="text-gray-600 text-sm mb-2">
                    {description}
                </p>
                <span class="py-2 text-lg mb-3 ">Quantity: <span className='font-bold'>{quantity}</span> </span>
                <div class="flex space-x-2 my-4">
                    <span class="px-3 py-1 text-sm bg-gray-200 rounded-full">Category: {category}</span>
                    <span class="px-3 py-1 text-sm bg-gray-200 rounded-full">Food Origin: {foodorigin}</span>
                    {/* <span class="px-3 py-1 text-sm bg-gray-200 rounded-full">Quantity: {quantity}</span> */}
                </div>
                <div class="flex justify-between items-center">
                    <span class="text-lg font-bold">${price}</span>
                    <Link >
                        <button onClick={handleModalOpen} class="bg-secondary text-black font-bold px-4 py-2 rounded-lg ">
                            Update
                        </button>
                    </Link>
                </div>

                {/* modal */}

                {isModalOpen && (
                    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
                        <div className="modal-box">
                            <button onClick={handleModalClose} className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                                ✕
                            </button>
                            <h3 className="font-bold text-lg">Update Product Information</h3>
                            <form onSubmit={handleFormSubmit}>
                                {/* Food Name Input */}
                                <div className="form-control w-full">
                                    <label className="label">
                                        <span className="label-text">Food Name</span>
                                    </label>
                                    <input
                                        type="text"
                                        name="productname"
                                        defaultValue={productName}
                                        className="input input-bordered"
                                        required
                                    />
                                </div>

                                <div className="form-control w-full">
                                    <label className="label">
                                        <span className="label-text">Image</span>
                                    </label>
                                    <input type="text" name='image' defaultValue={image} placeholder="Enter your image url" className="input input-bordered" required />
                                </div>

                                {/* Description */}
                                <div className="form-control w-full">
                                    <label className="label">
                                        <span className="label-text">Description</span>
                                    </label>
                                    <textarea
                                        name="description"
                                        defaultValue={description}
                                        className="w-full py-2 px-4 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    ></textarea>
                                </div>

                                {/* Food Quantity */}
                                <div className="form-control w-full">
                                    <label className="label">
                                        <span className="label-text">Food Quantity</span>
                                    </label>
                                    <input
                                        type="number"
                                        name="quantity"
                                        defaultValue={quantity}
                                        className="input input-bordered"
                                        required
                                    />
                                </div>

                                {/* Category */}
                                <div className="form-control w-full">
                                    <label className="label">
                                        <span className="label-text">Food Category</span>
                                    </label>
                                    <select
                                        name="category"
                                        defaultValue={category}
                                        className="select select-bordered"
                                        required
                                    >
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
                                        <span className="label-text">Food Origin (Country)</span>
                                    </label>
                                    <select id="country" name="foodorigin" defaultValue={foodorigin} placeholder="Select a Food Origin" className='select select-bordered' required>
                                        <option value="" disabled selected>Select a Food Origin</option>
                                        <option value="Bangladesh">Bangladesh</option>
                                        <option value="India">India</option>
                                        <option value="United States">United States</option>
                                        <option value="United Kingdom">United Kingdom</option>
                                        <option value="China">China</option>
                                        <option value="Japan">Japan</option>
                                    </select>
                                </div>

                                {/* Price */}
                                <div className="form-control w-full">
                                    <label className="label">
                                        <span className="label-text">Price</span>
                                    </label>
                                    <input
                                        type="number"
                                        name="price"
                                        defaultValue={price}
                                        className="input input-bordered"
                                        required
                                    />
                                </div>


                                {/* ... */}
                                <div className="modal-action">
                                    <button type="submit" className="btn bg-primary text-white">
                                        Update
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                )}


                {/* modal */}

            </div>
        </div>
    );
};

export default MyFoodCard;