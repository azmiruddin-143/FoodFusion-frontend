import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, EffectFade, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import "swiper/css/pagination"; // পেজিনেশন স্টাইল ইমপোর্ট
import banner from '../../src/assets/banner-test.jpg';
import slider from '../../src/assets/slider-1.jpg';
import slider2 from '../../src/assets/slider-2.jpg';
import slider3 from '../../src/assets/slider-3.jpg';
import { Link } from "react-router-dom";
import { Fade, Slide } from "react-awesome-reveal";

const Banner = () => {
    return (
        <div className="w-full relative">
            <Swiper
                modules={[Navigation, Autoplay, EffectFade, Pagination]}
                navigation={false}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                }}
                effect="fade"
                slidesPerView={1}
                loop={true}
                className="2xl:h-[650px] md:h-[450px] lg:h-[600px] sm:h-[400px] h-[350px]"
                pagination={{
                    clickable: true,
                    renderBullet: (index, className) => {
                        // Custom pagination rendering
                        return `<span class="${className} custom-bullet">${index + 1}</span>`;
                    },
                }}
            >
                {/* Slide 1 */}
                <SwiperSlide>
                    <div
                        style={{
                            backgroundImage: `url(${slider})`, backgroundColor: "#00000087",
                            backgroundBlendMode: "multiply"
                        }}
                        className="bg-cover bg-no-repeat bg-center w-full h-full flex justify-start items-center"
                    >
                        <div className="2xl:ml-36 xl:ml-28 lg:ml-10 ml-4 sm:ml-6 sm:space-y-4 space-y-2">
                            <Fade duration={3000} triggerOnce >
                                <h1 className="lg:text-6xl sm:text-4xl text-2xl sm:w-7/12 text-white font-bold">
                                    Discover the Taste of Freshness
                                </h1>
                            </Fade>
                            <p className="lg:w-7/12  text-sm sm:text-md lg:text-lg sm:w-8/12 text-white font-bold">
                                Savor the best collection of organic and fresh foods delivered
                                straight to your doorstep. Experience the perfect blend of taste
                                and nutrition in every bite.
                            </p>
                            <Slide direction="up" duration={2000} triggerOnce>
                                <Link to={"/allfoods"} className="border-b border-secondary py-4">
                                    <button className="bg-secondary rounded-md text-black text-sm sm:text-md lg:text-xl font-bold py-1 px-4 sm:py-2 sm:px-6 sm:mt-6 mt-4 ">Purchase menu</button>
                                </Link>
                            </Slide>
                        </div>
                    </div>
                </SwiperSlide>

                {/* Slide 2 */}
                <SwiperSlide>
                    <div
                        style={{
                            backgroundImage: `url(${slider2})`, backgroundColor: "#00000087",
                            backgroundBlendMode: "multiply"
                        }}
                        className="bg-cover bg-no-repeat bg-center w-full h-full flex justify-start items-center"
                    >
                        <div className="2xl:ml-36 xl:ml-28 lg:ml-10 ml-4 sm:ml-6 sm:space-y-4 space-y-2">
                            <Fade duration={3000} triggerOnce >
                                <h1 className="lg:text-6xl sm:text-4xl text-2xl sm:w-7/12 text-white font-bold">
                                    Favorite Meals, Delivered Fast
                                </h1>
                            </Fade>
                            <p className="lg:w-7/12  text-sm sm:text-md lg:text-lg sm:w-8/12 text-white font-bold">
                                Choose from a variety of delicious dishes and snacks prepared with
                                care and quality ingredients. Indulge in the flavors you love
                                anytime, anywhere
                            </p>
                            <Slide direction="up" duration={2000} triggerOnce>
                                <Link to={"/allfoods"} className="border-b border-secondary py-4">
                                    <button className="bg-secondary rounded-md text-black text-sm sm:text-md lg:text-xl font-bold py-1 px-4 sm:py-2 sm:px-6 sm:mt-6 mt-4 ">Purchase menu</button>
                                </Link>
                            </Slide>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div
                        style={{
                            backgroundImage: `url(${slider3})`, backgroundColor: "#00000087",
                            backgroundBlendMode: "multiply"
                        }}
                        className="bg-cover bg-no-repeat bg-center w-full h-full flex justify-start items-center"
                    >
                        <div className="2xl:ml-36 xl:ml-28 lg:ml-10 ml-4 sm:ml-6 sm:space-y-4 space-y-2">
                            <Fade duration={3000} triggerOnce >
                                <h1 className="lg:text-6xl sm:text-4xl text-2xl sm:w-7/12 text-white font-bold">
                                    Discover the Best Burgers
                                </h1>
                            </Fade>
                            <p className="lg:w-7/12  text-sm sm:text-md lg:text-lg sm:w-8/12 text-white font-bold">
                                Savor the ultimate taste experience with our burgers, crafted using fresh, high-quality ingredients to deliver flavor and satisfaction in every bite
                            </p>
                            <Slide direction="up" duration={2000} triggerOnce>
                                <Link to={"/allfoods"} className="border-b border-secondary py-4">
                                    <button className="bg-secondary rounded-md text-black text-sm sm:text-md lg:text-xl font-bold py-1 px-4 sm:py-2 sm:px-6 sm:mt-6 mt-4 ">Purchase menu</button>
                                </Link>
                            </Slide>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>

        </div>
    );
};

export default Banner;
