import React, { useEffect, useState } from 'react';
import axios from 'axios';
import AllFoodsCard from './AllFoodsCard';

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
    }, [search,filter,sort])

    const reset = () =>{
        setSearch('')
        setFilter('')
        setSort('')
    }


    return (
        <div>
            <div class="relative bg-gray-50 h-52  flex items-center justify-center">

                <h1 class="absolute inset-0 text-gray-200 text-9xl font-bold flex items-center justify-center select-none">
                    All Foods
                </h1>

                <div class="relative bg-white p-6 rounded-lg shadow-lg z-10">
                    <h1 class="text-4xl font-bold text-red-500 text-center">
                        All Foods
                    </h1>
                </div>
            </div>

            {/* .. */}

            <div className='flex flex-col my-16  md:flex-row justify-center items-center gap-5 '>

                <div className='w-3/12 overflow-hidden border rounded-lg  focus-within:ring focus-within:ring-opacity-40 focus-within:border-blue-400 focus-within:ring-blue-300'>
                    <input
                        className='px-6 py-2 w-full text-gray-700 placeholder-gray-500 bg-white outline-none focus:placeholder-transparent'
                        type='text'
                        name='search'
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        placeholder='Enter Job Title'
                    />

                </div>
            </div>

            <div className='flex items-start gap-4 justify-center'>

                <div className=''>
                    <div className='my-8' >
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

                <div>

                    <div className=' sm:grid-cols-2 gap-8 mt-8 mx-auto grid xl:grid-cols-3 lg:grid-cols-3 grid-cols-1 '>

                        {
                            allFoods.map(food => <AllFoodsCard key={food._id} food={food} ></AllFoodsCard>)
                        }

                    </div>
                </div>
            </div>


        </div>
    );
};

export default AllFoods;