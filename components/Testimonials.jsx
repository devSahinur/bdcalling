"use client";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation } from "swiper/modules";

function Testimonials() {
  const breakpoints = {
    // when window width is >= 320px
    320: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    // when window width is >= 480px
    480: {
      slidesPerView: 1,
      spaceBetween: 30,
    },
    // when window width is >= 768px
    768: {
      slidesPerView: 1,
      spaceBetween: 40,
    },
    // when window width is >= 1024px
    1024: {
      slidesPerView: 4,
      spaceBetween: 50,
    },
  };
  return (
    <div className="custom-gradient">
      <div className="container">
        <h1 className="text-[40px] text-center md:text-left md:text-[56px] font-semibold">
          Testimonials
        </h1>
        <p className="text-sm text-center md:text-left">
          Our clients' achievements and satisfaction are the best testament to
          our work. Discover the impact of our partnership through their own
          words.
        </p>
      </div>
      {/* slider here  */}
      <Swiper
        breakpoints={breakpoints}
        navigation
        pagination={{ clickable: true }}
        // autoplay={{ delay: 3000 }}
        modules={[Pagination, Navigation]}
      >
        <SwiperSlide>
          <div className="grid grid-row grid-cols-12 max-w-[800px] bg-white max-h-[300px]">
            <div className="col-span-4">
              <img
                className="w-[200px] h-[300px] bloc"
                src="https://duseca.com/static/media/10.867cc3a864ffc89e4d32.jpg"
                alt=""
              />
            </div>
            <div className="col-span-8 flex flex-col ">
              <p className="text-sm">May 8,2022</p>
              <h1 className="text-[26px]">mateojack || United Arab Emirates</h1>
              <p className="text-xs">
                Exceptional development skills and fantastic designers. Did a
                brilliant job and provided me with a banging app! Highly
                recommend working with them if you want taste of how real
                development looks like. Thanks Malek and team, you made me a
                permanent customer. See you again soon. Peace.
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        {/* Add more slides as needed */}
      </Swiper>

      <div></div>
    </div>
  );
}

export default Testimonials;

{
  /* <div className="flex max-w-[800px] max-h-[300px]">
<div>
  <img
    className="w-[200px] h-[300px] bloc"
    src="https://duseca.com/static/media/10.867cc3a864ffc89e4d32.jpg"
    alt=""
  />
</div>
<div>
  <p className="text-sm">May 8,2022</p>
  <h1 className="text-[26px]">mateojack || United Arab Emirates</h1>
  <p className="text-xs">
    Exceptional development skills and fantastic designers. Did a
    brilliant job and provided me with a banging app! Highly
    recommend working with them if you want taste of how real
    development looks like. Thanks Malek and team, you made me a
    permanent customer. See you again soon. Peace.
  </p>
</div>
</div> */
}
