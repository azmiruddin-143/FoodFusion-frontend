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
import { Link } from "react-router-dom";

const Banner = () => {
    return (
        <div className="w-full relative">
            <Swiper
                modules={[Navigation, Autoplay, EffectFade, Pagination]}
                navigation={false}
                //  autoplay={{
                //     delay: 3000,
                //     disableOnInteraction: false,
                // }}
                effect="fade"
                slidesPerView={1}
                loop={true}
                className="2xl:h-[850px] md:h-[450px] lg:h-[600px] h-[200px]"
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
                        <div className="ml-36 space-y-4">
                            <h1 className="text-6xl w-7/12 text-white font-bold">
                                Discover the Taste of Freshness
                            </h1>
                            <p className="w-7/12 text-white font-bold">
                                Savor the best collection of organic and fresh foods delivered
                                straight to your doorstep. Experience the perfect blend of taste
                                and nutrition in every bite.
                            </p>
                            <Link to={"/allfoods"} className="border-b border-secondary py-4">
                                <button className="bg-secondary text-black  font-bold py-2 px-6 mt-6 ">Shop now</button>
                            </Link>
                        </div>
                    </div>
                </SwiperSlide>

                {/* Slide 2 */}
                <SwiperSlide>
                    <div
                        style={{
                            backgroundImage: `url(${slider2})`,backgroundColor: "#00000087",
                            backgroundBlendMode: "multiply"
                        }}
                        className="bg-cover bg-no-repeat bg-center w-full h-full flex justify-start items-center"
                    >
                        <div className="ml-36 space-y-4">
                            <h1 className="text-6xl w-7/12 text-white font-bold">
                                Favorite Meals, Delivered Fast
                            </h1>
                            <p className="w-7/12 text-white font-bold">
                                Choose from a variety of delicious dishes and snacks prepared with
                                care and quality ingredients. Indulge in the flavors you love
                                anytime, anywhere
                            </p>
                            <Link to={"/allfoods"} className="border-b border-secondary py-4">
                                <button className="bg-secondary text-black  font-bold py-2 px-6 mt-6 ">Shop now</button>
                            </Link>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>

        </div>
    );
};

export default Banner;
