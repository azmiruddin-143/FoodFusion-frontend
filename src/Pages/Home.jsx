import React from 'react';
import Banner from '../Components/Banner';
import TopSelling from '../Components/TopSelling';
import ComboOffers from '../Components/ComboOffers';
import TrendingItems from '../Components/TrendingItems';
import FeaturedDiscounts from '../Components/FeaturedDiscounts';
import FoodsPerformance from '../Components/FoodsPerformance';


const Home = () => {
  return (

    <div>
      <Banner></Banner>
      <TopSelling></TopSelling>
      <ComboOffers></ComboOffers>
      <TrendingItems></TrendingItems>
      <FeaturedDiscounts></FeaturedDiscounts>
      {/* <FoodsPerformance></FoodsPerformance> */}
    </div>

  )
};

export default Home;