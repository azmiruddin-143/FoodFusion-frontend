
import React, { useState } from "react";
import Lightbox from "yet-another-react-lightbox"; // লাইটবক্স ইমপোর্ট
import "yet-another-react-lightbox/styles.css"; // লাইটবক্স স্টাইল ইমপোর্ট
import image from '../../src/assets/trending-1.jpg'
import image2 from "../../src/assets/trending-2.jpg";
import image3 from "../../src/assets/trending-3.jpg";


const Gellery = () => {
    const [open, setOpen] = useState(false); // লাইটবক্স খোলা/বন্ধ
    const [currentIndex, setCurrentIndex] = useState(0); // ক্লিক করা ইমেজ ইনডেক্স
    return (
        <div className="gallery-page text-center">
        {/* পেজ টাইটেল */}
        <h1 className="text-4xl font-bold my-10">My Gallery</h1>
  
        {/* গ্যালারি সেকশন */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 px-4">
          {/* ইমেজ ১ */}
          <img
            src={image}
            alt="Gallery Image 1"
            className="rounded-lg cursor-pointer"
            onClick={() => {
              setCurrentIndex(0);
              setOpen(true);
            }}
          />
  
          {/* ইমেজ ২ */}
          <img
            src={image2}
            alt="Gallery Image 2"
            className="rounded-lg cursor-pointer"
            onClick={() => {
              setCurrentIndex(1);
              setOpen(true);
            }}
          />
  
          {/* ইমেজ ৩ */}
          <img
            src={image3}
            alt="Gallery Image 3"
            className="rounded-lg cursor-pointer"
            onClick={() => {
              setCurrentIndex(2);
              setOpen(true);
            }}
          />
  
          {/* ইমেজ ৪ */}
          <img
            src={image}
            alt="Gallery Image 4"
            className="rounded-lg cursor-pointer"
            onClick={() => {
              setCurrentIndex(3);
              setOpen(true);
            }}
          />
  
          {/* ইমেজ ৫ */}
          <img
            src={image2}
            alt="Gallery Image 5"
            className="rounded-lg cursor-pointer"
            onClick={() => {
              setCurrentIndex(4);
              setOpen(true);
            }}
          />
  
          {/* ইমেজ ৬ */}
          <img
            src={image}
            alt="Gallery Image 6"
            className="rounded-lg cursor-pointer"
            onClick={() => {
              setCurrentIndex(5);
              setOpen(true);
            }}
          />
  
          {/* ইমেজ ৭ */}
          <img
            src={image}
            alt="Gallery Image 7"
            className="rounded-lg cursor-pointer"
            onClick={() => {
              setCurrentIndex(6);
              setOpen(true);
            }}
          />
  
          {/* ইমেজ ৮ */}
          <img
            src={image3}
            alt="Gallery Image 8"
            className="rounded-lg cursor-pointer"
            onClick={() => {
              setCurrentIndex(7);
              setOpen(true);
            }}
          />
  
          {/* ইমেজ ৯ */}
          <img
            src={image}
            alt="Gallery Image 9"
            className="rounded-lg cursor-pointer"
            onClick={() => {
              setCurrentIndex(8);
              setOpen(true);
            }}
          />
  
          {/* ইমেজ ১০ */}
          <img
            src={image2}
            alt="Gallery Image 10"
            className="rounded-lg cursor-pointer"
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
           
          ]} // ইমেজের তালিকা
          index={currentIndex} // ক্লিক করা ইমেজের ইনডেক্স
        />
      </div>
    );
};

export default Gellery;