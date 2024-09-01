import React, { useEffect, useState } from "react";
import ProductStore from "../../store/ProductStore.js";
import SliderSkeleton from "../../skeleton/slider-skeleton.jsx";
import { Link } from "react-router-dom";
import { FaAngleRight, FaAngleLeft } from "react-icons/fa";

const Slider = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const { SliderList } = ProductStore(); // Accessing SliderList from the store

  const sliderItems = SliderList || []; // Fallback to an empty array if SliderList is null

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % sliderItems.length);
  };

  const prevImage = () => {
    setCurrentImage(
      (prev) => (prev - 1 + sliderItems.length) % sliderItems.length
    );
  };

  useEffect(() => {
    if (sliderItems.length > 0) {
      // Ensure sliderItems has items
      const interval = setInterval(() => {
        nextImage();
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [currentImage, sliderItems]);

  if (sliderItems.length === 0) {
    return <SliderSkeleton />;
  } else {
    return (
      <div className="container mx-auto px-2 rounded">
        <div className="relative h-72 md:h-[400px] w-full bg-slate-300 overflow-hidden">
          <div className="absolute z-10 top-1/2 transform -translate-y-1/2 flex w-full justify-between px-4">
            <button
              onClick={prevImage}
              className="bg-white shadow-md rounded-full p-1 text-2xl"
            >
              <FaAngleLeft />
            </button>
            <button
              onClick={nextImage}
              className="bg-white shadow-md rounded-full p-1 text-2xl"
            >
              <FaAngleRight />
            </button>
          </div>
          <div
            className="flex h-full w-full transition-transform duration-1000"
            style={{ transform: `translateX(-${currentImage * 100}%)` }}
          >
            {sliderItems.map((item, i) => (
              <div className="relative w-full h-full flex-shrink-0" key={i}>
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute z-20 bottom-4 left-7 top-20 md:left-8 bg-opacity-50  text-black p-4 rounded flex flex-col items-start">
                  <h2 className="text-3xl md:text-4xl w-1/2">{item.title}</h2>
                  <p className="mt-2 w-1/2">{item.des}</p>
                  <div className="w-1/2 flex justify-center mt-4">
                    <Link
                      to=""
                      className="text-white bg-orange-400 rounded-md p-2 px-5 inline-block"
                    >
                      Buy Now
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
};

export default Slider;
