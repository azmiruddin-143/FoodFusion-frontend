import React from 'react';
import Banner from '../Components/Banner';
import TopSelling from '../Components/TopSelling';
import ComboOffers from '../Components/ComboOffers';
import TrendingItems from '../Components/TrendingItems';
import FeaturedDiscounts from '../Components/FeaturedDiscounts';
import FoodsPerformance from '../Components/FoodsPerformance';
import { Helmet } from 'react-helmet-async';
import Faq from '../Components/Faq';
import BackToTop from '../Components/NewComponents/BackToTop';


const Home = () => {
  return (

    <div>
      <Helmet>
        <title>FoodFusion | Home</title>
      </Helmet>
      <Banner></Banner>
      <TopSelling></TopSelling>
      <ComboOffers></ComboOffers>
      <TrendingItems></TrendingItems>
      <FeaturedDiscounts></FeaturedDiscounts>
      <FoodsPerformance></FoodsPerformance>
      <Faq></Faq>
      <BackToTop></BackToTop>
    </div>

  )
};

export default Home;