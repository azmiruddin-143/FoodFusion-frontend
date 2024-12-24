import React from 'react';
import shop from '../../src/assets/shop-discount.png'
import parsent from '../../src/assets/parsent-discount.png'
import barger from '../../src/assets/barger-discount.png'
const FeaturedDiscounts = () => {
    return (
        <div className="grid gap-6 px-4 py-8 mx-24 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {/* Card 1 */}
        <div className=" bg-primary  text-white py-10 px-5 rounded-lg shadow-md relative">
          <div className="absolute top-4 right-4">
            <img
              src={shop}
              alt="Gift Icon"
              className="w-24"
            />
          </div>
          <h3 className="text-4xl  w-8/12 font-bold mb-4">Gift Vouchers For Friends</h3>
          <p className="text-md w-8/12 mb-4">
            Give gift vouchers to your friends and relatives to enjoy our fast
            food, Nunc id ullamcorper.
          </p>
           <button>BUY GIFT NOW →</button>
        </div>
  
        {/* Card 2 */}
        <div className="bg-secondary text-white p-6 rounded-lg shadow-md relative">
          <div className="absolute top-4 right-4">
            <img
              src={parsent}
              alt="Discount Icon"
              className="w-24"
            />
          </div>
          <h3 className="text-4xl text-primary w-8/12 font-bold mb-4">First Order First Discount</h3>
          <p className="text-md w-8/12 text-primary mb-4">
            20% discount on first order, Nam ut augue pulvinar turpis malesuada
            condimentum.
          </p>
          <button className='text-primary'>BUY GIFT NOW →</button>
        </div>
  
        {/* Card 3 */}
        <div className="bg-red-600 text-white p-6 rounded-lg shadow-md relative">
          <div className="absolute top-4 right-4">
            <img
              src={barger}
              alt="Food Icon"
              className="w-24"
            />
          </div>
          <h3 className="text-4xl w-8/12 font-bold mb-4">New Season New Food</h3>
          <p className="text-md w-8/12 mb-4">
            Discover new items at the store this summer, Aliquam faucibus lacus et
            dolor iaculis!
          </p>
         
            <button className='text-white'>BUY GIFT NOW →</button>
          
        </div>
      </div>
    );
};

export default FeaturedDiscounts;