import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import banner from '../../src/assets/banner-test.jpg'
import slider from '../../src/assets/slider-1.jpg'
import slider2 from '../../src/assets/slider-2.jpg'
import { Link } from "react-router-dom";

const Banner = () => {
    return (
        <div className="w-full relative">
            <Swiper
                modules={[Navigation, Autoplay, EffectFade]}
                navigation={{
                    nextEl: ".swiper-button-next",
                    prevEl: ".swiper-button-prev",

                }}

                // autoplay={{
                //     delay: 3000,
                //     disableOnInteraction: false,
                // }}
                effect="fade"
                slidesPerView={1}
                loop={true}
                className="2xl:h-[850px] md:h-[450px] lg:h-[600px] h-[200px]"
            >



                <SwiperSlide>
                    <div style={{
                        backgroundImage: `url(${slider})`
                    }} className="bg-cover bg-no-repeat bg-center w-full h-full flex justify-start items-center">
                        <div className="ml-52 space-y-4">
                            <h1 className="text-6xl w-7/12 text-red-800"> Discover the Taste of Freshness </h1>
                            <p className="w-7/12">Savor the best collection of organic and fresh foods delivered straight to your doorstep. Experience the perfect blend of taste and nutrition in every bite.</p>
                            <Link to={'/allfoods'} ><button className="bg-[white] py-2 px-4 ">Shop now</button></Link>
                          
                        </div>

                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div style={{
                        backgroundImage: `url(${slider2})`
                    }} className="bg-cover bg-no-repeat bg-center w-full h-full flex justify-start items-center ">
                        <div className="ml-52 space-y-4">
                            <h1 className="text-6xl w-7/12 text-red-800"> Favorite Meals, Delivered Fast </h1>
                            <p className="w-7/12">Choose from a variety of delicious dishes and snacks prepared with care and quality ingredients. Indulge in the flavors you love anytime, anywhere</p>
                            <button className="bg-[white] py-2 px-4">Shop now 2</button>
                            
                        </div>
                    </div>
                </SwiperSlide>


            </Swiper>



            <div className="swiper-button-prev  bg-[#9dc923] cursor-pointer  rounded-full  px-[22px] md:p-6 flex justify-center items-center absolute right-[50px] top-1/2">
                <FaArrowLeft />
            </div>

            <div className="swiper-button-next  cursor-pointer bg-[#9dc923] rounded-full px-[22px] w-fit  md:p-6 flex justify-center items-center" >
                <FaArrowRight />
            </div>
            {/* style={{ left: '250px', top: '600px' }} */}
        </div>
    );
};

export default Banner;