"use client";

import { useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";

export default function Slider() {
  const images = [
    "/image1.avif",
    "/image2.avif",
    "/image3.avif",
    "/image4.avif",
    "/image5.avif",
    "/image6.avif",
  ];

  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "center",
    skipSnaps: false,
    dragFree: false,
  });

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  return (
    <>
      <div className="w-full pt-[44.92%] relative overflow-hidden transition duration-200 ease-in-out">
        <div
          className="absolute inset-0 transition duration-200 ease-in-out"
          ref={emblaRef}
        >
          <div className="flex h-full">
            {images.map((src, index) => (
              <div key={index} className="flex-[0_0_80%] pl-4 h-full">
                <img
                  src={src}
                  alt={`Slide ${index + 1}`}
                  className="w-full h-full rounded-[5px] object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="pt-9 flex justify-center w-full gap-6">
        <button
          onClick={scrollPrev}
          className="w-10 h-10 rounded-full border border-white flex justify-center items-center transition duration-200 cursor-pointer ease-in-out hover:bg-white group"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 40 40"
            strokeWidth="2"
            className="w-6 h-6 stroke-current fill-none text-white transition duration-200 ease-in-out group-hover:text-black"
          >
            <path d="M20.52 6.46 7.06 19.91l13.55 13.56M31.18 20.01H7.06" />
          </svg>
        </button>

        <button
          onClick={scrollNext}
          className="w-10 h-10 rounded-full border border-white flex justify-center items-center transition duration-200 cursor-pointer ease-in-out hover:bg-white group"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 40 40"
            strokeWidth="2"
            className="w-6 h-6 stroke-current fill-none text-white transition duration-200 ease-in-out group-hover:text-black -scale-x-100"
          >
            <path d="M20.52 6.46 7.06 19.91l13.55 13.56M31.18 20.01H7.06" />
          </svg>
        </button>
      </div>
    </>
  );
}
