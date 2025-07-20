"use client";

import { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function HardSlider() {
  const rawSlides = [
    {
      variations: [
        { image: "/himage1.png", color: "#b76d68" },
        { image: "/himage1-1.png", color: "#8e957c" },
      ],
    },
    {
      variations: [{ image: "/himage2.png", color: "#047063" }],
    },
    {
      variations: [{ image: "/himage3.png", color: "#334430" }],
    },
    {
      variations: [{ image: "/himage4.png", color: "#d1d3d4" }],
    },
    {
      variations: [{ image: "/himage5.png", color: "#505556" }],
    },
  ];

  const images = [...rawSlides, ...rawSlides];

  const [activeIndex, setActiveIndex] = useState(0);
  const [selectedVariations, setSelectedVariations] = useState(
    rawSlides.map(() => 0)
  );

  const swiperRef = useRef(null);

  useEffect(() => {
    const bullets = document.querySelectorAll(".custom-bullet");

    bullets.forEach((bullet, index) => {
      if (index === activeIndex) {
        bullet.classList.add("swiper-pagination-bullet-active");
      } else {
        bullet.classList.remove("swiper-pagination-bullet-active");
      }
    });
  }, [activeIndex]);

  const currentVariationIndex = selectedVariations[activeIndex];
  const currentVariation =
    rawSlides[activeIndex].variations[currentVariationIndex];

  return (
    <>
      <div className="slider-super-container">
        <div
          className="slider-background"
          style={{ backgroundColor: currentVariation.color }}
        >
          <div className="slider-background-image"></div>
          <div className="slider-background-image2"></div>
        </div>
        <div className="slider-wrapper">
          <div className="aspect-ratio-box">
            <div className="slider-container">
              <Swiper
                slidesPerView={1.5}
                centeredSlides={true}
                speed={600}
                loop
                pagination={{
                  el: ".custom-pagination",
                  clickable: true,
                  renderBullet: (index, className) =>
                    index < rawSlides.length
                      ? `<span class="${className} custom-bullet" data-bullet-index="${index}"></span>`
                      : "",
                  dynamicBullets: false,
                }}
                modules={[Pagination]}
                className="swiper-override"
                onSwiper={(swiper) => {
                  swiperRef.current = swiper;
                  setActiveIndex(swiper.realIndex % rawSlides.length);
                }}
                onSlideChange={(swiper) => {
                  setActiveIndex(swiper.realIndex % rawSlides.length);
                }}
                breakpoints={{
                  0: {
                    slidesPerView: 1,
                  },
                  570: {
                    slidesPerView: 1.5,
                  },
                }}
              >
                {images.map((slide, index) => {
                  const realIndex = index % rawSlides.length;
                  const variationIndex = selectedVariations[realIndex];
                  const variation =
                    rawSlides[realIndex].variations[variationIndex];

                  return (
                    <SwiperSlide key={index} className="slide-full-height">
                      <img
                        src={variation.image}
                        alt={`Slide ${index + 1}`}
                        className="slide-image"
                      />
                      <div className="slide-play-button">
                        <mhp-ui-icon>
                          <mat-icon
                            role="img"
                            className="mat-icon notranslate ui-icon ui-icon--size-xsmall mat-icon-no-color"
                            aria-hidden="true"
                            data-mat-icon-type="svg"
                            data-mat-icon-name="play"
                            data-mat-icon-namespace="mhp-ui"
                          >
                            <svg
                              viewBox="0 0 32 32"
                              xmlns="http://www.w3.org/2000/svg"
                              fit=""
                              height="100%"
                              width="100%"
                              preserveAspectRatio="xMidYMid meet"
                              focusable="false"
                              className="slide-play-button-icon"
                            >
                              <path d="M29.37 16 4.67 31.86V.1Z"></path>
                            </svg>
                          </mat-icon>
                        </mhp-ui-icon>
                      </div>
                    </SwiperSlide>
                  );
                })}
              </Swiper>
            </div>
          </div>
        </div>
        <div className="slider-contentDown">
          <div className="slider-contentDown-buttons">
            <button
              className="slider-button"
              onClick={() => swiperRef.current?.slidePrev()}
            >
              <mhp-ui-icon>
                <mat-icon
                  role="img"
                  className="mat-icon notranslate ui-icon ui-icon--size-large mat-icon-no-color"
                  aria-hidden="true"
                  data-mat-icon-type="svg"
                  data-mat-icon-name="angle-left"
                  data-mat-icon-namespace="mhp-ui"
                >
                  <svg
                    viewBox="0 0 32 32"
                    xmlns="http://www.w3.org/2000/svg"
                    fit=""
                    height="100%"
                    width="100%"
                    preserveAspectRatio="xMidYMid meet"
                    focusable="false"
                    className="slider-button-icon"
                  >
                    <path d="M24.33 28.71 11.62 16 24.33 3.29c.73-.73.73-1.9 0-2.63s-1.9-.73-2.63 0L7.67 14.69c-.73.73-.73 1.9 0 2.63l14.01 14.01c.73.74 1.9.74 2.63.01s.73-1.9 0-2.63Z"></path>
                  </svg>
                </mat-icon>
              </mhp-ui-icon>
            </button>
            <div className="custom-pagination" />
            <button
              className="slider-button"
              onClick={() => swiperRef.current?.slideNext()}
            >
              <mhp-ui-icon>
                <mat-icon
                  role="img"
                  className="mat-icon notranslate ui-icon ui-icon--size-large mat-icon-no-color"
                  aria-hidden="true"
                  data-mat-icon-type="svg"
                  data-mat-icon-name="angle-left"
                  data-mat-icon-namespace="mhp-ui"
                >
                  <svg
                    viewBox="0 0 32 32"
                    xmlns="http://www.w3.org/2000/svg"
                    fit=""
                    height="100%"
                    width="100%"
                    preserveAspectRatio="xMidYMid meet"
                    focusable="false"
                    className="slider-button-icon2"
                  >
                    <path d="M24.33 28.71 11.62 16 24.33 3.29c.73-.73.73-1.9 0-2.63s-1.9-.73-2.63 0L7.67 14.69c-.73.73-.73 1.9 0 2.63l14.01 14.01c.73.74 1.9.74 2.63.01s.73-1.9 0-2.63Z"></path>
                  </svg>
                </mat-icon>
              </mhp-ui-icon>
            </button>
          </div>

          <div className="slider-contentDown-options">
            {rawSlides[activeIndex].variations.length > 1 &&
              rawSlides[activeIndex].variations.map((variation, vIndex) => (
                <button
                  key={vIndex}
                  className={`option-button ${
                    selectedVariations[activeIndex] === vIndex ? "active" : ""
                  }`}
                  onClick={() =>
                    setSelectedVariations((prev) => {
                      const updated = [...prev];
                      updated[activeIndex] = vIndex;
                      return updated;
                    })
                  }
                >
                  <img
                    src={variation.image}
                    alt={`Slide`}
                    className="option-button-image"
                  />
                </button>
              ))}
          </div>
        </div>
      </div>
    </>
  );
}
