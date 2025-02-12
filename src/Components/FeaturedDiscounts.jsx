import React from 'react';
import shop from '../../src/assets/shop-discount.png'
import parsent from '../../src/assets/parsent-discount.png'
import barger from '../../src/assets/barger-discount.png'
import { Fade } from 'react-awesome-reveal';
import { Link } from 'react-router-dom';
const FeaturedDiscounts = () => {
    return (
      <Fade duration={3000} triggerOnce >
        <div className="grid gap-6 sm:px-4 px-2  sm:my-7 my-5 lg:my-14 xl:my-20 2xl:mx-32 xl:mx-24 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3">
        {/* Card 1 */}
        <div className="bg-primary-content  text-primary py-10 px-5 rounded-lg shadow-md relative">
          <div className="absolute top-4 right-4">
            <img
              src={shop}
              alt="Gift Icon"
              className="w-24"
            />
          </div>
          <h3 className="lg:text-4xl text-3xl  w-9/12  2xl:w-8/12 font-bold mb-4">Gift Vouchers For Friends</h3>
          <p className="text-md w-8/12 mb-4">
            Give gift vouchers to your friends and relatives to enjoy our fast
            food, Nunc id ullamcorper.
          </p>
           <Link to={'/allfoods'} ><button>BUY GIFT NOW →</button></Link>
        </div>
  
        {/* Card 2 */}
        <div className="bg-neutral text-white p-6 rounded-lg shadow-md relative">
          <div className="absolute top-4 right-4">
            <img
              src={parsent}
              alt="Discount Icon"
              className="w-24"
            />
          </div>
          <h3 className="lg:text-4xl text-3xl text-primary w-9/12  2xl:w-8/12 font-bold mb-4">First Order First Discount</h3>
          <p className="text-md w-8/12 text-primary mb-4">
            20% discount on first order, Nam ut augue pulvinar turpis malesuada
            condimentum.
          </p>
          <Link to={'/allfoods'} ><button>BUY GIFT NOW →</button></Link>
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
          <h3 className="lg:text-4xl text-3xl w-9/12  2xl:w-8/12 font-bold mb-4">New Season New Food</h3>
          <p className="text-md w-8/12 mb-4">
            Discover new items at the store this summer, Aliquam faucibus lacus et
            dolor iaculis!
          </p>
         
          <Link to={'/allfoods'} ><button>BUY GIFT NOW →</button></Link>
          
        </div>
      </div>
      </Fade>
    );
};

export default FeaturedDiscounts;