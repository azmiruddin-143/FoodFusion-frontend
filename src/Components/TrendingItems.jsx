import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Autoplay } from "swiper/modules";
import trending1 from '../../src/assets/trending-1.jpg'
import trending2 from '../../src/assets/trending-2.jpg'
import trending3 from '../../src/assets/trending-3.jpg'
import trending4 from '../../src/assets/trending-4.jpg'
const TrendingItems = () => {
    return (
        <div className='my-10 text-center'>
            <div className="lg:py-20 m-0 p-0">
                <Swiper
                    modules={[Navigation, Autoplay]}
                    navigation={false}
                    loop={true}
                    autoplay={{
                        delay: 3000,
                        disableOnInteraction: false,
                    }}
                    spaceBetween={12}
                    slidesPerView={4}

                    breakpoints={{
                        320: {
                            slidesPerView: 1,
                        },
                        768: {
                            slidesPerView: 2,
                        },
                        1024: {
                            slidesPerView: 3,
                        },
                        1280: {
                            slidesPerView: 4,
                        },
                    }}
                >

                  
                    <SwiperSlide>
                        <div>
                            <img
                                src={trending1}
                                className="w-full h-full rounded-md object-cover"
                            />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div>
                            <img
                                src={trending2}
                                className="w-full h-full rounded-md object-cover"
                            />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div>
                            <img
                                src={trending3}
                                className="w-full h-full rounded-md object-cover"
                            />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div>
                            <img
                                src={trending4}
                                className="w-full h-full rounded-md object-cover"
                            />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div>
                            <img
                                src={trending3}
                                className="w-full h-full rounded-md object-cover"
                            />
                        </div>
                    </SwiperSlide>


                </Swiper>
            </div>
        </div>
    );
};

export default TrendingItems;