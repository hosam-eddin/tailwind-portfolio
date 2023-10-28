import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import test01 from "../images/testi-1.jpg";
import test02 from "../images/testi-2.jpg";
import test03 from "../images/testi-3.jpg";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";
import ptest01 from "../images/testi-1.jpg";
import ptest02 from "../images/testi-2.jpg";
import ptest03 from "../images/testi-3.jpg";
import Counter from "./Counter";

//  countUp

export default function Clients() {
  return (
    <section
      className="min-h-screen bg-gray-100 py-20  flex flex-wrap items-center"
      id="clients"
    >
      <div className="flex w-full ">
        <div className="img-bg relative z-10 mx-auto">
          <h1 className=" text-center font-bold text-5xl text-gray-600 ">
            Clients.
          </h1>
        </div>
      </div>
      <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="carousel-item w-100 text-center space-y-8 py-10">
            <img
              src={test01}
              alt=""
              className="block rounded-full mx-auto border-blue-700 border-2 my-5"
            />
            <div className="space-y-10">
              <p className="text-secondary text-center w-4/12 m-auto">
                Lorem Ipsum has been the industry's standard dummy text ever
                since the when an unknown printer took a galley of type and
                scrambled it to make a type specimen book.
              </p>
              <span className="text-dark text-lg">Alex Smith</span>
              <p className="description text-black-50 text-sm font-semibold">
                Envato Customer
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="carousel-item w-100 text-center space-y-8 py-10">
            <img
              src={test02}
              alt=""
              className="block rounded-full mx-auto border-blue-700 border-2 my-5"
            />
            <div className="space-y-10">
              <p className="text-secondary text-center w-4/12 m-auto">
                Lorem Ipsum has been the industry's standard dummy text ever
                since the when an unknown printer took a galley of type and
                scrambled it to make a type specimen book.
              </p>
              <span className="text-dark text-lg">Alex Smith</span>
              <p className="description text-black-50 text-sm font-semibold">
                Envato Customer
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="carousel-item w-100 text-center space-y-8 py-10">
            <img
              src={test03}
              alt=""
              className="block rounded-full mx-auto border-blue-700 border-2 my-5"
            />
            <div className="space-y-10">
              <p className="text-secondary text-center w-4/12 m-auto">
                Lorem Ipsum has been the industry's standard dummy text ever
                since the when an unknown printer took a galley of type and
                scrambled it to make a type specimen book.
              </p>
              <span className="text-dark text-lg">Alex Smith</span>
              <p className="description text-black-50 text-sm font-semibold">
                Envato Customer
              </p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
      <Counter/>
    </section>
  );
}
