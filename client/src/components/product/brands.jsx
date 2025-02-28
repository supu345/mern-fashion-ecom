import React from "react";
import { Link } from "react-router-dom";
import { RiShoppingCart2Line } from "react-icons/ri";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import ProductStore from "../../store/ProductStore.js";
import BrandsSkeleton from "../../skeleton/brands-skeleton.jsx";
// Import Swiper styles
import "swiper/css";

const Brands = () => {
  const { BrandList } = ProductStore();
  if (BrandList === null) {
    return <BrandsSkeleton />;
  } else {
    return (
      <div>
        <h4 className="border-1-4 pl-2 border-secondary text-2xl">
          Categories
        </h4>
        {/* container */}
        <div className="mx-auto max-w-full">
          <Swiper
            breakpoints={{
              600: {
                slidesPerView: 2,
                spaceBetween: 30,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 30,
              },
              1200: {
                slidesPerView: 6,
                spaceBetween: 30,
              },
            }}
            className="h-[188px] mt-5"
          >
            {BrandList.map((item, i) => (
              <SwiperSlide key={i}>
                <Link
                  onClick={window.scrollTo(0, 0)}
                  to={`/by-brand/${item["_id"]}`}
                  className="flexCenter gap-x-5 bg-white  p-4 rounded-xl "
                >
                  <img
                    src={item.brandImg}
                    height={77}
                    width={77}
                    className="rounded-lg drop-shadow-xl p-2"
                  />
                  <div className="flex flex-col gap-y-1  ">
                    <h4 className="line-clamp-1 medium-16">{item.brandName}</h4>

                    <div className="flexBetween">
                      <div className="flexBetween gap-x-2 medium-16">
                        {/* <span>${item.new_price}.00</span>
                        <span className="line-through text-secondary">
                          ${item.old_price}.00
                        </span> */}
                      </div>
                      {/* <RiShoppingCart2Line className="text-xl hover:text-secondary" /> */}
                    </div>
                  </div>
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    );
  }
};

export default Brands;
