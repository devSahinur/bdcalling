"use client";
import animationData from "../../public/data";
import arrowAnimationData from "../../public/arrow";
import Lottie from "react-lottie";
import { useEffect, useState } from "react";

const data = [
  {
    id: 1,
    name: "MD.monir hossain",
    image: "https://i.postimg.cc/DZHYVVdB/ceo-bdcalling.png",
    position: "Founder / CEO",
  },
  {
    id: 2,
    name: "Sabina",
    image: "https://i.postimg.cc/LhKQyhcm/chairmanofbdcalling.jpg",
    position: "Chairman of bdcalling",
  },
  {
    id: 3,
    name: "Md.Babul mridha",
    image: "https://i.postimg.cc/Z52k3KRK/babulsir.jpg",
    position: "Consultant",
  },
  {
    id: 4,
    name: "Shiku",
    image: "https://i.postimg.cc/dt4cQcTn/siku.jpg",
    position: "Team leader",
  },
];

function Hero() {
  const [bgImage, setBgImage] = useState(data[0].image);
  const [bgName, setBgName] = useState(data[0].name);
  const [bgPosition, setBgPosition] = useState(data[0].position);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % data.length); // Wrap around to the beginning when reaching the end
    }, 2300);

    return () => clearInterval(interval); // Cleanup the interval when the component unmounts
  }, []);

  useEffect(() => {
    setBgImage(data[currentIndex].image);
    setBgName(data[currentIndex].name);
    setBgPosition(data[currentIndex].position);
  }, [currentIndex]);

  const divStyle = {
    backgroundImage: `url('${bgImage}')`,
    boxShadow:
      "rgba(0, 0, 0, 0.2) 0px 12px 28px 0px, rgba(0, 0, 0, 0.1) 0px 2px 4px 0px, rgba(255, 255, 255, 0.05) 0px 0px 0px 1px inset",
  };

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  const arrowOptions = {
    loop: true,
    autoplay: true,
    animationData: arrowAnimationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <div className="z-100 custom-gradient" style={{paddingTop:"80px"}}>
      <div className="container md:h-[100vh]">
        <div className="flex flex-col-reverse md:flex-row items-center pt-5">
          <div className="flex flex-col md:col-span-4 " style={{paddingRight:"50px"}}>
            <h1 className="text-[2.5em] lg:text-[4rem] font-semibold" style={{paddinRight:"50px"}}>
              From Concept to Launch, Your Trusted Partner in MVP Development.
            </h1>
            <p  data-aos="fade-up" className="my-5" style={{paddingRight:"50px"}}>
              We have 12+ years of experience providing consulting and business
              solutions, leveraging our expertise in technology to deliver
              innovative results for our clients.
            </p>
            <button  data-aos="fade-up" className="bg-primary text-white p-3 rounded-xl w-full lg:w-[432px]">
              EXPLORE
            </button>
          </div>
          <div
            data-aos="fade-left"
            className="flex flex-col items-center md:col-span-4  "
          >
            <div
              style={divStyle}
              className={` bg-left lg:bg- bg-blue-300 bg-cover bg-no-repeat rounded-full  transition-all duration-250 ease-in w-[290px] lg:w-[300px] h-[450px] lg:h-[650px] relative z-auto`}
            >
              <div className="absolute hidden lg:flex rotate-[-40deg] left-[230px] ">
                <Lottie options={arrowOptions} height={100} width={200} />
              </div>
              <div className="absolute top-[270px] lg:top-[370px] -left-[50px]">
                <Lottie options={defaultOptions} height={215} width={150} />
              </div>
            </div>
            <div className="flex flex-col text-center justify-center w-full">
              <h2 className="text-2xl">{bgName}</h2>
              <p>{bgPosition}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
