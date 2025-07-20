"use client";

import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function Slider() {
  const images = [
    "/image1.avif",
    "/image2.avif",
    "/image3.avif",
    "/image4.avif",
    "/image5.avif",
    "/image6.avif",
  ];

  const swiperRef = useRef(null);

  return (
    <>
      <div className="w-full pt-[44.92%] overflow-hidden relative">
        <div className="absolute inset-0">
          <Swiper
            spaceBetween={16}
            slidesPerView={1.25}
            centeredSlides={true}
            speed={600}
            loop
            className="absolute inset-0 w-full h-full"
            onSwiper={(swiper) => {
              swiperRef.current = swiper;
            }}
          >
            {images.map((src, index) => (
              <SwiperSlide key={index} className="!h-full w-[70%]">
                <img
                  src={src}
                  alt={`Slide ${index + 1}`}
                  className="w-full h-full rounded-[5px] object-cover"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      <div className="pt-9 flex justify-center w-full gap-6">
        <button
          className="w-10 h-10 rounded-full border border-white flex justify-center items-center transition duration-200 cursor-pointer ease-in-out hover:bg-white group"
          onClick={() => swiperRef.current?.slidePrev()}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 40 40"
            strokeWidth="2"
            className="w-6 h-6 stroke-current fill-none text-white transition duration-200 ease-in-out group-hover:text-black"
          >
            <path d="M20.52 6.46 7.06 19.91l13.55 13.56M31.18 20.01H7.06"></path>
          </svg>
        </button>

        <button
          className="w-10 h-10 rounded-full border border-white flex justify-center items-center transition duration-200 cursor-pointer ease-in-out hover:bg-white group"
          onClick={() => swiperRef.current?.slideNext()}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 40 40"
            strokeWidth="2"
            className="w-6 h-6 stroke-current fill-none text-white transition duration-200 ease-in-out group-hover:text-black -scale-x-100"
          >
            <path d="M20.52 6.46 7.06 19.91l13.55 13.56M31.18 20.01H7.06"></path>
          </svg>
        </button>
      </div>
    </>
  );
}
