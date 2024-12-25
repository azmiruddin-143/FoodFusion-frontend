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
        axios.get(`https://server-food-ochre.vercel.app/all-foods?search=${search}&filter=${filter}&sort=${sort}`)
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
                class="relative bg-gray-50 sm:h-24  h-12 lg:h-36 xl:h-52  flex items-center justify-center">

                <h1 class="absolute inset-0 text-gray-200 text-4xl sm:text-5xl lg:text-7xl xl:text-9xl font-bold flex items-center justify-center select-none">
                    All Foods
                </h1>

                <div class="relative bg-[#cbbe7dd6] p-2 xl:p-4 rounded-lg shadow-lg z-10">
                    <h1 class="xl:text-4xl sm:text-2xl font-bold text-black text-center">
                        All Foods
                    </h1>
                </div>
            </div>

            {/* .. */}

            <div className='flex flex-col lg:my-16 my-6  md:flex-row justify-center items-center gap-5 '>

                <div className='flex p-1 overflow-hidden border rounded-lg focus-within:ring focus-within:ring-opacity-40 focus-within:border-blue-400 focus-within:ring-blue-300'>
                    <input
                        className='px-6 py-2 text-gray-700 placeholder-gray-500 bg-white outline-none focus:placeholder-transparent'
                        type='text'
                        name='search'
                        placeholder='Seach foods'
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                    />

                    <button className='px-1 md:px-4 py-3 text-sm text-neutral '>
                        <FaSearchengin size={25} />
                    </button>
                </div>
            </div>

            <div className='lg:flex place-items-center items-start gap-4 xl:mx-10 sm:mx-5 justify-center'>

                <div className='lg:sticky lg:top-24 z-20 mt-6 w-fit bg-info-content rounded-md shadow-lg  p-5'>
                    <div className='mb-8' >
                        <select
                            name='category'
                            id='category'
                            value={filter}
                            onChange={(e) => setFilter(e.target.value)}
                            className='border p-4 rounded-lg'
                        >
                            <option value=''>Filter By Food Category</option>
                            {/* <option value="" disabled selected>Select a Food Category</option> */}
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
                            <option value=''>Sort By Purchase Count</option>
                            <option value='dsc'>Descending Purchase </option>
                            <option value='asc'>Ascending Purchase </option>
                        </select>
                    </div>

                    <button onClick={reset} className='btn my-8'>Reset all Filters</button>

                </div>

                {
                    allFoods.length === 0 ?
                        <h1 className='sm:text-3xl lg:text-5xl text-center py-7 mx-auto text-neutral lg:pr-52'>No Data Found ?</h1>
                        :
                        <div>

                            <div className='mx-2 sm:mx-0 sm:grid-cols-2 gap-y-24 gap-8 my-16  grid 2xl:grid-cols-4 xl:grid-cols-3 lg:grid-cols-2 grid-cols-1 '>

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