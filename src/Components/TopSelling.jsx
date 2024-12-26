import axios from 'axios';
import React, { useEffect, useState } from 'react';
import TopSellingCard from './TopSellingCard';
import { Fade, Slide } from 'react-awesome-reveal';
import { Link } from 'react-router-dom';

const TopSelling = () => {
    const [topSelling, setTopSelling] = useState([])
    console.log(topSelling);
    useEffect(() => {
        axios.get('https://server-food-ochre.vercel.app/topselling')
            .then(result => {
                setTopSelling(result.data)
            })
    }, [])
    return (

        <div>
            <Fade duration={2000} triggerOnce className='text-center  text-secondary font-bold sm:text-5xl text-3xl uppercase mt-8 sm:mt-16'>Top Selling</Fade>

            <Fade duration={4000} triggerOnce className='text-center mx-auto text-neutral mt-3 sm:w-6/12 lg:w-5/12 xl:w-4/12'>Explore our top-selling products, loved by customers for their exceptional quality and unbeatable value</Fade>


            <Slide direction="up" duration={2000} triggerOnce>
                <div className='sm:my-8 xl:my-16 my-5'>

                    <div className='grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 place-items-center sm:gap-y-5 lg:gap-y-12 lg:mx-5 2xl:mx-52 xl:mx-52'>
                        {
                            topSelling.map(topSelling => <TopSellingCard key={topSelling._id} topSelling={topSelling} ></TopSellingCard>)
                        }
                    </div>

                </div>

                <Link to={'/allfoods'}>
                    <button className='bg-primary-content flex  mx-auto text-primary font-bold  py-2 px-5 my-5 rounded-lg'>See All</button>
                </Link>
            </Slide>


        </div>


    );
};

export default TopSelling;