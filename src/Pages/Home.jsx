import React from 'react';
import Banner from '../Components/Banner';
import TopSelling from '../Components/TopSelling';
import ComboOffers from '../Components/ComboOffers';
import TrendingItems from '../Components/TrendingItems';


const Home = () => {
  return (

    <div>
      <Banner></Banner>
      <TopSelling></TopSelling>
      <ComboOffers></ComboOffers>
      <TrendingItems></TrendingItems>
    </div>

  )
};

export default Home;