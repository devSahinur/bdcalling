"use client";

import { useState } from "react";

const ServiceData = [
  {
    id: 1,
    title: "Mobile App Development",
    description:
      "Transforming ideas into seamless experiences, one app at a time",
  },
  {
    id: 2,
    title: "Web App Development",
    description:
      "Empowering your digital presence with our expert web app solutions",
  },
  {
    id: 1,
    title: "UI/UX Mobile App design",
    description:
      "Crafting delightful experiences that drive engagement and elevate your brand",
  },
  {
    id: 1,
    title: "Custom Software Development",
    description:
      "Creating tailored software solutions that exceed expectations",
  },
  {
    id: 1,
    title: "MVP Development",
    description:
      "Unleash your product's potential with our MVP development expertise",
  },
  {
    id: 1,
    title: "Consultancy",
    description: "Innovative solutions for complex business challenges",
  },
];

function Services() {
  const [showMore, setShowMore] = useState(true);

  return (
    <div className="container py-[60px]">
      <div className="grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6  place-items-center">
        <div className="md:col-span-2">
          <h1 className="text-[3.5rem] text-left lg:font-semibold py-[16px]">
            Services we Offer
          </h1>
        </div>
        {ServiceData.map((item) => (
          <div
            key={item.id}
            className="flex group items-center hover:border-primary border border-gray-300 rounded-lg h-220 p-5 transition-all duration-100 max-w-[516px] h-[220px]"
          >
            <div className="">
              <h4 className="text-[22px] font-semibold">{item.title}</h4>
              <p>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
      {showMore && (
        <div className="flex lg:hidden justify-center mt-5">
          <button className="bg-primary text-white p-3 rounded-xl w-full lg:max-w-[516px] ">
            Show More
          </button>
        </div>
      )}
    </div>
  );
}

export default Services;
