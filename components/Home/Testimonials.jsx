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

const sliderData = [
  {
    id: 1,
    title: "thewiscokid || United States",
    description:
      "Wajahat and team were incredibly helpful with scoping, which made the project go smoothly and helped us better understand our ideas. The dev team was able to accommodate changes/edits and show us changes in both iOS and Android. Top-notch development and communication!",
    image: "https://duseca.com/static/media/2.c30348efc97567c7d962.jpg",
    date: "February 27, 2023",
  },
  {
    id: 2,
    title: "nellaherdon || United States",
    description:
      "The communication with these guys was easy. they are so smart and have really turned my idea to a product, this is what the designer Mr. Raju Mullah have showed me through his very decent designs, and he is very creative and well experienced.",
    image: "https://duseca.com/static/media/3.0de18d85c3808a68fca9.jpg",
    date: "November 20, 2022",
  },
  {
    id: 3,
    title: "juliannevin || United Kingdom",
    description:
      "Working with the team has been really easy. They've assisted along the way and had great thoughts and input towards the design and functionality of our app. We have future plans that we're currently working on with the team.",
    image: "https://duseca.com/static/media/4.a5779912e0155ad3eb64.jpg",
    date: "May 8,2022",
  },
  {
    id: 4,
    title: "jens_sch || Germany",
    description:
      "It is a wonderful experience working with Wajahat and his team. He can understand the project, knows the problems and always has the right solutions. Top class! I look forward to further cooperation.",
    image: "https://duseca.com/static/media/6.29d1ebe5853007b37ddf.jpg",
    date: "May 8,2022",
  },
  {
    id: 5,
    title: "alficstheo || United States",
    description:
      "Everything about this seller was great. The communication was fantastic and he was very honest about everything. Designs they provided were really sleek. Working with Wajahat was worth my teams time, the developers also worked as a great unit building our desired app. The finished app was worth every penny. Then we also had great suggestions about the scope of project. Great experience with really nice people. Thanks!",
    image: "https://duseca.com/static/media/9.2694dd8324712545acdf.jpg",
    date: "May 8,2022",
  },
];

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
      slidesPerView: 2,
      spaceBetween: 50,
    },
  };
  return (
    <div className="custom-gradient">
      <div className="container">
        <h1
          data-aos="fade-right"
          className="text-[40px] lg:pt-[80px] text-center md:text-left md:text-[56px] font-semibold"
        >
          Testimonials
        </h1>
        <p className="text-sm text-center md:text-left">
          Our clients' achievements and satisfaction are the best testament to
          our work. Discover the impact of our partnership through their own
          words.
        </p>
      </div>

      <div className="py-[70px]">
        <Swiper
          breakpoints={breakpoints}
          navigation
          // pagination={{ clickable: true }}
          // autoplay={{ delay: 3000 }}
          modules={[Navigation]}
        >
          {sliderData.map((item) => (
            <SwiperSlide key={item.id}>
              <div className="grid grid-row grid-cols-12 max-w-[800px] bg-white max-h-[300px] mx-10 rounded-md">
                <div className="col-span-4">
                  <img
                    className="w-[250px] h-[300px] rounded-l-lg"
                    src={item?.image}
                    alt=""
                  />
                </div>
                <div className="col-span-8 flex flex-col py-5">
                  <p className="text-sm">{item?.date}</p>
                  <h1 className="text-[26px]">{item?.title}</h1>
                  <p className="text-xs">{item?.description}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
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
