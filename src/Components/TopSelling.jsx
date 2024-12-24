import axios from 'axios';
import React, { useEffect, useState } from 'react';
import TopSellingCard from './TopSellingCard';

const TopSelling = () => {
    const [topSelling, setTopSelling] = useState([])
    console.log(topSelling);
    useEffect(() => {
        axios.get('http://localhost:5000/topselling')
            .then(result => {
                setTopSelling(result.data)
            })
    }, [])
    return (
        <div>
            <h1 className='text-center text-secondary font-bold text-5xl uppercase mt-16'>Top Selling</h1>
            <p className='text-center mx-auto mt-3 w-4/12'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Necessitatibus delectus expedita repudiandae?</p>
            <div className='sm:my-16 my-5'>
               
                    <div className='grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 place-items-center sm:gap-y-5 lg:gap-y-12 lg:mx-5 2xl:mx-52 xl:mx-52'>
                        {
                           topSelling.map(topSelling => <TopSellingCard key={topSelling._id} topSelling={topSelling} ></TopSellingCard>)
                        }
                    </div>
    
            </div>

            

        </div>
    );
};

export default TopSelling;