import React, { useEffect, useState } from 'react';
import axios from 'axios';
import AllFoodsCard from './AllFoodsCard';
import pagebanner from '../../src/assets/gellary-pager-banner.jpg'
import { FaSearchengin } from "react-icons/fa6";

const AllFoods = () => {

    const [allFoods, setAllFoods] = useState([])
    const [search, setSearch] = useState('')
    const [filter, setFilter] = useState('')
    const [sort, setSort] = useState('')
    useEffect(() => {
        axios.get(`http://localhost:5000/all-foods?search=${search}&filter=${filter}&sort=${sort}`)
            .then(result => {
                setAllFoods(result.data)
            })
    }, [search, filter, sort])

    const reset = () => {
        setSearch('')
        setFilter('')
        setSort('')
    }


    return (
        <div>
            <div
                style={{
                    backgroundImage: `url(${pagebanner})`, backgroundColor: "#00000087",
                    backgroundBlendMode: "multiply", backgroundSize: "cover", backgroundPosition: "center", backgroundRepeat: "no-repeat"
                }}
                class="relative bg-gray-50 h-36 lg:h-52  flex items-center justify-center">

                <h1 class="absolute inset-0 text-gray-200 sm:text-6xl lg:text-9xl font-bold flex items-center justify-center select-none">
                    All Foods
                </h1>

                <div class="relative bg-white p-3 lg:p-6 rounded-lg shadow-lg z-10">
                    <h1 class="lg:text-4xl sm:text-2xl font-bold text-primary text-center">
                        All Foods
                    </h1>
                </div>
            </div>

            {/* .. */}

            <div className='flex flex-col my-16  md:flex-row justify-center items-center gap-5 '>

                <div className='flex p-1 overflow-hidden border rounded-lg focus-within:ring focus-within:ring-opacity-40 focus-within:border-blue-400 focus-within:ring-blue-300'>
                    <input
                        className='px-6 py-2 text-gray-700 placeholder-gray-500 bg-white outline-none focus:placeholder-transparent'
                        type='text'
                        name='search'
                        placeholder='Enter Foods'
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                    />

                    <button className='px-1 md:px-4 py-3 text-sm font-medium tracking-wider uppercase transition-colors duration-300 transform '>
                        <FaSearchengin size={25} />
                    </button>
                </div>
            </div>

            <div className='flex items-start gap-4 mx-10 justify-center'>

                <div className='sticky top-24 shadow-lg  p-5'>
                    <div className='mb-8' >
                        <select
                            name='category'
                            id='category'
                            value={filter}
                            onChange={(e) => setFilter(e.target.value)}
                            className='border p-4 rounded-lg'
                        >
                            <option value=''>Filter By Category</option>
                            <option value="" disabled selected>Select a Food Category</option>
                            <option value="Main Courses">Main Courses</option>
                            <option value="Desserts">Desserts</option>
                            <option value="Beverages">Beverages</option>
                            <option value="Non-Vegetarian">Non-Vegetarian</option>
                            <option value="Salads">Salads</option>
                            <option value="Snacks">Snacks</option>
                        </select>
                    </div>


                    <div>
                        <select
                            name='category'
                            id='category'
                            className='border p-4 rounded-md'
                            value={sort}
                            onChange={(e) => setSort(e.target.value)}
                        >
                            <option value=''>Sort By Purchase</option>
                            <option value='dsc'>Descending Purchase </option>
                            <option value='asc'>Ascending Purchase </option>
                        </select>
                    </div>

                    <button onClick={reset} className='btn my-8'>Reset all Filters</button>

                </div>

                {
                    allFoods.length === 0 ?
                        <h1 className=' text-5xl mx-auto text-primary pr-52'>No Data Found ?</h1>
                        :
                        <div>

                            <div className=' sm:grid-cols-2 gap-y-24 gap-8 my-16 mx-auto grid xl:grid-cols-4 lg:grid-cols-3 grid-cols-1 '>

                                {
                                    allFoods.map(food => <AllFoodsCard key={food._id} food={food} ></AllFoodsCard>)
                                }

                            </div>
                        </div>
                }

            </div>


        </div>
    );
};

export default AllFoods;