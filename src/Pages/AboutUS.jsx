import React from 'react';
import ForChoosingUs from '../Components/NewComponents/ForChoosingUs';
import OurMission from '../Components/NewComponents/OurMission';
import about from '../../src/assets/foods-about us.jpg'
import { Helmet } from 'react-helmet-async';
const AboutUS = () => {
    return (
        <div>
            <Helmet>
                <title>FoodFusion | About Us </title>
            </Helmet>
            <div
                style={{
                    backgroundImage: `url(${about})`, backgroundColor: "#00000087",
                    backgroundBlendMode: "multiply", backgroundSize: "cover", backgroundPosition: "center", backgroundRepeat: "no-repeat"
                }}
                class="relative bg-gray-50 sm:h-24  h-12 lg:h-36 xl:h-52  flex items-center justify-center">

                <h1 class="absolute inset-0 text-gray-200 text-4xl sm:text-5xl lg:text-7xl xl:text-9xl font-bold flex items-center justify-center select-none">
                    About Us
                </h1>

                <div class="relative bg-[#cbbe7dd6] p-2 xl:p-4 rounded-lg shadow-lg z-10">
                    <h1 class="xl:text-4xl sm:text-2xl font-bold text-black text-center">
                     About Us
                    </h1>
                </div>
            </div>
            <ForChoosingUs></ForChoosingUs>
            <OurMission></OurMission>
        </div>
    );
};

export default AboutUS;