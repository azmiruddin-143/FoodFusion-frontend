import React from 'react';
import { Fade } from 'react-awesome-reveal';

const FoodsPerformance = () => {
    return (
        <div className="bg-gray-800 2xl:my-44 xl:my-40 lg:my-32 sm:my-14 my-5  text-white py-16">
        <div className=" mx-auto grid xl:mx-5  md:grid-cols-4 gap-11 md:gap-16 items-center text-center space-x-4">
          {/* Single Stat */}
          <Fade duration={2000} triggerOnce >
          <div className="flex-1 border-r-2">
            <h3 className="text-4xl font-bold text-secondary">189</h3>
            <p className="text-sm mt-2">ORDERS EVERY DAY</p>
          </div>
          </Fade>
          <Fade duration={3000} triggerOnce >
          {/* Single Stat */}
          <div className="flex-1 border-r-2">
            <h3 className="text-4xl font-bold text-secondary">9584</h3>
            <p className="text-sm mt-2">HAPPY CUSTOMER</p>
          </div>
          </Fade>
          {/* Single Stat */}
          <Fade duration={5000} triggerOnce >
          <div className="flex-1 border-r-2">
            <h3 className="text-4xl font-bold text-secondary">258</h3>
            <p className="text-sm mt-2">THE EVENT IS HELD</p>
          </div>
          </Fade>
          {/* Single Stat */}
          <Fade duration={6000} triggerOnce >
          <div className="flex-1">
            <h3 className="text-4xl font-bold text-secondary">16</h3>
            <p className="text-sm mt-2">CULINARY AWARD</p>
          </div>
          </Fade>
        </div>
      </div>
    );
};

export default FoodsPerformance;