// import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/swiper-bundle.min.css'; // Import Swiper styles
// import SwiperCore, { Navigation, Pagination, Autoplay } from 'swiper';


// Install Swiper modules
// SwiperCore.use([Navigation, Pagination, Autoplay]);

function Testimonials() {
    const breakpoints = {
        // when window width is >= 320px
        320: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        // when window width is >= 480px
        480: {
          slidesPerView: 2,
          spaceBetween: 30,
        },
        // when window width is >= 768px
        768: {
          slidesPerView: 3,
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
      <div></div>
    </div>
  );
}

export default Testimonials;
