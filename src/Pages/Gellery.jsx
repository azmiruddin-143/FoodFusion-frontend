
import React, { useState } from "react";
import Lightbox from "yet-another-react-lightbox"; // লাইটবক্স ইমপোর্ট
import "yet-another-react-lightbox/styles.css"; // লাইটবক্স স্টাইল ইমপোর্ট
import gallerybanner from '../../src/assets/all-page-banner.jpg'
import image from '../../src/assets/gallery-image-1.jpg'
import image2 from "../../src/assets/gallery-image-2.jpg";
import image3 from "../../src/assets/gallery-image-3.jpg";
import image4 from "../../src/assets/gallery-image-4.jpg";
import image5 from "../../src/assets/gallery-image-5.jpg";
import image6 from "../../src/assets/gallery-image-6.jpg";
import image7 from "../../src/assets/gallery-image-7.jpg";
import image8 from "../../src/assets/gallery-image-8.jpg";
import image9 from "../../src/assets/gallery-image-11.jpg";
import image10 from "../../src/assets/gallery-image-10.jpg";
import { Helmet } from "react-helmet-async";
import { Fade } from "react-awesome-reveal";


const Gellery = () => {
    const [open, setOpen] = useState(false); // লাইটবক্স খোলা/বন্ধ
    const [currentIndex, setCurrentIndex] = useState(0); // ক্লিক করা ইমেজ ইনডেক্স
    return (
        <Fade duration={3000} triggerOnce >
        <div>
            <Helmet>
                <title>FoodFusion | Gallery </title>
            </Helmet>
            <div
                style={{
                    backgroundImage: `url(${gallerybanner})`, backgroundColor: "#00000087",
                    backgroundBlendMode: "multiply", backgroundSize: "cover", backgroundPosition: "center", backgroundRepeat: "no-repeat"
                }}
                class="relative bg-gray-50 sm:h-24  h-12 lg:h-36 xl:h-52  flex items-center justify-center">

                <h1 class="absolute inset-0 text-gray-200 text-4xl sm:text-5xl lg:text-7xl xl:text-9xl font-bold flex items-center justify-center select-none">
                    Gallery
                </h1>

                <div class="relative bg-[#cbbe7dd6] p-2 xl:p-4 rounded-lg shadow-lg z-10">
                    <h1 class="xl:text-4xl sm:text-2xl font-bold text-black text-center">
                        Gallery
                    </h1>
                </div>
            </div>


            <div className="gallery-page text-center 2xl:mx-32 xl:mx-24 sm:mx-2 my-6">

                {/* গ্যালারি সেকশন */}
                <div className="grid grid-cols-2 xl:grid-cols-4 lg:grid-cols-3  md:grid-cols-2 gap-4 px-4">
                    {/* ইমেজ ১ */}
                    <img
                        src={image}
                        alt="Gallery Image 1"
                        className="rounded-lg w-[450px] 2xl:h-[400px] xl:h-[300px] lg:h-[250px] sm:h-[200px] h-[120px] object-cover  cursor-pointer"
                        onClick={() => {
                            setCurrentIndex(0);
                            setOpen(true);
                        }}
                    />

                    {/* ইমেজ ২ */}
                    <img
                        src={image2}
                        alt="Gallery Image 2"
                        className="rounded-lg w-[450px] 2xl:h-[400px] xl:h-[300px] lg:h-[250px] sm:h-[200px] h-[120px] object-cover  cursor-pointer"
                        onClick={() => {
                            setCurrentIndex(1);
                            setOpen(true);
                        }}
                    />

                    {/* ইমেজ ৩ */}
                    <img
                        src={image9}
                        alt="Gallery Image 3"
                        className="rounded-lg w-[450px] 2xl:h-[400px] xl:h-[300px] lg:h-[250px] sm:h-[200px] h-[120px] object-cover  cursor-pointer"
                        onClick={() => {
                            setCurrentIndex(2);
                            setOpen(true);
                        }}
                    />

                    {/* ইমেজ ৪ */}
                    <img
                        src={image4}
                        alt="Gallery Image 4"
                        className="rounded-lg w-[450px] 2xl:h-[400px] xl:h-[300px] lg:h-[250px] sm:h-[200px] h-[120px] object-cover  cursor-pointer"
                        onClick={() => {
                            setCurrentIndex(3);
                            setOpen(true);
                        }}
                    />

                    {/* ইমেজ ৫ */}
                    <img
                        src={image3}
                        alt="Gallery Image 5"
                        className="rounded-lg w-[450px] 2xl:h-[400px] xl:h-[300px] lg:h-[250px] sm:h-[200px] h-[120px] object-cover  cursor-pointer"
                        onClick={() => {
                            setCurrentIndex(4);
                            setOpen(true);
                        }}
                    />

                    {/* ইমেজ ৬ */}
                    <img
                        src={image6}
                        alt="Gallery Image 6"
                        className="rounded-lg w-[450px] 2xl:h-[400px] xl:h-[300px] lg:h-[250px] sm:h-[200px] h-[120px] object-cover  cursor-pointer"
                        onClick={() => {
                            setCurrentIndex(5);
                            setOpen(true);
                        }}
                    />

                    {/* ইমেজ ৭ */}
                    <img
                        src={image7}
                        alt="Gallery Image 7"
                        className="rounded-lg w-[450px] 2xl:h-[400px] xl:h-[300px] lg:h-[250px] sm:h-[200px] h-[120px] object-cover  cursor-pointer"
                        onClick={() => {
                            setCurrentIndex(6);
                            setOpen(true);
                        }}
                    />

                    {/* ইমেজ ৮ */}
                    <img
                        src={image4}
                        alt="Gallery Image 8"
                        className="rounded-lg w-[450px] 2xl:h-[400px] xl:h-[300px] lg:h-[250px] sm:h-[200px] h-[120px] object-cover  cursor-pointer"
                        onClick={() => {
                            setCurrentIndex(7);
                            setOpen(true);
                        }}
                    />

                    {/* ইমেজ ৯ */}
                    <img
                        src={image5}
                        alt="Gallery Image 8"
                        className="rounded-lg w-[450px] 2xl:h-[400px] xl:h-[300px] lg:h-[250px] sm:h-[200px] h-[120px] object-cover  cursor-pointer"
                        onClick={() => {
                            setCurrentIndex(8);
                            setOpen(true);
                        }}
                    />

                    {/* ইমেজ ১০ */}
                    <img
                        src={image10}
                        alt="Gallery Image 8"
                        className="rounded-lg w-[450px] 2xl:h-[400px] xl:h-[300px] lg:h-[250px] sm:h-[200px] h-[120px] object-cover  cursor-pointer"
                        onClick={() => {
                            setCurrentIndex(9);
                            setOpen(true);
                        }}
                    />
                </div>

                {/* লাইটবক্স */}
                <Lightbox
                    open={open}
                    close={() => setOpen(false)} // লাইটবক্স বন্ধ
                    slides={[
                        { src: image },
                        { src: image2 },
                        { src: image3 },
                        { src: image4 },
                        { src: image5 },
                        { src: image6 },
                        { src: image7 },
                        { src: image8 },
                        { src: image9 },
                        { src: image10 },

                    ]} // ইমেজের তালিকা
                    index={currentIndex} // ক্লিক করা ইমেজের ইনডেক্স
                />
            </div>
        </div>
        </Fade>
    );
};

export default Gellery;