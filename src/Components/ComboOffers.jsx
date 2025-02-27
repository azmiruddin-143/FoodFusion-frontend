import React from 'react';
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import combo from '../../src/assets/combo1.png'
import combo2 from '../../src/assets/combo2.png'
import { Fade } from 'react-awesome-reveal';
import { Link } from 'react-router-dom';
const ComboOffers = () => {
  return (
    <Fade duration={3000} triggerOnce >
      <div className="bg-[#fef6f0] ">
        <div className="xl:mx-28 2xl:mx-32 py-10 lg:mx-5 px-4 sm:my-8 xl:my-16"> 
          {/* Header */}
          <div className="text-center">
            <p className="text-[#f26026] font-semibold">
              EAT FREELY WITHOUT WORRYING ABOUT THE PRICE
            </p>
            <h1 className="sm:text-3xl text-black text-2xl font-bold mt-2 ">Special Combo Offer</h1>
            <div className="h-[2px] bg-secondary w-16 mx-auto mt-2"></div>
          </div>

          {/* Offers Section */}
          <div className="lg:flex gap-7 justify-center lg:gap-6 mt-10">
            {/* Card 1 */}
            <div className="bg-white shadow-lg mb-8 lg:mb-0 rounded-lg p-6 relative flex flex-col md:flex-row items-center">
              {/* Price */}
              <div className="absolute -top-4 right-4 bg-secondary text-black text-sm px-3 py-1 sm:px-5 sm:py-3 rounded-full">
                $12
              </div>
              {/* Content */}
              <div className="md:w-1/2">
                <h2 className="text-xl font-bold">Beef Burger Big Combo</h2>
                <div className="h-[2px] bg-secondary w-16 mt-2 mb-4"></div>
                <p className="text-sm text-gray-600">
                  Combo Two crispy fried chicken pieces, a baked custard pie, and a refreshing cold Pepsi!
                </p>
                <ul className="mt-4 text-gray-700 space-y-2">
                  <li className="flex items-start">
                    <span className="text-secondary font-bold mr-2">•</span>A Large
                    Size Beef Burger
                  </li>
                  <li className="flex items-start">
                    <span className="text-secondary font-bold mr-2">•</span>A
                    Portion Of French Fries
                  </li>
                  <li className="flex items-start">
                    <span className="text-secondary font-bold mr-2">•</span>A Cup Of
                    Cold Pepsi
                  </li>
                </ul>


                <Link to={'https://foodfusion-4eca3.web.app/singlefood/676c8f1540a54e2ecc9c23ff'} > <button className="mt-4 px-6 py-2 bg-black text-white font-semibold rounded-full">
                  Purchase Combo
                </button></Link>
              </div>
              {/* Image */}
              <div className="md:w-1/2 mt-6 md:mt-0">
                <img
                  src={combo}
                  alt="Combo Image"
                  className="rounded-lg"
                />
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-white shadow-lg rounded-lg p-6 relative flex flex-col md:flex-row items-center">
              {/* Price */}
              <div className="absolute -top-4 right-4 bg-secondary text-black text-sm px-3 py-1 sm:px-5 sm:py-3 rounded-full">
                $16
              </div>
              {/* Content */}
              <div className="md:w-1/2">
                <h2 className="text-xl font-bold ">Fried Chicken & Cake Combo </h2>
                <div className="h-[2px] bg-secondary w-16 mt-2 mb-4"></div>
                <p className="text-sm text-gray-600">
                  Enjoy crispy chicken, a biscuit, mashed potatoes, and a refreshing Pepsi in one perfect combo!!
                </p>
                <ul className="mt-4 text-gray-700 space-y-2">
                  <li className="flex items-start">
                    <span className="text-secondary font-bold mr-2">•</span>2
                    Pieces Of Fried Chicken
                  </li>
                  <li className="flex items-start">
                    <span className="text-secondary font-bold mr-2">•</span>A Baked
                    Custard Pie
                  </li>
                  <li className="flex items-start">
                    <span className="text-secondary font-bold mr-2">•</span>A Cup Of
                    Cold Pepsi
                  </li>
                </ul>

                <Link to={'http://localhost:5173/singlefood/676c8f9c40a54e2ecc9c2400'}>
                  <button className="mt-4 px-6 py-2 bg-black  text-white font-semibold rounded-full">
                    Purchase Combo
                  </button></Link>
              </div>
              {/* Image */}
              <div className="md:w-1/2 mt-6 md:mt-0">
                <img
                  src={combo2}
                  alt="Combo Image"
                  className="rounded-lg"
                />
              </div>
            </div>
          </div>


        </div>
      </div>
    </Fade>
  );
};

export default ComboOffers;