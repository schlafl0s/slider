"use client";

import { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Select, MenuItem, FormControl, InputLabel } from "@mui/material";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

export default function HardSlider() {
  const rawSlides = [
    {
      variations: [
        {
          image: "/himage1.png",
          color: "#b76d68",
          title: "Vanquish",
          description:
            "Ushering in a glorious new era of V12 supremacy. Vanquish stands unrivalled at the peak of British mastery.",
          video: "/mainVideo1.mp4",
        },
        {
          image: "/himage1-1.png",
          color: "#8e957c",
          title: "Vanquish Volante",
          description:
            "Ushering in a glorious new era of V12 supremacy. Vanquish stands unrivalled at the peak of British mastery.",
          video: "/mainVideo2.mp4",
        },
      ],
    },
    {
      variations: [
        {
          image: "/himage2.png",
          color: "#069e8dff",
          title: "Valhalla",
          description: "Aston Martin’s first-ever mid-engine PHEV supercar.",
          video: "/mainVideo1.mp4",
        },
      ],
    },
    {
      variations: [
        {
          image: "/himage3.png",
          color: "#516c4cff",
          title: "DB12",
          description:
            "This is no mere GT. This is the world’s first super tourer.",
          video: "/mainVideo2.mp4",
        },
      ],
    },
    {
      variations: [
        {
          image: "/himage4.png",
          color: "#d1d3d4",
          title: "DBX S",
          description:
            "Marking the return of S. Lighter. Faster. More powerful.",
          video: "/mainVideo1.mp4",
        },
      ],
    },
    {
      variations: [
        {
          image: "/himage5.png",
          color: "#6d7576ff",
          title: "Vantage S",
          description:
            "More edge. More visceral. More dominant. Vantage S takes its place in an iconic line of high-performing Aston Martin models at the pinnacle of sportcar engagement.",
          video: "/mainVideo5.mp4",
        },
      ],
    },
  ];

  const images = [...rawSlides, ...rawSlides];

  const [activeIndex, setActiveIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [selectedVariations, setSelectedVariations] = useState(
    rawSlides.map(() => 0)
  );
  const inputRef = useRef(null);
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

  function hexToRgba(hex, alpha) {
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);
    return `rgba(${r}, ${g}, ${b}, ${alpha})`;
  }
  const bgColor = hexToRgba(currentVariation.color, 0.25);

  return (
    <>
      <div className="slider-super-container">
        <div
          className="slider-background"
          style={{ backgroundColor: currentVariation.color }}
        >
          <div className="slider-background-video">
            <video
              key={currentVariation.video}
              src={currentVariation.video}
              autoPlay
              muted
              playsInline
              loop
              className="slider-video"
              style={{
                opacity: isPlaying ? "1" : "0",
                height: isPlaying ? "77.5%" : "50%",
                transition: "all 2s ease",
              }}
            />
          </div>
          <div
            className="slider-background-image"
            style={{
              height: isPlaying ? "77.5%" : "50%",
              transition: "height 2s ease",
            }}
          />
          <div
            className="slider-background-line"
            style={{
              opacity: isPlaying ? "1" : "0",
              top: isPlaying ? "77.5%" : "50%",
              transition: "all 2s ease",
              backgroundColor: bgColor,
              boxShadow: `
                  0 0 16px ${bgColor},
                  0 0 32px ${bgColor},
                  0 0 64px ${bgColor},
                  0 0 128px ${bgColor},
                  0 -2px 60px 60px ${bgColor},
                  0 -18px 40px 20px ${bgColor},
                  0 2px 60px 60px ${bgColor}
                `,
              filter: "brightness(1.8)",
            }}
          ></div>
          <div
            className="slider-background-image2"
            style={{
              height: isPlaying ? "22.5%" : "50%",
              transition: "height 2s ease",
            }}
          />
          <button
            className="close-button"
            onClick={() => setIsPlaying(false)}
            style={{
              opacity: isPlaying ? "1" : "0",
              pointerEvents: isPlaying ? "auto" : "none",
              transition: "opacity 2s ease",
            }}
          >
            <mhp-ui-icon _ngcontent-ng-c348513252="" _nghost-ng-c1291655634="">
              <mat-icon
                _ngcontent-ng-c1291655634=""
                role="img"
                class="mat-icon notranslate ui-icon ui-icon--size-medium mat-icon-no-color"
                aria-hidden="true"
                data-mat-icon-type="svg"
                data-mat-icon-name="close"
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
                  className="close-button-icon"
                >
                  <path d="M31.95 1.96 30.08.09 16.02 14.15 1.95.09.08 1.96l14.06 14.07L.13 30.04 2 31.91 16.02 17.9l14.01 14.01 1.87-1.87-14.01-14.01L31.95 1.96z"></path>
                </svg>
              </mat-icon>
            </mhp-ui-icon>
          </button>
        </div>
        <div
          className="slider-wrapper"
          style={{
            height: isPlaying ? "122.5vh" : "100vh",
            transition: "height 2s ease",
          }}
        >
          <div className="aspect-ratio-box">
            <div
              className="slider-container"
              style={{
                pointerEvents: isPlaying ? "none" : "auto",
                cursor: isPlaying ? "default" : "",
              }}
            >
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
                  const isActive = realIndex === activeIndex;

                  return (
                    <SwiperSlide
                      key={index}
                      className={`slide-full-height ${
                        isPlaying ? "playing" : "paused"
                      }`}
                    >
                      <img
                        src={variation.image}
                        alt={`Slide ${index + 1}`}
                        className="slide-image"
                      />
                      <button
                        className="slide-play-button"
                        style={{
                          opacity: isPlaying ? "0" : "1",
                          pointerEvents: isPlaying ? "none" : "auto",
                          transition: "opacity 2s ease",
                        }}
                        onClick={() => setIsPlaying(true)}
                      >
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
                      </button>
                      {isActive && (
                        <span
                          className="slide-header"
                          style={{
                            opacity: isPlaying ? "0" : "1",
                            transition: "all 2s ease",
                          }}
                        >
                          {variation.title}
                        </span>
                      )}
                    </SwiperSlide>
                  );
                })}
              </Swiper>
            </div>
          </div>
        </div>
        <div
          className="slider-contentUp"
          style={{
            opacity: isPlaying ? "0" : "1",
            pointerEvents: isPlaying ? "none" : "auto",
            transition: "opacity 2s ease",
          }}
        >
          <span className="slider-contentUp-header">
            {currentVariation.title}
          </span>
          <p className="slider-contentUp-text">
            {currentVariation.description}
          </p>
        </div>
        <div
          className="slider-contentDown"
          style={{
            opacity: isPlaying ? "0" : "1",
            pointerEvents: isPlaying ? "none" : "auto",
            transition: "opacity 2s ease",
          }}
        >
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
          <div
            className={`slider-contentDown-options ${
              rawSlides[activeIndex].variations.length > 1 ? "visible" : ""
            }`}
            style={{
              pointerEvents: isPlaying ? "none" : "auto",
            }}
          >
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
                  <span className="option-button-text">{variation.title}</span>
                </button>
              ))}
          </div>
        </div>
        <div
          className="slider-contentDown-phone"
          style={{ backgroundColor: bgColor }}
        >
          <p className="slider-contentDown-phone-text">
            {currentVariation.description}
          </p>
          {rawSlides[activeIndex].variations.length > 1 && (
            <div className="slider-contentDown-phone-select">
              <label className="slider-contentDown-phone-select-text">
                Select Model
              </label>
              <FormControl
                fullWidth
                size="small"
                variant="filled"
                sx={{
                  backgroundColor: "transparent",
                  ".MuiFilledInput-root": {
                    backgroundColor: "transparent !important", // убираем фон
                    paddingTop: "0px",
                    paddingRight: "0px",
                    color: "#fff",
                    "&:hover": {
                      backgroundColor: "transparent !important", // убираем фон при hover
                    },
                    "&.Mui-focused": {
                      backgroundColor: "transparent !important", // убираем фон при фокусе
                    },
                    "&:before": {
                      borderBottom:
                        "1px solid rgba(255, 255, 255, 0.3) !important",
                    },
                    "&:hover:not(.Mui-disabled):before": {
                      borderBottom:
                        "1px solid rgba(255, 255, 255, 0.5) !important",
                    },
                    "&.Mui-focused:after": {
                      borderBottom: "2px solid #fff !important",
                    },
                    "&:after": {
                      transition: "none !important",
                    },
                    "&.Mui-focused:before": {
                      borderBottom: "none !important",
                    },
                    "&.Mui-disabled:before": {
                      borderBottomStyle: "dotted",
                      borderBottomColor: "rgba(255,255,255,0.2)",
                    },
                  },
                  ".MuiInputLabel-root": {
                    color: "rgba(255, 255, 255, 0.5)",
                    fontWeight: 500,
                    "&.Mui-focused": {
                      color: "#fff",
                    },
                  },
                  ".MuiSelect-icon": {
                    right: "-5px",
                    top: "calc(50% - 16px)",
                    color: "rgba(255, 255, 255, 1)",
                    fontSize: "30px",
                  },
                  ".MuiSelect-iconOpen": {
                    transform: "none !important",
                  },
                  ".MuiSelect-select": {
                    paddingTop: "8px",
                    paddingBottom: "8px",
                    paddingLeft: "0px",
                    color: "#fff",
                  },
                }}
              >
                <Select
                  labelId="model-select-label"
                  id="model-select"
                  inputRef={inputRef}
                  IconComponent={ExpandMoreIcon}
                  value={selectedVariations[activeIndex]}
                  onChange={(e) => {
                    const selected = e.target.value;
                    setSelectedVariations((prev) => {
                      const updated = [...prev];
                      updated[activeIndex] = selected;
                      return updated;
                    });
                  }}
                  onClose={() => {
                    setTimeout(() => {
                      const activeEl = document.activeElement;
                      if (
                        activeEl &&
                        activeEl instanceof HTMLElement &&
                        activeEl.blur
                      ) {
                        activeEl.blur();
                      }
                    }, 0);
                  }}
                  MenuProps={{
                    PaperProps: {
                      sx: {
                        mt: 1,
                        bgcolor: "#333",
                        color: "#fff",
                        borderRadius: "8px",
                        boxShadow:
                          "0px 3px 6px rgba(0,0,0,0.5), 0px 3px 6px rgba(0,0,0,0.7)",
                        "& .MuiMenuItem-root.Mui-selected": {
                          bgcolor: "rgba(255, 255, 255, 0.15) !important",
                          color: "#fff",
                          "&:hover": {
                            bgcolor: "rgba(255, 255, 255, 0.25) !important",
                          },
                        },
                        "& .MuiMenuItem-root": {
                          color: "rgba(255, 255, 255, 1)",
                          "&:hover": {
                            bgcolor: "rgba(255, 255, 255, 0.1)",
                            color: "#fff",
                          },
                        },
                      },
                    },
                  }}
                >
                  {rawSlides[activeIndex].variations.map((variation, index) => (
                    <MenuItem key={index} value={index}>
                      {variation.title}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
